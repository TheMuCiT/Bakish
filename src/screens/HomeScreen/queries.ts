import {gql} from '@apollo/client';

export const listProducts = gql`
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;

export const getUser = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
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

export const listAds = gql`
  query ListAds($filter: ModelAdsFilterInput, $limit: Int, $nextToken: String) {
    listAds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        text
        date
        image
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
