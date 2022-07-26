import {useStripe} from '@stripe/stripe-react-native';
import {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useAuthContext} from '../../contexts/AuthContext';

const PaymentScreen = () => {
  const {userId} = useAuthContext();

  const {initPaymentSheet, presentPaymentSheet, confirmPaymentSheetPayment} =
    useStripe();

  const initializePaymentSheet = async () => {
    const {error, paymentOption} = await initPaymentSheet({
      customerId: userId,
      customerEphemeralKeySecret: {customer},
      paymentIntentClientSecret: paymentIntent,
      customFlow: true,
      merchantDisplayName: 'Bakish',
    });
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <View>
      <Text>PaymentScreen</Text>
    </View>
  );
};

export default PaymentScreen;
