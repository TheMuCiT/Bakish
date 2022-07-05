import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import {RootNavigatorParamList} from '../types/navigation';
import AuthStackNavigator from './AuthStackNavigator';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthStackNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
