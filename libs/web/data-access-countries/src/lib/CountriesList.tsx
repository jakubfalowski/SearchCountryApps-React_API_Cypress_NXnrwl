import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { continentsQuery } from './ContinentsQuery';
import SelectCountries from './SelectCountries';
import { continents } from './ContinentsList';
import { sortingList } from './SortingList';
import { BiChevron } from './BiChevron';
import { Order } from './Order';

export default function CountriesList() {

  const [countries, setCountries] = useState([] as String[]);
  const [continentCode, setContinentCode] = useState('');
  const [amountCountries, setAmountCountries] = useState(0);
  const [userCountries, setUserCountries] = useState(5);
  const [order, setOrder] = useState(Order.ASC);
  const [listCountries, setListCountries] = useState([] as String[]);
  const [sort, setSort] = useState(false);
  let { page } = useParams();

  const navigate = useNavigate();
  const fetchURL = 'https://countries.trevorblades.com/graphql';
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: continentsQuery(continentCode) }),
  };

  const fetchData = async (pageNumber: String | Number) => {
    try {
      navigate(`/${continentCode}/${pageNumber}`);
      const response = await fetch(
        fetchURL + continentsQuery(continentCode),
        options
      );
      const data = await response.json();
      setCountries(data.data.continent.countries);
      setAmountCountries(data.data.continent.countries.length);
    } catch (err) {
      console.error(err);
    }
  };

  const sorting = (col: any, countries: String[]) => {
    if(!sort) setSort(true)
    if(order === Order.ASC){
      const sorted = [...countries].sort( (a, b) => a[col].localeCompare(b[col], 'fr', { ignorePunctuation: true }));
      setListCountries(sorted);
      setOrder(Order.DSC);
    }
    if(order === Order.DSC){
      const sorted = [...countries].sort( (a, b) => b[col].localeCompare(a[col], 'fr', { ignorePunctuation: true }));
      setListCountries(sorted);
      setOrder(Order.ASC);
    }
  };

  const getUserCountries = () => {
    if (userCountries > amountCountries) return amountCountries
    else return userCountries
  }

  let amountPages = useMemo(() =>
    amountCountries % getUserCountries() === 0
      ? Math.floor(amountCountries / getUserCountries())
      : Math.floor(amountCountries / getUserCountries()) + 1,[amountCountries,getUserCountries()]);

  let pagesTab = [];
  for (let i = 0; i < amountPages; i++) pagesTab[i] = i + 1;
  
  return (
    <div>
      <div className="header">
        <span>
          {' '}
          Pokaż:
          <input
            type="number"
            min="5"
            max={amountCountries}
            value={getUserCountries()}
            onChange={(e) => setUserCountries(e.target.valueAsNumber)}
          />{' '}
          {getUserCountries()}/{amountCountries} krotek
        </span>
        <select onChange={(e) => setContinentCode(e.target.value)}>
          {continents.map((continent) => (
            <option
              key={continent.value}
              value={continent.value}
            >
              {continent.label}
            </option>
          ))}
        </select>
        <button onClick={function(){ fetchData(1); setSort(false)}}> Wyślij </button>
      </div>
      <table>
        <thead>
          <tr>
          {sortingList.map((tuple) => (
            <th key={tuple.col} onClick={() => sorting(tuple.col, countries)}>
            {tuple.name} {order === 0 ? <BiChevron isUp={true} /> : <BiChevron isUp={false} />}{' '}
            </th>
           ))}
          </tr>
        </thead>
        {sort
          ? SelectCountries(listCountries, getUserCountries(), page)
          : SelectCountries(countries, getUserCountries(), page)}
      </table>
      <div className="selectPages">
        {pagesTab.map((pageNumber) => (
          <button
            key={pageNumber}
            className="numberPage"
            onClick={() => fetchData(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
}