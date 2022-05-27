import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const key1 = 'AIzaSyC9ntEwOZg7dixTbfbVOTLr3YNx6fvOI4g';
  const key2 = 'AIzaSyB45fm5hOp9Fpm-1z9ACUfrLVLQKTuMWBY';
  const key3 = 'AIzaSyARjbtgeF4C3dPCXNyGmnVhgGqiUmCTqCI';
  const key4 = 'AIzaSyBCnKX-ObOWhYFN5XO7-EgaeuAOWMhtOsw';
  const key5 = 'AIzaSyBffbK0spqz_ksvT_p9L-NsAkWtUcYljrk';

  const fetchURL = `https://www.googleapis.com/customsearch/v1?key=${key1}&cx=017576662512468239146:omuauf_lfve&q=`;

  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(fetchURL + 'poland').then((res) => res.json())
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred: {error} </div>;

  return (
    <div>
      <h1>{data.searchInformation.searchTime}</h1>
      <h1>{data.searchInformation.totalResults}</h1>
    </div>
  );
}
