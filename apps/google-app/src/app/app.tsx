import { Header } from '@app/web/ui-header';
import { SearchGoogle } from '@app/web/data-access-google';

function CustomApp() {
  return (
    <>
      <Header api="REST Endpoint - Google Search" nxname="app2" />
      <SearchGoogle />
    </>
  );
}

export default CustomApp;
