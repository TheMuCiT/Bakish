import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootNavigatorParamList = {
  Auth: undefined;
  Home: undefined;
};

export type HomeStackNavigatorParamList = {
  HomeScreen: undefined;
  ProductScreen: {productId: string};
};

export type PaymentStackNavigatorParamList = {
  CheckoutScreen: undefined;
  PaymentScreen: undefined;
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
  PaymentStackNavigatorParamList,
  'PaymentScreen'
>;

//Prop

export type ProductRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'ProductScreen'
>;

//Auth

export type AuthStackNavigatorParamList = {
  'Sign in': undefined;
  'Sign up': undefined;
  'Confirm email': {username?: string};
  'Forgot password': undefined;
  'New password': undefined;
};

export type SignInNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Sign in'
>;

export type SignUpNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Sign up'
>;

export type ConfirmEmailNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Confirm email'
>;
export type ConfirmUsernameRouteProp = RouteProp<
  AuthStackNavigatorParamList,
  'Confirm email'
>;

export type ForgotPasswordNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Forgot password'
>;

export type NewPasswordNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'New password'
>;
