import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CheckoutScreen from '../screens/Checkout/CheckoutScreen';
import EmptyBasketScreen from '../screens/EmptyBasketScreen';
import PaymentScreen from '../screens/PaymentScreen';
import PaymentConfirmationScreen from '../screens/PaymentScreen/PaymentConfirmationScreen';
import PaymentStripeScreen from '../screens/PaymentScreen/PaymentStripeScreen';
import {PaymentStackNavigatorParamList} from '../types/navigation';

const Stack = createNativeStackNavigator<PaymentStackNavigatorParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentConfirmationScreen"
        component={PaymentConfirmationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentStripeScreen"
        component={PaymentStripeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EmptyBasketScreen"
        component={EmptyBasketScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
