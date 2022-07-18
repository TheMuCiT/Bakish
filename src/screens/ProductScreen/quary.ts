import {gql} from '@apollo/client';

export const getProduct = gql`
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      title
      subTitle
      description
      size
      price
      Likes {
        nextToken
        startedAt
      }
      image
      rating
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
