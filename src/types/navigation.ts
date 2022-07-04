import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootNavigatorParamList = {
  Home: undefined;
};

export type HomeStackNavigatorParamList = {
  HomeScreen: undefined;
  ProductScreen: {productId: string};
};

export type BottomTabNavigatorParamList = {
  HomeStack: undefined;
  Favorite: undefined;
  Checkout: undefined;
  Portfolio: undefined;
};

//Navigation

export type HomePageNavigatorProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'ProductScreen'
>;

export type ProductNavigatorProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'HomeScreen'
>;

export type CheckoutNavigatorProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'HomeScreen'
>;
