import { ApolloClient, InMemoryCache } from '@apollo/client';

export const gqlClient = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});
