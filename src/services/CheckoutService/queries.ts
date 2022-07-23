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
      quantity
      Product {
        id
        title
        subTitle
        description
        Likes {
          items {
            id
            userID
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        image
        rating
        ProductSizes {
          items {
            id
            size
            price
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      basketID
      size
      ProductSize {
        id
        size
        price
        productID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
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
