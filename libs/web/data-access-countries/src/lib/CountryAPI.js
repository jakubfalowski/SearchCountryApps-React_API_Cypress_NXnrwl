import React, { useState } from 'react';

var pathname = window.location.pathname;
pathname = pathname.replace('/', '');
const codeContinent = pathname;

const COUNTRIES_QUERY =
  `
{
  continent(code:"` +
  codeContinent +
  `"){
    code
    name
    countries{
      name
      capital
    }
  }
}
  `;

const options = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: COUNTRIES_QUERY }),
};

export default function CountryAPI() {
  const [countries, setCountries] = useState([]);

  async function fetchData() {
    const response = await fetch(
      `https://countries.trevorblades.com/graphq`,options
    );
    const data = await response.json();
    const results = data.data.continent.countries;
    setCountries(results);
  }

  return (
    <div>
      <ul>
        {countries.map((country) => (
          <ul>
            <li>Państwo: {country.name}</li>
            <li>Stolica: {country.capital === null ? '-' : country.capital}</li>
          </ul>
        ))}
      </ul>
    </div>
  );
}
