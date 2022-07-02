import {View, Text, FlatList, Pressable} from 'react-native';

import GoBackIcon from '../../assets/icons/GoBackIcon';
import CheckoutItem from '../../components/checkoutItem/CheckoutItem';

import checkout from '../../data/checkout.json';
import colors from '../../theme/colors';

import styles from './styles';

const CheckoutScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <View style={styles.goBack}>
          <GoBackIcon />
        </View>
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
          <Text style={styles.info}>$ 20.20</Text>
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
          <Text style={styles.total}>$ 20.20</Text>
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
