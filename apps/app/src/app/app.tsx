import { CountryApp } from '@app/web/data-access-countries';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";


export function App() {
  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/graphql',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path={'/'} element={<CountryApp />} />
          <Route path={'/:code/:page'} element={<CountryApp />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
