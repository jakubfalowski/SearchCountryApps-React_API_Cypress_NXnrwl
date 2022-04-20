import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { ContinentsQuery } from './ContinentsQuery';
import SelectCountries from './SelectCountries';
import { continents } from './ContinentsList';

import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

export default function CountriesList() {
  enum Order{ ASC, DSC }

  const [countries, setCountries] = useState([] as any[]);
  const [continentCode, setContinentCode] = useState('');
  const [amountCountries, setAmountCountries] = useState(0);
  const [userCountries, setUserCountries] = useState(5);
  const [order, setOrder] = useState(Order.ASC);
  const [listCountries, setListCountries] = useState([] as any[]);
  const [sort, setSort] = useState(false);
  let { page } = useParams();

  const navigate = useNavigate();
  const fetchURL = 'https://countries.trevorblades.com/graphql';
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: ContinentsQuery(continentCode) }),
  };

  const fetchData = async (pageNumber: String | Number) => {
    try {
      navigate(`/${continentCode}/${pageNumber}`);
      const response = await fetch(
        fetchURL + ContinentsQuery(continentCode),
        options
      );
      const data = await response.json();
      setCountries(data.data.continent.countries);
      setAmountCountries(data.data.continent.countries.length);
      setSort(false);
    } catch (err) {
      console.error(err);
    }
  };

  const sorting = (col: any, countries: String[]) => {
    if(order === Order.ASC){
      const sorted = [...countries].sort( (a, b) => a[col].localeCompare(b[col], 'fr', { ignorePunctuation: true }));
      setListCountries(sorted);
      setOrder(Order.DSC);
      setSort(true);
    }
    if(order === Order.DSC){
      const sorted = [...countries].sort( (a, b) => b[col].localeCompare(a[col], 'fr', { ignorePunctuation: true }));
      setListCountries(sorted);
      setOrder(Order.ASC);
      setSort(true);
    }
  };

  const getUserCountries = () => {
    if (userCountries > amountCountries) return amountCountries
    else return userCountries
  }

  let amountPages =
    amountCountries % getUserCountries() === 0
      ? Math.floor(amountCountries / getUserCountries())
      : Math.floor(amountCountries / getUserCountries()) + 1;
  let pagesTab = [];
  for (let i = 0; i < amountPages; i++) pagesTab[i] = i + 1;
  if (page === undefined) page = '1';

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
              key={continent.continentCode}
              value={continent.continentCode}
            >
              {continent.continent}
            </option>
          ))}
        </select>
        <button onClick={() => fetchData(1)}> Wyślij </button>
      </div>
      <table>
        <thead>
          <tr>
            <th onClick={() => sorting('name', countries)}>
              Kraj {Order.ASC ? <BiChevronUp /> : <BiChevronDown />}{' '}
            </th>
            <th onClick={() => sorting('native', countries)}>
              Nazwa kraju w ich języku{' '}
              {Order.ASC ? <BiChevronUp /> : <BiChevronDown />}
            </th>
            <th onClick={() => sorting('code', countries)}>
              Kod {Order.ASC ? <BiChevronUp /> : <BiChevronDown />}{' '}
            </th>
            <th onClick={() => sorting('capital', countries)}>
              Stolica {Order.ASC ? <BiChevronUp /> : <BiChevronDown />}{' '}
            </th>
            <th onClick={() => sorting('currency', countries)}>
              Waluta {Order.ASC ? <BiChevronUp /> : <BiChevronDown />}{' '}
            </th>
            <th onClick={() => sorting('phone', countries)}>
              Telefon {Order.ASC ? <BiChevronUp /> : <BiChevronDown />}{' '}
            </th>
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