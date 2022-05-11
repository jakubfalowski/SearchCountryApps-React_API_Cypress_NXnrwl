import SelectIndex from './selectIndex';
import './styles.scss'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

export function GoogleApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <SelectIndex />
  </QueryClientProvider>
  );
}

export default GoogleApp;
