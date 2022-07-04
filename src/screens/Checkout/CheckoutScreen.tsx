import {View, Text, FlatList, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';

import GoBackIcon from '../../assets/icons/GoBackIcon';
import CheckoutItem from '../../components/checkoutItem/CheckoutItem';

import checkout from '../../data/checkout.json';
import colors from '../../theme/colors';

import {CheckoutNavigatorProp} from '../../types/navigation';

import styles from './styles';

const CheckoutScreen = () => {
  const navigation = useNavigation<CheckoutNavigatorProp>();

  const [totalPrice, setTotalPrice] = useState(0);

  const goBack = () => {
    navigation.navigate('HomeScreen');
  };

  const calcTotalPrice = () => {
    let sum = 0;
    checkout.forEach(element => {
      sum += element.price * element.qty;
    });
    setTotalPrice(sum);
  };

  useEffect(() => {
    if (!checkout) {
      return;
    }
    calcTotalPrice();
  }, [checkout]);

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Pressable onPress={goBack} style={styles.goBack}>
          <GoBackIcon />
        </Pressable>
        <Text style={styles.product}>Product</Text>
        <View style={styles.favorite}></View>
      </View>

      <FlatList
        data={checkout}
        renderItem={({item}) => <CheckoutItem item={item} />}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 0.5,
              backgroundColor: colors.grey,
              marginHorizontal: 25,
            }}></View>
        )}
      />
      <View style={styles.bottom}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>items</Text>
          <Text style={styles.info}>$ {totalPrice.toFixed(2)}</Text>
        </View>
        <View
          style={{
            height: 0.6,
            backgroundColor: colors.grey,
            width: '100%',
            marginVertical: 10,
          }}></View>
        <View style={styles.totalContainer}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.total}>$ {totalPrice.toFixed(2)}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Checkout</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CheckoutScreen;
