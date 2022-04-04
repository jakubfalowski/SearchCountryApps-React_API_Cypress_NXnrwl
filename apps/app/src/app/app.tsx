import { Header } from '@app/header';
import { SelectCountries } from '@app/select-countries';

export function App() {
  return (
    <div>
      <Header api='GraphQL - Country' nxname='app' />
      <SelectCountries />
      </div>
  );
}

export default App;
