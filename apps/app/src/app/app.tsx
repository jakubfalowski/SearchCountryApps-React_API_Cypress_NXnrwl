import { SelectCountries } from '@app/web/data-access-countries';
import { Header } from '@app/web/ui-header';
import fetch from "node-fetch";

export function App() {
  return (
    <div>
      <Header api="GraphQL - Country" nxname="app" />
      <SelectCountries />
    </div>
  );
}

export default App;
