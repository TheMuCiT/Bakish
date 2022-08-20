import {View, Text, Image} from 'react-native';
import {OrderItem} from '../../API';
import styles from './style';

interface IOrderListOrderItem {
  orderItem: OrderItem;
}

const OrderListOrderItem = ({orderItem}: IOrderListOrderItem) => {
  return (
    <View style={styles.orderItem}>
      <View style={styles.orderItemLeft}>
        <Image source={{uri: orderItem?.Product.image}} style={styles.image} />
        <View style={styles.orderItemText}>
          <Text style={styles.orderItemName}>{orderItem?.Product.title}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.orderItemName2}>x{orderItem?.quantity}</Text>
            <Text style={styles.orderItemName2}>
              Size: {orderItem?.ProductSize.size}
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.price}>
        ${(orderItem?.ProductSize.price || 0) * (orderItem?.quantity || 0)}
      </Text>
    </View>
  );
};

export default OrderListOrderItem;
