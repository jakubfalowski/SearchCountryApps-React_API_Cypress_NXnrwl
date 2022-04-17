
import React, { useState } from 'react';
import {COUNTRIES_QUERY} from './ContinentsQuery'
import { useParams } from 'react-router-dom';
import SelectCountries from './SelectCountries';
import { continents } from './ContinentsList';
import { Sorting } from './Soritng';
import { useNavigate } from 'react-router-dom'

export default function FetchCountry() {

  
  const { codeContinent } = useParams();
  const [countries, setCountries] = useState([] as any[]);
  const [cc, setcc] = useState(String);
  const [amountCountries, setAmountCountries] = useState(Number)
  const [userCountries, setUserCountries] = useState(Number)
  let navigate = useNavigate();


  const fetchURL = 'https://countries.trevorblades.com/graphql';
  const options = {
    method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: COUNTRIES_QUERY(codeContinent) }),
    }

  const fetchData = async () => {
      navigate(`/${cc}`, { replace: true })
      const response = await fetch(fetchURL + COUNTRIES_QUERY(cc), options);
      const data = await response.json();
      setCountries(data.data.continent.countries);
      setAmountCountries(countries.length);
  }
  return(
    <div>
      <div>
        <span> Pokaż:
        <input type="number" min="1" max={amountCountries} placeholder={amountCountries+""} value={userCountries} onChange={(e) => setUserCountries(e.target.valueAsNumber)}/> krotek.
        </span>
        <select onChange={(e) => setcc(e.target.value)}>
        {continents.map(continent => (
        <option key={continent.continentCode} value={continent.continentCode}>{continent.continent}</option>
        ))}
        </select>
        <button onClick={fetchData}> Wyślij </button>
      </div>
        <table>
          <thead>
            <tr>
              <th onClick={()=>Sorting("name", countries)}>Kraj</th>
              <th onClick={()=>Sorting("native", countries)}>Nazwa kraju w ich języku</th>
              <th onClick={()=>Sorting("code", countries)}>Kod</th>
              <th onClick={()=>Sorting("capital", countries)}>Stolica</th>
              <th onClick={()=>Sorting("currency", countries)}>Waluta</th>
            </tr>
          </thead>
          {countries.slice(0, 10).map(country => (
            <tbody>
            <tr key={country.code}>
                <td>{country.name}</td>
                <td>{country.native}</td>
                <td>{country.code}</td>
                <td>{country.capital === null ? '-' : country.capital}</td>
                <td>{country.currency === null ? '-' : country.currency}</td>
                <td>+{country.phone}</td>
            </tr>
            </tbody>
        ))}
            {/* {SelectCountries(countries)} */}
        </table>
        </div>);
  // console.log(Sorting("currency", countries));

}
