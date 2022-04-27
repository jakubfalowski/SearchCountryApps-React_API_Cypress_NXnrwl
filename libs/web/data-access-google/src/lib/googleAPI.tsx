import { useState } from 'react';
import { Group, Button, Grid, TextInput, Box } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';
import { useForm } from '@mantine/form';

export function GoogleAPI() {
  const [functionEnabled, enableFunction] = useState(false);
  const [results, setResults] = useState([] as any);
  const [firstQuery, setFirstQuery] = useState('');
  const [secondQuery, setSecondQuery] = useState('');
  const key='AIzaSyC9ntEwOZg7dixTbfbVOTLr3YNx6fvOI4g';
  const fetchURL =
    `https://www.googleapis.com/customsearch/v1?key=${key}&cx=017576662512468239146:omuauf_lfve&q=`;

  const fetchResults = async (searchName: string) => {
    const response = await fetch(fetchURL + searchName);
    const data = await response.json();
    setResults(data.searchInformation.totalResults);
    enableFunction(true);
  };

  const XD = 1000;

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

  console.log(results)

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
      <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((function(values) { fetchResults(values.input1); setFirstQuery(values.input1);  setSecondQuery(values.input2);}))} >
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
      <p> {firstQuery} </p>
      <p> {secondQuery} </p>
    </Box>
    

      {firstQuery !== '' ? 
      <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
      <PieChart>
        <Pie dataKey="value" data={[
{ name: 'XDD', value: parseInt(results) },
{ name: 'XD', value: parseInt(results) },
]} fill="#8884d8" label />
      </PieChart>
    </ResponsiveContainer></div> : <p> Błąd </p>
     }
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
        <Grid>
          <Grid.Col span={4}>
            
          </Grid.Col>
        </Grid>
    </div>
    
  );
}
export default GoogleAPI;
