// import { Header } from '@app/header';
import { SearchGoogle } from '@app/search-google';
import { SelectCountries } from '@app/select-countries';
import { Header } from '@app/web/ui-header';

export function App() {
  return (
    <div>
      <Header api='GraphQL - Country' nxname='app' />
      <SelectCountries /><SearchGoogle />
      </div>
  );
}

export default App;
