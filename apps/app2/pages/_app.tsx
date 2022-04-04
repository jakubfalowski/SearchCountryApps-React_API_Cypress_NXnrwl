import { Header } from '@app/header';
import SearchGoogle from 'libs/search-google/src/lib/search-google';
import './style.css'

function CustomApp() {
  return (<div>
    <Header api='REST Endpoint - Google Search' nxname='app2'/>
    <SearchGoogle />
    </div>
  );
}

export default CustomApp;
