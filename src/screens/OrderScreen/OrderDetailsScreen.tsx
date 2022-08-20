import {useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView, View} from 'react-native';
import AppHeader from '../../components/appHeader/AppHeader';
import OrderListItem from '../../components/order/OrderListItem';
import {
  OrderDetailsRouteProp,
  OrderNavigatorProp,
} from '../../types/navigation';
import styles from './style';

const OrderDetailsScreen = () => {
  const route = useRoute<OrderDetailsRouteProp>();
  const {orderId} = route.params;
  const navigation = useNavigation<OrderNavigatorProp>();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.page}>
      <AppHeader goBack={goBack} title={'Order'} />
      <OrderListItem orderId={orderId} />
    </View>
  );
};

export default OrderDetailsScreen;
