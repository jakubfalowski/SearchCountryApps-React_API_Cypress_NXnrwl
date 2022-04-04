import './styles.css';
import Search from './search.js'
import { Header } from '@app/header';

function CustomApp() {
  return (<div>
    <Header api='REST Endpoint - Google Search' nxname='app2'/><Search /></div>
  );
}

export default CustomApp;
