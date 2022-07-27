import {useStripe} from '@stripe/stripe-react-native';
import {useMutation} from '@apollo/client';
import {useEffect, useState} from 'react';
import {
  CreatePaymentIntentMutation,
  CreatePaymentIntentMutationVariables,
} from '../../API';
import {createPaymentIntent} from './queries';
import {Alert} from 'react-native';
import {useAuthContext} from '../../contexts/AuthContext';

const usePaymentService = () => {
  const {userId} = useAuthContext();

  const {initPaymentSheet, presentPaymentSheet} = useStripe();

  const [doCreatePaymentInstant, {data}] = useMutation<
    CreatePaymentIntentMutation,
    CreatePaymentIntentMutationVariables
  >(createPaymentIntent);

  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const initPayment = (amount: number) => {
    useEffect(() => {
      console.log('InitPayment');
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
  };
  return {initPayment};
};

export default usePaymentService;
