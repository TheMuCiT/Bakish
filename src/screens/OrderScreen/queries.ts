import {gql} from '@apollo/client';

export const getUser = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      Orders {
        items {
          id
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
      userBasketId
    }
  }
`;
