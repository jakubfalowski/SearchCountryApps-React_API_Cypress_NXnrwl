import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CountryAPI() {
  const [countries, setCountries] = useState([] as any[]);
  const { codeContinent } = useParams();
  const COUNTRIES_QUERY = `{
    continent(code:"${codeContinent}"){
      code
      name
      countries{
        name
        capital
      }
    }
  }`;
  const fetchURL = 'https://countries.trevorblades.com/graphql';

  if (codeContinent !== '') {
    React.useEffect(() => {
      fetch(fetchURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: COUNTRIES_QUERY }),
      })
        .then((response) => response.json())
        .then((data) => setCountries(data.data.continent.countries));
    }, []);
  }

  return (
    <div>
      {countries.map((country, i) => (
        <ul key={i}>
          <li>Państwo: {country.name}</li>
          <li>Stolica: {country.capital === null ? '-' : country.capital}</li>
        </ul>
      ))}
    </div>
  );
}
