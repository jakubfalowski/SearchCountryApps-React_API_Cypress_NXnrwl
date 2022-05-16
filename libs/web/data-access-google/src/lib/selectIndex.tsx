import React, { useState } from 'react';
import { Group, Button, Grid, TextInput, Box, NumberInput, ColorPicker, Text, DEFAULT_THEME, HueSlider} from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from 'recharts';
import { formList, useForm } from '@mantine/form';
import hslToColorName from './hslToColorName';
import { ReturnButton } from './returnButton';

const key1='AIzaSyC9ntEwOZg7dixTbfbVOTLr3YNx6fvOI4g';
const key2='AIzaSyB45fm5hOp9Fpm-1z9ACUfrLVLQKTuMWBY';
const key3='AIzaSyARjbtgeF4C3dPCXNyGmnVhgGqiUmCTqCI';
const key4='AIzaSyBCnKX-ObOWhYFN5XO7-EgaeuAOWMhtOsw';
const key5='AIzaSyBffbK0spqz_ksvT_p9L-NsAkWtUcYljrk'
const fetchURL =
  `https://www.googleapis.com/customsearch/v1?key=${key2}&cx=017576662512468239146:omuauf_lfve&q=`;
const colorsCopy = [200, 0, 100];

export function SelectIndex() {
  const [totalResults,setTotalResults] = useState([] as any)
  const [searchTimes,setSearchTimes] = useState([0])
  const [query, setQuery] = useState([] as any)
  const [colors, setColors] = useState([200, 0, 100]);
  const allResults = parseInt(totalResults[0]) + parseInt(totalResults[1]) + parseInt(totalResults[2])
  
  const fetchResults = async (numberOfQueries: number) => {
    const response = []
    const data = []
    const totalResultsCopy = [];
    const searchInformationCopy = [];

    for(let i = 0; i<numberOfQueries; i++){
      response[i] = await fetch(fetchURL + query.employees[i].name);
      data[i] = await response[i].json();
      totalResultsCopy.push(data[i].searchInformation.totalResults)
      searchInformationCopy.push(data[i].searchInformation.searchTime)
    }
    setTotalResults(totalResultsCopy);
    setSearchTimes(searchInformationCopy)
  }

  function returnInput(i:number){
    return [...Array(i).keys()].map((_,index) => {
      return(
        <span key={index}>
          <TextInput
            required
            label={`Zapytanie nr. ${index+1}`}
            placeholder="google query"
            {...form.getListInputProps('employees', index, 'name')}
          />
          <HueSlider value={colors[index]} onChange={(e) => { console.log(colorsCopy, colors); console.log("usuwanie: "+index); colorsCopy.splice(index,1); console.log("dodawanie: "+e+" w miejscu "+index); colorsCopy.splice(index, 0, e); console.log(colorsCopy); setColors(colorsCopy); console.log(colors, colors[index])}} />
        </span>
      )
    })
  }

  function returnChart(){
    return(
    <div className="pieContainer" style={{ width: '100%', height: 300 }}>
    <ResponsiveContainer>
            <PieChart>
              <Pie dataKey="value" data={tab} label>
                {tab.map((entry: any, index: any) => 
                <Cell key={index} fill={`hsl(+${colors[index]},100%,50%`} 
                onClick={() =>
                  showNotification({
                  title: query?.employees[index].name,
                  message: `wyniki wyszukiwania: ${totalResults[index]}, czas wyszukania: ${searchTimes[index]}`,
                  color: hslToColorName(colors[index])
              })
            }/>)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          </div>)
  }

  const tab = [] as any
  totalResults.map((n:string, item:number) => tab.push({"name":query?.employees[item].name+" "+Math.round(parseInt(n)/allResults*100)+"%" , "value": parseInt(n)}));

  const form = useForm({
    initialValues: {
      employees: formList([{name: ''}, {name: ''}, {name: ''}])
    },
  });

  return (
    <div>
      <h3>
        Wpisz dane wyszukiwanie, by sprawdzić jak często zostało one wyświetlane
      </h3>
      <Box>
        <form onSubmit={form.onSubmit((values) => setQuery(values))}>
          <div className="inputContainer">{returnInput(3)}
            <Button type="submit" onClick={() => fetchResults(3)}>
              Submit
            </Button>
          </div>
        </form>
      </Box>
    <Grid>
      <Grid.Col span={4}>    
          {returnChart()}
          {ReturnButton(3, colors, query)}

      </Grid.Col>
    </Grid>
    </div>
  );
}
export default SelectIndex;
