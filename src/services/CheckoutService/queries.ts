import {gql} from '@apollo/client';

export const updateBasketItem = gql`
  mutation UpdateBasketItem(
    $input: UpdateBasketItemInput!
    $condition: ModelBasketItemConditionInput
  ) {
    updateBasketItem(input: $input, condition: $condition) {
      id

      quantity

      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      basketItemProductId
      basketItemProductSizeId
    }
  }
`;

export const deleteBasketItem = gql`
  mutation DeleteBasketItem(
    $input: DeleteBasketItemInput!
    $condition: ModelBasketItemConditionInput
  ) {
    deleteBasketItem(input: $input, condition: $condition) {
      id
      updatedAt
      _version
      _deleted
      _lastChangedAt
      basketItemProductId
      basketItemProductSizeId
    }
  }
`;
