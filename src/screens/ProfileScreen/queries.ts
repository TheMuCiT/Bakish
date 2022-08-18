import {gql} from '@apollo/client';

export const getUser = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      Basket {
        id
        name
        BasketItems {
          items {
            id
            quantity
            basketID
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
      Likes {
        items {
          id
          userID
          productID
          User {
            id
            username
            email
            image
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userBasketId
          }
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Orders {
        items {
          id
          userID
          total
          status
          OrderItems {
            nextToken
            startedAt
          }
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userBasketId
    }
  }
`;
