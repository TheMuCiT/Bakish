import {View, Text, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAuthContext} from '../../contexts/AuthContext';
import {useStripe} from '@stripe/stripe-react-native';
import {useMutation} from '@apollo/client';
import {
  CreatePaymentIntentMutation,
  CreatePaymentIntentMutationVariables,
} from '../../API';
import {createPaymentIntent} from './queries';
import {useRoute} from '@react-navigation/native';
import {PaymentStripeRouteProp} from '../../types/navigation';

const PaymentStripeScreen = () => {
  const {userId} = useAuthContext();
  const route = useRoute<PaymentStripeRouteProp>();
  const amount = route.params.amount;

  const {initPaymentSheet, presentPaymentSheet} = useStripe();

  const [doCreatePaymentInstant, {data}] = useMutation<
    CreatePaymentIntentMutation,
    CreatePaymentIntentMutationVariables
  >(createPaymentIntent);

  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    console.log('InitPayment');
    console.log(amount);
    if (amount) {
      doCreatePaymentInstant({variables: {amount: amount}});
    }
  }, []);

  useEffect(() => {
    if (data?.createPaymentIntent.clientSecret) {
      setClientSecret(data.createPaymentIntent.clientSecret);
    }
  }, [data]);

  useEffect(() => {
    if (clientSecret) {
      initializePaymentSheet();
    }
  }, [clientSecret]);

  const initializePaymentSheet = async () => {
    if (!clientSecret) {
      return;
    }
    const {error} = await initPaymentSheet({
      customerId: userId,
      paymentIntentClientSecret: clientSecret,
      merchantDisplayName: 'Bakish',
    });

    if (error) {
      console.log(error);
    }

    await openPaymentSheet();
  };

  const openPaymentSheet = async () => {
    const {error, paymentOption} = await presentPaymentSheet();

    console.log(paymentOption);

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };

  return (
    <View>
      <Text>PaymentStripeScreen</Text>
    </View>
  );
};

export default PaymentStripeScreen;
