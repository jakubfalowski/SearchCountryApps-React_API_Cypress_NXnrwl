import { useState } from 'react';
import { Group, Button, Grid } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';

export function GoogleAPI() {
  const [functionEnabled, enableFunction] = useState(false);
  const [results, setResults] = useState([] as any);
  const [firstQuery, setFirstQuery] = useState('');
  const [secondQuery, setSecondQuery] = useState('');
  const key='AIzaSyC9ntEwOZg7dixTbfbVOTLr3YNx6fvOI4g';
  const fetchURL =
    `https://www.googleapis.com/customsearch/v1?key=${key}&cx=017576662512468239146:omuauf_lfve&q=`;
  let lackInfo = false;

  const fetchResults = async (searchName: string) => {
    const response = await fetch(fetchURL + searchName);
    const data = await response.json();
    setResults(data);
    enableFunction(true);
  };

  const XD = 1000;

  return (
    
    <div>
      <Group position="center">
      <Button
        variant="outline"
        onClick={() =>
          showNotification({
            title: firstQuery,
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
        value={firstQuery}
        type="text"
        placeholder="google"
        onChange={(e) => setFirstQuery(e.target.value)}
      />
      {/* <input
        value={secondQuery}
        type="text"
        placeholder="google"
        onChange={(e) => setSecondQuery(e.target.value)}
      /> */}
      <button onClick={function(){ fetchResults(firstQuery); /* fetchResults(secondQuery) */}}> Wyświetl</button>
      {functionEnabled === true ? (
        results.queries.request.map((item: any, i: number) => {
          return (
            <div key={item.searchTerms + i}>
              <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie dataKey="value" data={[
    { name: item.searchTerms, value: parseInt(item.totalResults) },
    { name: 'Group B', value: 12220000001 },
  ]} fill="#8884d8" label />
                </PieChart>
              </ResponsiveContainer>
            </div>
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
        <Grid>
          <Grid.Col span={4}>
            
          </Grid.Col>
        </Grid>
    </div>
    
  );
}
export default GoogleAPI;
