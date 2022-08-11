import {useMutation} from '@apollo/client';
import {Alert} from 'react-native';
import {
  CreateBasketInput,
  CreateBasketItemInput,
  CreateBasketItemMutation,
  CreateBasketItemMutationVariables,
  CreateBasketMutation,
  CreateBasketMutationVariables,
  UpdateBasketMutation,
  UpdateBasketMutationVariables,
  UpdateUserMutation,
  UpdateUserMutationVariables,
  User,
} from '../../API';
import {useAuthContext} from '../../contexts/AuthContext';
import {
  createBasket,
  createBasketItem,
  updateBasket,
  updateUser,
} from './queries';

const useCreateBasketService = () => {
  const {userId} = useAuthContext();

  const [doCreateBasket] = useMutation<
    CreateBasketMutation,
    CreateBasketMutationVariables
  >(createBasket);

  const [doUpdateUser] = useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(updateUser);

  const [doCreateBasketItem] = useMutation<
    CreateBasketItemMutation,
    CreateBasketItemMutationVariables
  >(createBasketItem);

  const [doUpdateBasket] = useMutation<
    UpdateBasketMutation,
    UpdateBasketMutationVariables
  >(updateBasket);

  const onCreateBasket = async (
    productId: string,
    quantity: number,
    productSize: string,
    userData: User,
  ) => {
    const input: CreateBasketInput = {};
    try {
      const createdBasket = await doCreateBasket({variables: {input}});
      const basketID = createdBasket.data?.createBasket?.id;
      if (basketID) {
        await doUpdateUser({
          variables: {
            input: {
              id: userId,
              _version: userData._version,
              userBasketId: basketID,
            },
          },
        });
        await onAddBasketItem(productId, quantity, basketID, productSize);
      }
    } catch (e) {
      Alert.alert('Error creating basket', (e as Error).message);
    }
  };

  const onAddBasketItem = async (
    productId: string,
    quantity: number,
    basketId: string,
    productSize: string,
  ) => {
    const input: CreateBasketItemInput = {
      quantity: quantity,
      basketID: basketId,
      basketItemProductId: productId,
      basketItemProductSizeId: productSize,
    };

    try {
      await doCreateBasketItem({variables: {input}});
      await doUpdateBasket({variables: {input: {id: basketId}}});
    } catch (e) {
      Alert.alert('Error create basket item', (e as Error).message);
    }
  };

  return {
    onCreateBasket,
    onAddBasketItem,
  };
};

export default useCreateBasketService;
