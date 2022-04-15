import { CountryApp } from '@app/web/data-access-countries';
import { Header } from '@app/web/ui-header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <Routes>
        <Route
          path={'/'}
          element={
            <>
              <Header api="GraphQL - Country" nxname="app" />
              <CountryApp />
            </>
          }
        />
        <Route
          path={'/:codeContinent'}
          element={
            <>
              <CountryApp />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
