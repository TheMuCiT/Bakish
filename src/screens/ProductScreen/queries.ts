import {gql} from '@apollo/client';

export const getUser = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      Basket {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Likes {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userBasketId
    }
  }
`;

export const getProduct = gql`
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
  }
`;

export const createBasketItem = gql`
  mutation CreateBasketItem(
    $input: CreateBasketItemInput!
    $condition: ModelBasketItemConditionInput
  ) {
    createBasketItem(input: $input, condition: $condition) {
      id
      quantity
      Product {
        id
        title
        subTitle
        description
        size
        price
        image
        rating
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      basketID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      basketItemProductId
    }
  }
`;
