import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { ContinentsQuery } from './ContinentsQuery';
import SelectCountries from './SelectCountries';
import { continents } from './ContinentsList';

import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

export default function FetchCountry() {
  const [countries, setCountries] = useState([] as any[]);
  const [continentCode, setContinentCode] = useState(String);
  const [amountCountries, setAmountCountries] = useState(Number);
  let [userCountries, setUserCountries] = useState(5);
  const [order, setOrder] = useState('ASC');
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
    navigate(`/${continentCode}/${pageNumber}`);
    const response = await fetch(
      fetchURL + ContinentsQuery(continentCode),
      options
    );
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

  let amountPages =
    amountCountries % userCountries === 0
      ? Math.floor(amountCountries / userCountries)
      : Math.floor(amountCountries / userCountries) + 1;
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
            value={userCountries}
            onChange={(e) => setUserCountries(e.target.valueAsNumber)}
          />{' '}
          {userCountries}/{amountCountries} krotek
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
            <th onClick={() => Sorting('name', countries)}>
              Kraj {order === 'ASC' ? <BiChevronUp /> : <BiChevronDown />}{' '}
            </th>
            <th onClick={() => Sorting('native', countries)}>
              Nazwa kraju w ich języku{' '}
              {order === 'ASC' ? <BiChevronUp /> : <BiChevronDown />}
            </th>
            <th onClick={() => Sorting('code', countries)}>
              Kod {order === 'ASC' ? <BiChevronUp /> : <BiChevronDown />}{' '}
            </th>
            <th onClick={() => Sorting('capital', countries)}>
              Stolica {order === 'ASC' ? <BiChevronUp /> : <BiChevronDown />}{' '}
            </th>
            <th onClick={() => Sorting('currency', countries)}>
              Waluta {order === 'ASC' ? <BiChevronUp /> : <BiChevronDown />}{' '}
            </th>
            <th onClick={() => Sorting('phone', countries)}>
              Telefon {order === 'ASC' ? <BiChevronUp /> : <BiChevronDown />}{' '}
            </th>
          </tr>
        </thead>
        {sort
          ? SelectCountries(listCountries, userCountries, page)
          : SelectCountries(countries, userCountries, page)}
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