import { Header } from '@app/web/ui-header';
import { GoogleApp } from '@app/web/data-access-google';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'



function CustomApp() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <NotificationsProvider>
          <GoogleApp />
        </NotificationsProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default CustomApp;
