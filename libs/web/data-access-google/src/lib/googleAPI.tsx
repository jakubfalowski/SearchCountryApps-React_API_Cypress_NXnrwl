import React, { useState } from 'react';
import { Group, Button, Grid, TextInput, Box, NumberInput } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts';
import { useForm } from '@mantine/form';

export function GoogleAPI() {
  const [totalResults, setTotalResults] = useState([] as any)
  const [searchTimes, setSearchTimes] = useState([] as any)
  const [query, setQuery] = useState([] as any)
  const [numberOfQueries, setNumberOfQueries] = useState(1);
  const key='AIzaSyC9ntEwOZg7dixTbfbVOTLr3YNx6fvOI4g';
  const key2='AIzaSyB45fm5hOp9Fpm-1z9ACUfrLVLQKTuMWBY'
  const fetchURL =
    `https://www.googleapis.com/customsearch/v1?key=${key}&cx=017576662512468239146:omuauf_lfve&q=`;

  const fetchResults = async (searchNames: Array<string>, numberOfQueries: number) => {
    const response = []
    const data = []
    for(let i = 0; i<numberOfQueries; i++){
      response[i] = await fetch(fetchURL + searchNames[i]);
      data[i] = await response[i].json();
      setTotalResults(data[i].searchInformation.totalResults)
      setSearchTimes(data[i].searchInformation.searchTimes)
    }
  };
  
  function returnButton(i:number){
    return [...Array(i).keys()].map(x => {
      return(
        <Button
          variant="outline"
          onClick={() =>
            showNotification({
              title: query[x],
              message: `wyniki wyszukiwania: ${totalResults[x]}, czas wyszukania: ${searchTimes[x]}`,
            })
          }
        >
          {x+1} : {query[x]}
        </Button>
      )
    })
  }

  function returnInput(i:number){
    return [...Array(i).keys()].map(x => {
      return(
        <TextInput
          required
          label={`Zapytanie nr. ${x+1}`}
          placeholder="google query"
          {...form.getInputProps('input1')}
        />
      )
    })
  }

  // function PieData(i: number){
  //   for(let x = 0; x<i; x++){
  //     {name: query[x], value: totalResults[x]}
  //   }
  // } 

  const number = useForm({
    initialValues: {
      input1: '',
    },

    validate: {
      input1: (value) => (/^[0-9]+$/.test(value) ? null : 'Wprowadziłeś nieprawidłowe dane. Wymagane litery bądź spacje.'),
    },
  });

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
      <form onSubmit={number.onSubmit((function(values) {returnButton(numberOfQueries); returnInput(numberOfQueries); }))}>
        <NumberInput value={numberOfQueries} max={5} min={1} onChange={(val: number) => setNumberOfQueries(val)} />
      </form>
      <h3>
        Wpisz dane wyszukiwanie, by sprawdzić jak często zostało one wyświetlane
      </h3>
      {returnButton(numberOfQueries)}
      <Box sx={{ maxWidth: 300 }} mx="auto">
      <form /* onSubmit={form.onSubmit((function(values) { fetchResults(values.input1, values.input2); setFirstQuery(values.input1); setSecondQuery(values.input2);}))} */>
        {returnInput(numberOfQueries)}

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
    
    <Grid>
      <Grid.Col span={4}>   
        {totalResults[0] !== 0 ? 
        <div>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              {/* <Pie dataKey="value" data={PieData} fill="#8884d8" label /> */}
                <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
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
