import {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';

import Plus from '../../assets/icons/Plus';
import Minus from '../../assets/icons/Minus';

import styles from './styles';
import colors from '../../theme/colors';

interface IItem {
  item: {
    id: number;
    title: string;
    subTitle: string;
    price: number;
    size: string;
    qty: number;
    image: string;
  };
}

const CheckoutItem = ({item}: IItem) => {
  const [qty, setQty] = useState(item.qty);
  const handleQty = (amount: 1 | -1) => {
    if (amount === -1 && qty === 1) {
      return;
    }
    setQty(qty + amount);
  };

  return (
    <View style={styles.root}>
      <View style={styles.left}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.subTitle}>
          <Text style={styles.subTitleText}>
            {item.subTitle} • {item.size}
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.price}>$ {item.price}</Text>
          <View style={styles.noFItemContainer}>
            <Pressable
              onPress={() => handleQty(-1)}
              style={styles.noFItemButton}>
              <Minus />
            </Pressable>
            <Text style={styles.noFItem}>{qty}</Text>
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
