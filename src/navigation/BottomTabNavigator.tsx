import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../theme/colors';
import {BottomTabNavigatorParamList} from '../types/navigation';
import HomeStackNavigator from './HomeStackNavigator';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.textDark,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Favorite"
        component={HomeStackNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Order"
        component={HomeStackNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Portfolio"
        component={HomeStackNavigator}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
