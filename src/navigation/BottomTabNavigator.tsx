import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../theme/colors';
import {BottomTabNavigatorParamList} from '../types/navigation';
import HomeStackNavigator from './HomeStackNavigator';

//Icons

import HomePageIcon from '../assets/icons/HomePageIcon';
import FavoritePageIcon from '../assets/icons/FavoritePageIcon';
import CheckoutPageIcon from '../assets/icons/CheckoutPageIcon';
import PortfolioPageIcon from '../assets/icons/PortfolioPageIcon';
import CheckoutScreen from '../screens/Checkout/CheckoutScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.tabBarBottomActiveColor,
        tabBarInactiveTintColor: colors.tabBarBottomInactiveColor,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <HomePageIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <FavoritePageIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <CheckoutPageIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <PortfolioPageIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
