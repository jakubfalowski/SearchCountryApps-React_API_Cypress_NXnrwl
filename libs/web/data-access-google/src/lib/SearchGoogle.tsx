import GoogleAPI from './googleAPI';
import Test from './Test'
import Demo from './Demo'
import './styles.scss'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

export function SearchGoogle() {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleAPI />
  </QueryClientProvider>
  );
}

export default SearchGoogle;
