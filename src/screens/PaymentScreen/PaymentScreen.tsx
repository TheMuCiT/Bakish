import {useMutation} from '@apollo/client';
import {useRoute} from '@react-navigation/native';
import {CardField, useStripe} from '@stripe/stripe-react-native';
import {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, Alert} from 'react-native';
import {
  CreatePaymentIntentMutation,
  CreatePaymentIntentMutationVariables,
} from '../../API';
import {useAuthContext} from '../../contexts/AuthContext';
import {PaymentRouteProp} from '../../types/navigation';
import {createPaymentIntent} from './queries';

const PaymentScreen = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const {userId} = useAuthContext();
  const route = useRoute<PaymentRouteProp>();
  const amount = route.params?.totalPrice || 0;

  const {initPaymentSheet, presentPaymentSheet, confirmPayment} = useStripe();

  const [doCreatePaymentInstant, {data, loading, error}] = useMutation<
    CreatePaymentIntentMutation,
    CreatePaymentIntentMutationVariables
  >(createPaymentIntent);

  useEffect(() => {
    doCreatePaymentInstant({variables: {amount: amount}});
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

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }
  return <View></View>;
};

export default PaymentScreen;
