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

  showNotification({
    title: 'Default notification',
    message: 'Hey there, your code is awesome! 🤥',
  })

  return (
    <div>
      <Group position="center">
      <Button
        variant="outline"
        onClick={() =>
          showNotification({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
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
    </div>
    
  );
}
export default GoogleAPI;
