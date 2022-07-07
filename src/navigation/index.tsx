import {View, Text, ActivityIndicator} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import {RootNavigatorParamList} from '../types/navigation';
import AuthStackNavigator from './AuthStackNavigator';
import {useAuthContext} from '../contexts/AuthContext';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const Navigation = () => {
  const {user} = useAuthContext();

  if (user === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  let stackScreens = null;

  if (!user) {
    stackScreens = (
      <Stack.Screen
        name="Auth"
        component={AuthStackNavigator}
        options={{headerShown: false}}
      />
    );
  } else {
    stackScreens = (
      <>
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
      </>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>{stackScreens}</Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
