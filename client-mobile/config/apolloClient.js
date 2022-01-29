import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://johannes-server-orchestrator.herokuapp.com",
  cache: new InMemoryCache(),
});

export default client;
