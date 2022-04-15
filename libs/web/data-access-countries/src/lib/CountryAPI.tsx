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
        native
        code
        capital
        currency
        phone
      }
    }
  }`;
  const fetchURL = 'https://countries.trevorblades.com/graphql';
  const options = {
    method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: COUNTRIES_QUERY }),
    }

  const fetchData = async () => {
    try {
        const response = await fetch(fetchURL + COUNTRIES_QUERY, options);
        const data = await response.json();
        setCountries(data.data.continent.countries)
    } catch (err) {
        console.error(err);
    }
  }
  if (codeContinent !== '') fetchData()

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Kraj</th>
            <th>Nazwa kraju w ich języku</th>
            <th>Kod</th>
            <th>Stolica</th>
            <th>Waluta</th>
            <th>Telefon</th>
          </tr>
        </tbody>
      {countries.map(country => (
        <tr key={country.code}>
          <td>{country.name}</td>
          <td>{country.native}</td>
          <td>{country.code}</td>
          <td>{country.capital === null ? '-' : country.capital}</td>
          <td>{country.currency}</td>
          <td>{country.phone}</td>
        </tr>
      ))}
      </table>
    </div>
  );
}
