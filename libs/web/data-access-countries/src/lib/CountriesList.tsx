import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { continentsQuery } from './ContinentsQuery';
import { SelectCountries } from './SelectCountries';
import { continents } from './ContinentsList';
import { sortingList } from './SortingList';
import { BiChevron } from './BiChevron';
import { Order } from './Order';

export default function CountriesList() {
  const [countries, setCountries] = useState([] as string[]);
  const [continentCode, setContinentCode] = useState('');
  const [amountCountries, setAmountCountries] = useState(0);
  const [userCountries, setUserCountries] = useState(5);
  const [order, setOrder] = useState(Order.ASC);
  const [listCountries, setListCountries] = useState([] as string[]);
  const [sort, setSort] = useState(false);
  const { page, code } = useParams();

  const navigate = useNavigate();
  const fetchURL = 'https://countries.trevorblades.com/graphql';
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: continentsQuery(continentCode) }),
  };

  const fetchData = async (pageNumber: string | number) => {
    navigate(`/${continentCode}/${pageNumber}`);
    const response = await fetch(
      fetchURL + continentsQuery(continentCode),
      options
    );
    const data = await response.json();
    setCountries(data.data.continent.countries);
    setAmountCountries(data.data.continent.countries.length);
  };

  const sorting = (col: any, countries: string[]) => {
    if (!sort) setSort(true);
    if (col === 'phone') {
      if (order === Order.ASC) {
        const sorted = [...countries].sort(
          (a, b) => parseInt(a[col]) - parseInt(b[col])
        );
        setListCountries(sorted);
        setOrder(Order.DSC);
      }
      if (order === Order.DSC) {
        const sorted = [...countries].sort(
          (a, b) => parseInt(b[col]) - parseInt(a[col])
        );
        setListCountries(sorted);
        setOrder(Order.ASC);
      }
    } else {
      if (order === Order.ASC) {
        const sorted = [...countries].sort((a, b) =>
          a[col].localeCompare(b[col], 'fr', { ignorePunctuation: true })
        );
        setListCountries(sorted);
        setOrder(Order.DSC);
      }
      if (order === Order.DSC) {
        const sorted = [...countries].sort((a, b) =>
          b[col].localeCompare(a[col], 'fr', { ignorePunctuation: true })
        );
        setListCountries(sorted);
        setOrder(Order.ASC);
      }
    }
  };

  const getUserCountries = () => {
    if (userCountries > amountCountries) return amountCountries;
    else return userCountries;
  };

  const amountPages = useMemo(
    () =>
      amountCountries % getUserCountries() === 0
        ? Math.floor(amountCountries / getUserCountries())
        : Math.floor(amountCountries / getUserCountries()) + 1,
    [amountCountries, getUserCountries()]
  );

  const pagesTab: number[] = useMemo(() => {
    const result: number[] = [];
    for (let i = 0; i < amountPages; i++) {
      result[i] = i + 1;
    }
    return result;
  }, [amountPages]);

  console.log(countries)
  return (
    <div>
      <div className="header">
        <span>
          {' '}
          Poka??:
          <input
            type="number"
            min="5"
            max={amountCountries}
            value={userCountries}
            onChange={(e) => setUserCountries(e.target.valueAsNumber)}
          />{' '}
         <span className='userCountries'>{getUserCountries()}</span>/<span className='amountCountries'>{amountCountries}</span>  krotek
        </span>
        <select onChange={(e) => setContinentCode(e.target.value)}>
          {continents.map((continent) => (
            <option key={continent.value} value={continent.value}>
              {continent.label}
            </option>
          ))}
        </select>
        <button
          onClick={function () {
            fetchData(1);
            setSort(false);
          }}
        >
          {' '}
          Wy??lij{' '}
        </button>
      </div>
      {continents.map((item) =>
        code === item.value ? (
          <p>
            Obecnie wyszukujesz fraze dla: <b>{item.label}</b>
          </p>
        ) : null
      )}
      <table>
        <thead>
          <tr>
            {sortingList.map((tuple) => (
              <th
                key={tuple.col}
                className={tuple.class}
                onClick={() => sorting(tuple.col, countries)}
              >
                {tuple.name}{' '}
                {order === 0 ? (
                  <BiChevron isUp={true} />
                ) : (
                  <BiChevron isUp={false} />
                )}{' '}
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
