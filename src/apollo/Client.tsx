import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  createHttpLink,
  TypePolicies,
} from '@apollo/client';

import {AuthOptions, AUTH_TYPE, createAuthLink} from 'aws-appsync-auth-link';
import {createSubscriptionHandshakeLink} from 'aws-appsync-subscription-link';
import {useMemo} from 'react';
import config from '../aws-exports';
import {useAuthContext} from '../contexts/AuthContext';

interface IClient {
  children: React.ReactNode;
}

const url = config.aws_appsync_graphqlEndpoint;
const region = config.aws_appsync_region;

const httpLink = createHttpLink({uri: url});

const margeLists = (existing = {items: []}, incoming = {items: []}) => {
  return {
    ...existing,
    ...incoming,
    items: [...(existing.items || []), ...incoming.items],
  };
};

const typePolicies: TypePolicies = {
  Query: {
    fields: {
      commentsByPost: {
        keyArgs: ['postID', 'createdAt', 'sortDirection', 'filter'],
        merge: margeLists,
      },
      postsByDate: {
        keyArgs: ['type', 'createdAt', 'sortDirection', 'filter'],
        merge: margeLists,
      },
    },
  },
};

const Client = ({children}: IClient) => {
  const {user} = useAuthContext();

  const client = useMemo(() => {
    // const jwtToken =
    //   user?.getSignInUserSession()?.getAccessToken().getJwtToken() || '';

    const auth: AuthOptions = {
      type: config.aws_appsync_authenticationType as AUTH_TYPE.API_KEY,
      apiKey: config.aws_appsync_apiKey,
    };

    const link = ApolloLink.from([
      createAuthLink({url, region, auth}),
      createSubscriptionHandshakeLink({url, region, auth}, httpLink),
    ]);

    return new ApolloClient({
      link,
      cache: new InMemoryCache({typePolicies}),
    });
  }, [user]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Client;
