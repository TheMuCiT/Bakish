import {Alert} from 'react-native';
import {useMutation} from '@apollo/client';
import {
  BasketItem,
  DeleteBasketItemMutation,
  DeleteBasketItemMutationVariables,
  UpdateBasketItemMutation,
  UpdateBasketItemMutationVariables,
} from '../../API';
import {updateBasketItem, deleteBasketItem} from './queries';

const useCheckoutService = () => {
  const [doUpdateBasketItem] = useMutation<
    UpdateBasketItemMutation,
    UpdateBasketItemMutationVariables
  >(updateBasketItem);

  const [doDelete] = useMutation<
    DeleteBasketItemMutation,
    DeleteBasketItemMutationVariables
  >(deleteBasketItem);

  const onChangeQuantity = async (amount: 1 | -1, basketItem: BasketItem) => {
    if (amount === -1 && basketItem.quantity === 1) {
      Alert.alert(
        'Are you sure?',
        `want to remove ${basketItem.Product.title} from your basket?`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Yes, Remove',
            style: 'destructive',
            onPress: () => onDeleteBasketItem(basketItem),
          },
        ],
      );

      return;
    }

    //setNewBasketItemValue
    try {
      await doUpdateBasketItem({
        variables: {
          input: {
            id: basketItem.id,
            quantity: basketItem.quantity + amount,
            _version: basketItem._version,
            basketItemProductId: basketItem.basketItemProductId,
            basketItemProductSizeId: basketItem.basketItemProductSizeId,
          },
        },
      });
    } catch (e) {
      Alert.alert('Error updating basket item', (e as Error).message);
    }
  };

  const onDeleteBasketItem = async (basketItem: BasketItem) => {
    try {
      await doDelete({
        variables: {input: {id: basketItem.id, _version: basketItem._version}},
      });
    } catch (e) {
      Alert.alert('Error deleting basket item', (e as Error).message);
    }
  };

  return {
    onChangeQuantity,
  };
};

export default useCheckoutService;
