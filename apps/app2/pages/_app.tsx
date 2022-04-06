import { Header } from '@app/web/ui-header';
import { SearchGoogle } from '@app/web/data-access-google';
import './style.css';

function CustomApp() {
  return (
    <div>
      <Header api="REST Endpoint - Google Search" nxname="app2" />
      <SearchGoogle />
    </div>
  );
}

export default CustomApp;
