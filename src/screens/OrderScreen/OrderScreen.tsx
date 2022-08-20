import {useQuery} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {GetUserQuery, GetUserQueryVariables, Order} from '../../API';
import AppHeader from '../../components/appHeader/AppHeader';
import OrderListItem from '../../components/order/OrderListItem';
import {useAuthContext} from '../../contexts/AuthContext';
import colors from '../../theme/colors';
import {OrderNavigatorProp} from '../../types/navigation';
import {getUser} from './queries';
import styles from './style';

const OrderScreen = () => {
  const {userId} = useAuthContext();
  const navigation = useNavigation<OrderNavigatorProp>();

  const {data, loading, error, refetch} = useQuery<
    GetUserQuery,
    GetUserQueryVariables
  >(getUser, {variables: {id: userId}});

  const orders = data?.getUser?.Orders?.items;

  const goBack = () => {
    navigation.goBack();
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View style={styles.page}>
      <AppHeader goBack={goBack} title={'Order'} />
      <FlatList
        data={orders}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) =>
          item && <OrderListItem orderId={item.id} slice />
        }
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              backgroundColor: colors.grey,
              marginHorizontal: 25,
            }}></View>
        )}
        onRefresh={refetch}
        refreshing={loading}
      />
    </View>
  );
};

export default OrderScreen;
