import { Header } from '@app/web/ui-header';
import { SearchGoogle } from '@app/web/data-access-google';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import {Demo} from '@app/web/data-access-google';


function CustomApp() {
  return (
    <>
      <Header api="REST Endpoint - Google Search" nxname="app2" />
      <MantineProvider>
        <NotificationsProvider>
          <SearchGoogle />
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}

export default CustomApp;
