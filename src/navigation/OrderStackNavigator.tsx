import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrderDetailsScreen from '../screens/OrderScreen/OrderDetailsScreen';
import OrderScreen from '../screens/OrderScreen/OrderScreen';
import {OrdersStackNavigatorParamList} from '../types/navigation';

const Stack = createNativeStackNavigator<OrdersStackNavigatorParamList>();

const OrderStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderDetailsScreen"
        component={OrderDetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default OrderStackNavigator;
