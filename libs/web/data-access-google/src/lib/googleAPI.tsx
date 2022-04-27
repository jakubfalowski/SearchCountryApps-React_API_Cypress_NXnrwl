import { useState } from 'react';
import { Group, Button, Grid, TextInput, Box } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts';
import { useForm } from '@mantine/form';

export function GoogleAPI() {
  const [results1, setResults1] = useState(0);
  const [results2, setResults2] = useState(0);
  const [firstQuery, setFirstQuery] = useState('');
  const [secondQuery, setSecondQuery] = useState('');
  const key='AIzaSyC9ntEwOZg7dixTbfbVOTLr3YNx6fvOI4g';
  const fetchURL =
    `https://www.googleapis.com/customsearch/v1?key=${key}&cx=017576662512468239146:omuauf_lfve&q=`;

  const fetchResults = async (searchName1: string, searchName2: string) => {
    const response1 = await fetch(fetchURL + searchName1);
    const response2 = await fetch(fetchURL + searchName2);
    const data1 = await response1.json();
    const data2 = await response2.json();
    setResults1(parseInt(data1.searchInformation.totalResults));
    setResults2(parseInt(data2.searchInformation.totalResults));
    
  };

  console.log(typeof(results1));
  console.log(results2);

  const form = useForm({
    initialValues: {
      input1: '',
      input2: '',
    },

    validate: {
      input1: (value) => (/^[A-Za-z\s]+$/.test(value) ? null : 'Wprowadziłeś nieprawidłowe dane. Wymagane litery bądź spacje.'),
      input2: (value) => (/^[A-Za-z\s]+$/.test(value) ? null : 'Wprowadziłeś nieprawidłowe dane. Wymagane litery bądź spacje.'),
    },
  });

  return (
    
    <div>
      <h3>
        Wpisz dane wyszukiwanie, by sprawdzić jak często zostało one wyświetlane
      </h3>
      <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((function(values) { fetchResults(values.input1, values.input2); setFirstQuery(values.input1); setSecondQuery(values.input2);}))} >
        <TextInput
          required
          label="Pierwsze zapytanie"
          placeholder="poland"
          {...form.getInputProps('input1')}
        />

        <TextInput
          required
          label="Drugie zapytanie"
          placeholder="england"
          {...form.getInputProps('input2')}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
    
    <Grid>
          <Grid.Col span={4}>
            
          
      {results1 !==0 || results2 !== 0 ? 
      <div><div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
      <PieChart>
        <Pie dataKey="value" data={[
          { name: firstQuery+'', value: results1+0 },
          { name: secondQuery+'', value: results2+0 },
          ]} fill="#8884d8" label />
          <Tooltip />
      </PieChart>
    </ResponsiveContainer></div>
    <Button
        variant="outline"
        onClick={() =>
          showNotification({
            title: firstQuery,
            message: results1,
          })
        }
      >
        {firstQuery}
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          showNotification({
            title: secondQuery,
            message: results2,
          })
        }
      >
        {secondQuery}
      </Button>
    </div>
     : <p> Nie znaleziono </p>
     }
     </Grid.Col>
        </Grid>
      {/* {functionEnabled === true ? (
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
        
      )} */}
      {/* {functionEnabled === true && lackInfo === false
        ? results.items.map((item: any, i: number) => {
            return (
              <div key={item.cacheId + i}>
                <h3>
                  Tytuł: <a href={item.link}> {item.title}</a>
                </h3>
              </div>
            );
          })
        : ''} */}
    </div>
    
  );
}
export default GoogleAPI;
