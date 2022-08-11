import {View, Text, FlatList, Pressable, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';

import GoBackIcon from '../../assets/icons/GoBackIcon';
import CheckoutItem from '../../components/checkoutItem/CheckoutItem';

import colors from '../../theme/colors';

import {CheckoutNavigatorProp} from '../../types/navigation';

import styles from './styles';
import {useQuery} from '@apollo/client';
import {getBasket, getUser} from './queries';
import {
  BasketItem,
  GetBasketQuery,
  GetBasketQueryVariables,
  GetUserQuery,
  GetUserQueryVariables,
} from '../../API';
import {useAuthContext} from '../../contexts/AuthContext';
import AppHeader from '../../components/appHeader/AppHeader';

const CheckoutScreen = () => {
  const {userId} = useAuthContext();
  const navigation = useNavigation<CheckoutNavigatorProp>();

  const [totalPrice, setTotalPrice] = useState(0);

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
  >(getBasket, {
    skip: userData?.userBasketId ? false : undefined,
    variables: {id: userData?.userBasketId || ''},
  });

  const checkout = (data?.getBasket?.BasketItems?.items || []).filter(
    checkoutItem => !checkoutItem?._deleted,
  );

  const goBack = () => {
    navigation.goBack();
  };

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

  useEffect(() => {
    if (!checkout) {
      return;
    }
    calcTotalPrice();
  }, [checkout]);

  if (!userData?.userBasketId) {
    return <Text>NO DATA</Text>;
  }

  const GoToPayment = () => {
    navigation.navigate('PaymentScreen');
  };

  if (!checkout) {
    return <Text>No data</Text>;
  }

  if (loading || userLoading) {
    return <ActivityIndicator />;
  }

  if (error || userError) {
    return <Text>{error?.message || userError?.message}</Text>;
  }

  return (
    <View style={styles.page}>
      <AppHeader goBack={goBack} title={'Checkout'} />

      <FlatList
        data={checkout}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) =>
          item && <CheckoutItem item={item as BasketItem} changeQTY />
        }
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
          <Pressable onPress={GoToPayment} style={styles.button}>
            <Text style={styles.buttonText}>Checkout</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CheckoutScreen;
