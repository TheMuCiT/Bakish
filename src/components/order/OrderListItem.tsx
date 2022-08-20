import {useQuery} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';
import dayjs from 'dayjs';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import {
  GetOrderQuery,
  GetOrderQueryVariables,
  Order,
  OrderItem,
} from '../../API';
import colors from '../../theme/colors';
import {OrderNavigatorProp} from '../../types/navigation';
import OrderListOrderItem from './OrderListOrderItem';
import {getOrder} from './queries';
import styles from './style';

interface IOrderListItem {
  orderId: string;
  slice?: boolean;
}

const OrderListItem = ({orderId, slice = false}: IOrderListItem) => {
  const navigation = useNavigation<OrderNavigatorProp>();
  const {data, loading, error} = useQuery<
    GetOrderQuery,
    GetOrderQueryVariables
  >(getOrder, {variables: {id: orderId}});

  const order = data?.getOrder;
  const orderItemOne = order?.OrderItems?.items;

  const goToOrderDetails = () => {
    console.log('first');
    navigation.navigate('OrderDetailsScreen', {orderId: orderId});
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <Pressable
      onPress={goToOrderDetails}
      style={slice ? styles.root : styles.rootMain}
      disabled={!slice}>
      <FlatList
        data={slice ? orderItemOne?.slice(0, 2) : orderItemOne}
        renderItem={({item}) =>
          item && <OrderListOrderItem orderItem={item as OrderItem} />
        }
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 0.5,
              backgroundColor: colors.grey,
            }}></View>
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View style={styles.orderInfo}>
            <View>
              <Text style={styles.orderText}>Order#: 156254---</Text>
              <Text style={styles.orderText}>Status: {order?.status}</Text>
              <View style={styles.dateContainer}>
                <Text style={styles.time}>
                  {dayjs(order?.createdAt).format('hh:mm A')}
                </Text>
                <View style={styles.line} />
                <Text style={styles.time}>
                  {dayjs(order?.createdAt).format('D MMM YYYY')}
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.total}>${order?.total}</Text>
            </View>
          </View>
        )}
      />
    </Pressable>
  );
};

export default OrderListItem;
