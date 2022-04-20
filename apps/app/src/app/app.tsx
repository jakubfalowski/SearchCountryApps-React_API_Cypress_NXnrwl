import { CountryApp } from '@app/web/data-access-countries';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<CountryApp />} />
        <Route path={'/:continentCode/:page'} element={<CountryApp />} />
      </Routes>
    </Router>
  );
}

export default App;
