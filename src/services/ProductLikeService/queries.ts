import {gql} from '@apollo/client';

export const likesByUserForProduct = gql`
  query LikesByUserForProduct(
    $userID: ID!
    $productID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLikesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesByUserForProduct(
      userID: $userID
      productID: $productID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const createLikes = gql`
  mutation CreateLikes(
    $input: CreateLikesInput!
    $condition: ModelLikesConditionInput
  ) {
    createLikes(input: $input, condition: $condition) {
      id
      userID
      productID
      User {
        id
        username
        email
        Basket {
          id
          name
          BasketItems {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

export const deleteLikes = gql`
  mutation DeleteLikes(
    $input: DeleteLikesInput!
    $condition: ModelLikesConditionInput
  ) {
    deleteLikes(input: $input, condition: $condition) {
      id
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
