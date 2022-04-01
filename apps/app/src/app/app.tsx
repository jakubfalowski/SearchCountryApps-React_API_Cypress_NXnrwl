import NxWelcome from './nx-welcome';
import CountryAPI from './CountryAPI';
import ContinentButton from './ContinentButton';

export function App() {
  return (
    <div>
      <NxWelcome title="app" /><ContinentButton continent="Europe" continentCode="EU"/><ContinentButton continent="Africa" continentCode="AF"/><CountryAPI />
      </div>
  );
}

export default App;
