import SelectIndex from './selectIndex';
import './styles.scss'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

export function GoogleApp() {  
  return (
    <SelectIndex />
  );
}

export default GoogleApp;
