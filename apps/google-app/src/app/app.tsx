import { Header } from '@app/web/ui-header';
import { SearchGoogle } from '@app/web/data-access-google';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import {Example} from '@app/web/data-access-google';



function CustomApp() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <NotificationsProvider>
          <SearchGoogle />
        </NotificationsProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default CustomApp;
