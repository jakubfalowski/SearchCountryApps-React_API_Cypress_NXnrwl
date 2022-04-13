import { useState } from 'react';

export function GoogleAPI() {
  const [results, setResults] = useState([] as any);
  const [query, setQuery] = useState('');
  const fetchURL ='https://www.googleapis.com/customsearch/v1?key=AIzaSyC9ntEwOZg7dixTbfbVOTLr3YNx6fvOI4g&cx=017576662512468239146:omuauf_lfve&q=';

  const fetchResults = async () => {
    const response = await fetch(fetchURL + query);
    const data = await response.json();
    setResults(data);

    results.queries.request.map((item: any, i: number) => {
      return (
        <div key={item.searchTerms+i}>
          <h3>Wyszukiwane hasło: {item.searchTerms}</h3>
          <span>
            Liczba wyszukań:{' '}
            {item.totalResults !== undefined
              ? item.totalResults
              : ''}
          </span>
        </div>
      );})
  };
  return (
    <div>
      <h3>
        Wpisz dane wyszukiwanie, by sprawdzić jak często zostało one wyświetlane
      </h3>
      <input
        value={query}
        type="text"
        placeholder="google"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={fetchResults}> Wyświetl</button>
    </div>
  );
}
export default GoogleAPI;
