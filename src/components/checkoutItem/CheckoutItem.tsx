import {View, Text, Image, Pressable} from 'react-native';

import Plus from '../../assets/icons/Plus';
import Minus from '../../assets/icons/Minus';

import styles from './styles';
import colors from '../../theme/colors';
import {BasketItem} from '../../API';

import useCheckoutService from '../../services/CheckoutService';

interface IItem {
  item: BasketItem;
}

const CheckoutItem = ({item}: IItem) => {
  const {onChangeQuantity} = useCheckoutService();
  const handleQty = (amount: 1 | -1) => {
    onChangeQuantity(amount, item);
  };

  return (
    <View style={styles.root}>
      <View style={styles.left}>
        <Image source={{uri: item.Product?.image}} style={styles.image} />
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>{item.Product?.title}</Text>
        <View style={styles.subTitle}>
          <Text style={styles.subTitleText}>
            {item.Product?.subTitle} • {item.ProductSize.size}
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.price}>$ {item.ProductSize.price}</Text>
          <View style={styles.noFItemContainer}>
            <Pressable
              onPress={() => handleQty(-1)}
              style={styles.noFItemButton}>
              <Minus />
            </Pressable>
            <Text style={styles.noFItem}>{item.quantity}</Text>
            <Pressable
              onPress={() => handleQty(1)}
              style={styles.noFItemButton}>
              <Plus color={colors.textDark} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};
export default CheckoutItem;
