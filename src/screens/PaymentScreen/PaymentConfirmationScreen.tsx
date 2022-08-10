import {useMutation, useQuery} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {View, Text, Pressable, FlatList, ActivityIndicator} from 'react-native';
import {
  BasketItem,
  GetBasketQuery,
  GetBasketQueryVariables,
  GetUserQuery,
  GetUserQueryVariables,
  UpdateUserMutation,
  UpdateUserMutationVariables,
} from '../../API';
import AppHeader from '../../components/appHeader/AppHeader';
import CheckoutItem from '../../components/checkoutItem/CheckoutItem';
import PaymentHeader from '../../components/payment/PaymentHeader';
import {useAuthContext} from '../../contexts/AuthContext';
import colors from '../../theme/colors';
import {PaymentConfirmationNavigatorProp} from '../../types/navigation';
import {getBasket, getUser} from './queries';
import styles from './styles';

import usePaymentService from '../../services/PaymentService/PaymentService';

const PaymentConfirmationScreen = () => {
  const {userId} = useAuthContext();
  const {createNewOrder, onDeleteBasketIdFromUser} = usePaymentService();
  const navigation = useNavigation<PaymentConfirmationNavigatorProp>();

  const [totalPrice, setTotalPrice] = useState(0);

  const goBack = () => {
    navigation.goBack();
  };

  const {
    data: userDataExtract,
    loading: userLoading,
    error: userError,
  } = useQuery<GetUserQuery, GetUserQueryVariables>(getUser, {
    variables: {id: userId},
  });

  const userData = userDataExtract?.getUser;

  const {data, loading, error, refetch} = useQuery<
    GetBasketQuery,
    GetBasketQueryVariables
  >(getBasket, {variables: {id: userData?.userBasketId || ''}});

  const checkout = (data?.getBasket?.BasketItems?.items || []).filter(
    checkoutItem => !checkoutItem?._deleted,
  );

  const calcTotalPrice = () => {
    let sum = 0;
    if (checkout) {
      checkout.forEach(element => {
        if (element?.ProductSize.price && element.quantity) {
          sum += element.ProductSize.price * element.quantity;
        }
      });
    }
    setTotalPrice(sum);
  };

  const handlePayment = async () => {
    // navigation.navigate('PaymentStripeScreen', {
    //   amount: Math.floor(totalPrice * 100),
    // });
    await createNewOrder(Math.floor(totalPrice * 100));
    await onDeleteBasketIdFromUser();

    navigation.navigate('CheckoutScreen');
  };

  useEffect(() => {
    if (!checkout) {
      console.log('First');
      return;
    }
    calcTotalPrice();
  }, [checkout]);

  if (loading || userLoading) {
    console.log('second');
    return <ActivityIndicator />;
  }

  if (error || userError) {
    console.log('third');
    return <Text>{error?.message || userError?.message}</Text>;
  }

  return (
    <View style={styles.page}>
      <AppHeader goBack={goBack} title={'Proceed'} />

      <FlatList
        data={checkout}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) =>
          item && <CheckoutItem item={item as BasketItem} />
        }
        ListHeaderComponentStyle={{marginBottom: 10}}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 0.5,
              backgroundColor: colors.grey,
              marginHorizontal: 25,
            }}></View>
        )}
        onRefresh={refetch}
        refreshing={loading}
        ListHeaderComponent={() => <PaymentHeader step={[true, true, false]} />}
      />

      {/* Proccess Button */}
      <View style={styles.buttonWrapper}>
        <View style={styles.buttonItem}>
          <Text style={styles.infoBarTitle}>Delivery To</Text>
          <Text style={styles.buttonItemText}>Pick up</Text>
        </View>
        <View style={styles.buttonItem}>
          <Text style={styles.infoBarTitle}>Items</Text>
          <Text style={styles.buttonItemText}>$ {totalPrice}</Text>
        </View>
        <View style={styles.buttonItem}>
          <Text style={styles.infoBarTitle}>Discounts</Text>
          <Text style={styles.buttonItemText}>$ -0.00</Text>
        </View>
        <View style={[styles.buttonItem, styles.buttonItemTotal]}>
          <Text style={styles.infoBarTitleTotal}>Total</Text>
          <Text style={styles.buttonItemTextTotal}>$ {totalPrice}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable onPress={() => handlePayment()} style={styles.button}>
            <Text style={styles.buttonText}>Continue To Pay</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default PaymentConfirmationScreen;
