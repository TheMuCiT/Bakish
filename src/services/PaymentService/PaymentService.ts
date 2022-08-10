import {UpdateUserMutation, UpdateUserMutationVariables} from './../../API';
import {Alert} from 'react-native';
import {
  createOrder,
  createOrderItem,
  deleteBasket,
  getBasket,
  getUser,
  updateUser,
} from './queries';
import {useMutation, useQuery} from '@apollo/client';
import {useAuthContext} from '../../contexts/AuthContext';
import {
  CreateOrderInput,
  CreateOrderItemInput,
  CreateOrderItemMutation,
  CreateOrderItemMutationVariables,
  CreateOrderMutation,
  CreateOrderMutationVariables,
  DeleteBasketMutation,
  DeleteBasketMutationVariables,
  GetBasketQuery,
  GetBasketQueryVariables,
  GetUserQuery,
  GetUserQueryVariables,
  OrderStatus,
} from '../../API';

const usePaymentService = () => {
  const {userId} = useAuthContext();

  const {data: userDataExtract} = useQuery<GetUserQuery, GetUserQueryVariables>(
    getUser,
    {
      variables: {id: userId},
    },
  );

  const [doCreateOrder] = useMutation<
    CreateOrderMutation,
    CreateOrderMutationVariables
  >(createOrder);

  const [doCreateOrderItem] = useMutation<
    CreateOrderItemMutation,
    CreateOrderItemMutationVariables
  >(createOrderItem);

  const [doDeleteBasket] = useMutation<
    DeleteBasketMutation,
    DeleteBasketMutationVariables
  >(deleteBasket);

  const [doUpdateUser] = useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(updateUser);

  const {data: basketData} = useQuery<GetBasketQuery, GetBasketQueryVariables>(
    getBasket,
    {variables: {id: userDataExtract?.getUser?.userBasketId || ''}},
  );

  const createNewOrder = async (amount: number) => {
    const input: CreateOrderInput = {
      userID: userId,
      total: amount / 100,
      status: OrderStatus.NEW,
    };

    try {
      const createOrderData = await doCreateOrder({variables: {input}});
      const basketId = createOrderData.data?.createOrder?.id;

      try {
        if (basketId) {
          await onAddOrderItem(basketId);
          await onDeleteBasket();
        }
      } catch (e) {
        Alert.alert('Error calling add items to order', (e as Error).message);
      }
    } catch (e) {
      Alert.alert('Error Creating Order', (e as Error).message);
    }
  };

  const onAddOrderItem = async (orderId: string) => {
    const data = basketData?.getBasket?.BasketItems?.items;
    if (data) {
      await Promise.all(
        data.map(async item => {
          if (!item?._deleted && item) {
            const input: CreateOrderItemInput = {
              orderID: orderId,
              quantity: item.quantity || 0,
              orderItemProductId: item.Product.id,
              orderItemProductSizeId: item.ProductSize.id,
            };
            try {
              await doCreateOrderItem({variables: {input}});
            } catch (e) {
              Alert.alert('Error creating order item', (e as Error).message);
            }
          }
        }),
      );
    }
  };

  const onDeleteBasket = async () => {
    console.log('DELETE BASKET ');
    const data = basketData?.getBasket;
    if (data) {
      try {
        await doDeleteBasket({
          variables: {input: {id: data.id, _version: data._version}},
        });
      } catch (e) {
        Alert.alert('Error Deleting Basket', (e as Error).message);
      }
    }
  };

  const onDeleteBasketIdFromUser = async () => {
    console.log('DELETE BASKET ID FROM USER');
    try {
      await doUpdateUser({
        variables: {
          input: {
            id: userId,
            userBasketId: null,
            _version: userDataExtract?.getUser?._version,
          },
        },
      });
    } catch (e) {
      Alert.alert('Error deleting user basket info', (e as Error).message);
    }
  };

  return {createNewOrder, onDeleteBasketIdFromUser, onDeleteBasket};
};

export default usePaymentService;
