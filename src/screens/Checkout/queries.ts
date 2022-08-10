import {gql} from '@apollo/client';

export const listBasketItems = gql`
  query ListBasketItems(
    $filter: ModelBasketItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBasketItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quantity
        Product {
          id
          title
          subTitle
          description
          Likes {
            nextToken
            startedAt
          }
          image
          rating
          ProductSizes {
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
      nextToken
      startedAt
    }
  }
`;

export const getUser = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userBasketId
    }
  }
`;

export const getBasket = gql`
  query GetBasket($id: ID!) {
    getBasket(id: $id) {
      id
      name
      BasketItems {
        items {
          id
          quantity
          Product {
            id
            title
            subTitle
            description
            image
            rating
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          basketID
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
