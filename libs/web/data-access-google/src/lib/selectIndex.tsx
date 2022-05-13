import React, { useState } from 'react';
import { Group, Button, Grid, TextInput, Box, NumberInput, ColorPicker, Text, DEFAULT_THEME, HueSlider} from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from 'recharts';
import { formList, useForm } from '@mantine/form';
import hslToColorName from './hslToColorName';

const key1='AIzaSyC9ntEwOZg7dixTbfbVOTLr3YNx6fvOI4g';
const key2='AIzaSyB45fm5hOp9Fpm-1z9ACUfrLVLQKTuMWBY';
const key3='AIzaSyARjbtgeF4C3dPCXNyGmnVhgGqiUmCTqCI';
const key4='AIzaSyBCnKX-ObOWhYFN5XO7-EgaeuAOWMhtOsw';
const key5='AIzaSyBffbK0spqz_ksvT_p9L-NsAkWtUcYljrk'
const fetchURL =
  `https://www.googleapis.com/customsearch/v1?key=${key3}&cx=017576662512468239146:omuauf_lfve&q=`;
let allResults = 0;

export function SelectIndex() {
  const [totalResults,setTotalResults] = useState([] as any)
  const [searchTimes,setSearchTimes] = useState([0])
  const [query, setQuery] = useState([] as any)
  const [colors, setColors] = useState([200, 0, 100]);

  const fetchResults = async (numberOfQueries: number) => {
    const response = []
    const data = []
    const tr = [];
    const st = [];

    for(let i = 0; i<numberOfQueries; i++){
      response[i] = await fetch(fetchURL + query.employees[i].name);
      data[i] = await response[i].json();
      tr.push(data[i].searchInformation.totalResults)
      st.push(data[i].searchInformation.searchTime)
      allResults += parseInt(data[i].searchInformation.totalResults);
    }
    console.log(totalResults)
    console.log(searchTimes)
    setTotalResults(tr);
    setSearchTimes(st)
  }

  
  function returnButton(i:number){
    return [...Array(i).keys()].map(index => {
      return(
          <Button
            color={hslToColorName(colors[index])}
            key={index}
          >
            {index+1} : {query.employees !== undefined && query?.employees[index].name}
          </Button>
      )
    })
  }

  

  function returnInput(i:number){
    const colorsCopy = [200, 0 ,100] as any;
    return [...Array(i).keys()].map((_,index) => {
      return(
        <span key={index}>
          <TextInput
            required
            label={`Zapytanie nr. ${index+1}`}
            placeholder="google query"
            {...form.getListInputProps('employees', index, 'name')}
          />
          <HueSlider value={colors[index]} onChange={(e) => { colorsCopy.splice(index,1); colorsCopy.splice(index, 0, e); setColors(colorsCopy);}} />
        </span>
      )
    })
  }

  const tab = [] as any
  totalResults.map((n:string, item:number) => tab.push({"name":query?.employees[item].name+" "+Math.round(parseInt(n)/allResults*100)+"%" , "value": parseInt(n)}));

  // const tab2 = [] as any
  // totalResults.map((n:string, item:number) => tab2.push({name:''}))
  // console.log(tab2) 

  // żeby aplikacja działała np przy 3 inputach trzeba nacisnac 2 razy button(linijka 112) :D mam problem z dynamicznym dodaniem mantinowego pola w liscie inputow

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
        <div className="inputContainer">{returnInput(3)}<Button type="submit" onClick={() => fetchResults(3)}>Submit</Button></div>
        
      </form>
    </Box>
    <Grid>
      <Grid.Col span={4}>   
        {totalResults[0] !== 0 ? 
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
          {query.employees !== undefined ? returnButton(3): null}
        </div>
        : <p> Nie znaleziono </p>
        }
      </Grid.Col>
    </Grid>
    </div>
    
  );
}
export default SelectIndex;
