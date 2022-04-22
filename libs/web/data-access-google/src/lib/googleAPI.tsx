import { useState } from 'react';
import { Group, Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';


export function GoogleAPI() {
  const [functionEnabled, enableFunction] = useState(false);
  const [results, setResults] = useState([] as any);
  const [query, setQuery] = useState('');
  const key='AIzaSyC9ntEwOZg7dixTbfbVOTLr3YNx6fvOI4g';
  const fetchURL =
    `https://www.googleapis.com/customsearch/v1?key=${key}&cx=017576662512468239146:omuauf_lfve&q=`;
  let lackInfo = false;

  const fetchResults = async () => {
    const response = await fetch(fetchURL + query);
    const data = await response.json();
    setResults(data);
    enableFunction(true);
  };

  const XD = 1;
  return (
    
    <div>
      <Group position="center">
      <Button
        variant="outline"
        onClick={() =>
          showNotification({
            title: query,
            message: XD.toString(),
          })
        }
      >
        Show notification
      </Button>
    </Group>
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
      {functionEnabled === true ? (
        results.queries.request.map((item: any, i: number) => {
          return (
            <div key={item.searchTerms + i}>
              <h3>Wyszukiwane hasło: {item.searchTerms}</h3>
              <span>
                Liczba wyszukań:{' '}
                {item.totalResults === undefined
                  ? (lackInfo = true)
                  : item.totalResults}
              </span>
            </div>
          );
        })
      ) : (
        <p> Musisz wpisać dowolną wartość </p>
      )}
      {functionEnabled === true && lackInfo === false
        ? results.items.map((item: any, i: number) => {
            return (
              <div key={item.cacheId + i}>
                <h3>
                  Tytuł: <a href={item.link}> {item.title}</a>
                </h3>
              </div>
            );
          })
        : ''}
        <div className="chart"></div>
        <ul className="key">
          <li>
            <strong className="percent red">4%</strong>
            <span className="choice">Jump right in, startupfille here I come.</span>
          </li>
          <li>
            <strong className="percent gray">4%</strong>
            <span className="choice">Email back to discuss, flattered and positive.</span>
          </li>
          <li>
            <strong className="percent purple">6%</strong>
            <span className="choice">Respond and say "Thanks but no thanks."</span>
          </li>
          <li>
            <strong className="percent blue">9%</strong>
            <span className="choice">Email back to discuss, all business.</span>
          </li>
        </ul>
    </div>
    
  );
}
export default GoogleAPI;
