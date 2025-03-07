import { ApolloClient, InMemoryCache } from '@apollo/client';

const API_URL = process.env.NEXT_PUBLIC_API_GRAPHQL_URL || 'http://localhost:3000/api/v1/graphql';

export const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});
