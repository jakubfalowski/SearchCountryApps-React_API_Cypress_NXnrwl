import { continents } from './ContinentsList';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CountryAPI() {
  const [countries, setCountries] = useState([] as any[]);
  const [order, setOrder] = useState(String);
  const [cc, setcc] = useState(String);
  const [amountCountries, setAmountCountries] = useState(Number)
  const [userCountries, setUserCountries] = useState(Number)
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
        setAmountCountries(countries.length)
    } catch (err) {
        console.error(err);
    }
  }
  if (codeContinent !== '' && order === "") fetchData();

    const sorting = (col :any) => {
    if(order === "") setOrder("ASC");
    if(order === "ASC"){
      const sorted = [...countries].sort((a,b)=>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setCountries(sorted);
      setOrder("DSC");
    }
  
  if(order === "DSC"){
    const sorted = [...countries].sort((a,b)=>
      a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
    );
    setCountries(sorted);
    setOrder("ASC");
  }
}
  return (
    
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
        <a href={cc+""}><button> Wyślij </button></a>
      </div>
      <table>
        <tbody>
          <tr>
            <th onClick={()=>sorting("name")}>Kraj</th>
            <th onClick={()=>sorting("native")}>Nazwa kraju w ich języku</th>
            <th onClick={()=>sorting("code")}>Kod</th>
            <th onClick={()=>sorting("capital")}>Stolica</th>
            <th onClick={()=>sorting("currency")}>Waluta</th>
            <th onClick={()=>sorting("phone")}>Telefon</th>
          </tr>
        </tbody>
      {countries.slice(0, 10).map(country => (
        <tr key={country.code}>
          <td>{country.name}</td>
          <td>{country.native}</td>
          <td>{country.code}</td>
          <td>{country.capital === null ? '-' : country.capital}</td>
          <td>{country.currency === null ? '-' : country.currency}</td>
          <td>+{country.phone}</td>
        </tr>
      ))}
      </table>
    </div>
  );
}
