import {Text, View} from 'react-native';
import CheckoutScreen from './src/screens/Checkout/CheckoutScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <HomeScreen /> */}
      {/* <ProductScreen /> */}
      <CheckoutScreen />
    </View>
  );
};

export default App;
