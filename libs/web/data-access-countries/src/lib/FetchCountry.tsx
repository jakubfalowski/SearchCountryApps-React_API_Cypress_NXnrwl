import React, { useState } from 'react';
import { ContinentsQuery } from './ContinentsQuery';
import { ContinentsQueryAll } from './ContinentsQueryAll';
import SelectCountries from './SelectCountries';
import { continents } from './ContinentsList';
import { useParams } from 'react-router-dom';

export default function FetchCountry() {
  const [countries, setCountries] = useState([] as any[]);
  const [cc, setcc] = useState(String);
  const [amountCountries, setAmountCountries] = useState(Number);
  let [userCountries, setUserCountries] = useState(5);
  const [order, setOrder] = useState('ASC');
  const [listCountries, setListCountries] = useState([] as any[]);
  const [sort, setSort] = useState(false);
  let { page } = useParams();

  const fetchURL = 'https://countries.trevorblades.com/graphql';
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: ContinentsQuery(cc) }),
  };

  const fetchData = async () => {
    const response = await fetch(fetchURL + ContinentsQuery(cc), options);
    const data = await response.json();
    setCountries(data.data.continent.countries);
    setAmountCountries(data.data.continent.countries.length);
    setSort(false);
  };

  const Sorting = (col: any, countries: String[]) => {
    sort === false ? setSort(true) : null;
    if (order === 'ASC') {
      const sorted = [...countries].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setListCountries(sorted);
      setOrder('DSC');
    }

    if (order === 'DSC') {
      const sorted = [...countries].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setListCountries(sorted);
      setOrder('ASC');
    }
  };

  if (userCountries > amountCountries) userCountries = amountCountries;

  let amountPages = amountCountries%userCountries===0 ? Math.floor(amountCountries/userCountries) : Math.floor(amountCountries/userCountries)+1;
  let pagesTab = [];
  for(let i = 0; i < amountPages;i++) pagesTab[i] = i+1;
  if(page === undefined) page = '1';

  return (
    <div>
      <div>
        <span>
          {' '}
          Pokaż:
          <input
            type="number"
            min="5"
            max={amountCountries}
            value={userCountries}
            onChange={(e) => setUserCountries(e.target.valueAsNumber)}
          />{' '}
          {userCountries}/{amountCountries} krotek.
        </span>
        <select onChange={(e) => setcc(e.target.value)}>
          {continents.map((continent) => (
            <option
              key={continent.continentCode}
              value={continent.continentCode}
            >
              {continent.continent}
            </option>
          ))}
        </select>
        <button onClick={fetchData}> Wyślij </button>
      </div>
      <table>
        <thead>
          <tr>
            <th onClick={() => Sorting('name', countries)}>Kraj</th>
            <th onClick={() => Sorting('native', countries)}>
              Nazwa kraju w ich języku
            </th>
            <th onClick={() => Sorting('code', countries)}>Kod</th>
            <th onClick={() => Sorting('capital', countries)}>Stolica</th>
            <th onClick={() => Sorting('currency', countries)}>Waluta</th>
            <th onClick={() => Sorting('phone', countries)}>Telefon</th>
          </tr>
        </thead>
        {sort
          ? SelectCountries(listCountries, userCountries, page)
          : SelectCountries(countries, userCountries, page)}
      </table>
      {pagesTab.map((pageNumber) => (
            <a href={"/"+pageNumber} key={pageNumber}> {pageNumber} </a>
          ))}
    </div>
  );
}
