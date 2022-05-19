import React, { useState, useMemo} from 'react';
import { Group, Button, Grid, TextInput, Box, NumberInput, ColorPicker, Text, DEFAULT_THEME, HueSlider, Paper} from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from 'recharts';
import { formList, useForm } from '@mantine/form';
import hslToColorName from './hslToColorName';
import { ReturnButton } from './returnButton';
import { ReturnChart } from './returnChart';
import { Query } from 'react-query';

const key1='AIzaSyC9ntEwOZg7dixTbfbVOTLr3YNx6fvOI4g';
const key2='AIzaSyB45fm5hOp9Fpm-1z9ACUfrLVLQKTuMWBY';
const key3='AIzaSyARjbtgeF4C3dPCXNyGmnVhgGqiUmCTqCI';
const key4='AIzaSyBCnKX-ObOWhYFN5XO7-EgaeuAOWMhtOsw';
const key5='AIzaSyBffbK0spqz_ksvT_p9L-NsAkWtUcYljrk'
const fetchURL =
  `https://www.googleapis.com/customsearch/v1?key=${key1}&cx=017576662512468239146:omuauf_lfve&q=`;
const colorsCopy = [200, 0, 100];

export function SelectIndex() {
  const [totalResults,setTotalResults] = useState([] as any)
  const [searchTimes,setSearchTimes] = useState([0])
  const [items, setItems] = useState([] as any)
  const [query, setQuery] = useState([] as any)
  const [colors, setColors] = useState([200, 0, 100]);
  const allResults = parseInt(totalResults[0]) + parseInt(totalResults[1]) + parseInt(totalResults[2])

  const fetchResults = async (numberOfQueries: number) => {
    const response = []
    const data = []
    const totalResultsCopy = [];
    const searchInformationCopy = [];
    const itemsCopy = [];

    for(let i = 0; i<numberOfQueries; i++){
      response[i] = await fetch(fetchURL + query[i].name);
      data[i] = await response[i].json();
      totalResultsCopy.push(data[i].searchInformation.totalResults)
      searchInformationCopy.push(data[i].searchInformation.searchTime)
      itemsCopy.push(data[i].items)
    }
    setTotalResults(totalResultsCopy);
    setSearchTimes(searchInformationCopy);
    setItems(itemsCopy);
  }

  function returnInput(i:number){
    return [...Array(i).keys()].map((_,index) => {
      return(
        <Grid.Col md={12/i} sm={8} xs={12} key={index}>
          <TextInput
            required
            label={`Zapytanie nr. ${index+1}`}
            placeholder="google query"
            {...form.getListInputProps('employees', index, 'name')}
          />
          <HueSlider value={colors[index]} onChange={(e) => { console.log(colorsCopy, colors); console.log("usuwanie: "+index); colorsCopy.splice(index,1); console.log("dodawanie: "+e+" w miejscu "+index); colorsCopy.splice(index, 0, e); console.log(colorsCopy); setColors(colorsCopy); console.log(colors, colors[index])}} />
        </Grid.Col>
      )
    })
  }

  function returnInfo(i:number){
    let changeIndex = 0
    return [...Array(i).keys()].map((_,index) => {
      
      if(changeIndex === index){
        changeIndex += 1;
        return <Grid.Col md={12/i} xs={12} key={index} className="infoContainer"> <h1 className='center' style={{background: hslToColorName(colors[index])}}>{query.length > 0 && query[index].name}</h1>
          {items[index]!== undefined ?
            items[index].map((item: any, i:any) => {
            return <Paper key={i} shadow="md" p="md" withBorder style={{ borderBottomColor:hslToColorName(colors[index])} }><a href={item.link} className="infoHref" target="_blank" rel="noreferrer" 
            ><Text>{item.title}</Text></a></Paper>
          })
          : null}
        </Grid.Col>
      }
      else return null
    })
  }

  const tab = [] as any
  totalResults.map((n:string, item:number) => tab.push({"name":query?.[item].name+" "+Math.round(parseInt(n)/allResults*100)+"%" , "value": parseInt(n)}));

  const form = useForm({
    initialValues: {
      employees: formList([{name: 'france'}, {name: 'poland'}, {name: 'england'}])
    },
  });

  return (
    <div className='box'>
      <Box className='searchBox'>
        <form className="center" onSubmit={form.onSubmit((values) => setQuery(values.employees))}>
          <Grid className="inputContainer container center">{returnInput(3)}
            <Grid.Col md={4} sm={8} xs={12} className='center'>
              <Button color='violet' type="submit">
                Wyślij hasła
              </Button>
            </Grid.Col>
          </Grid>
        </form>
      </Box>
    <Grid>
      <Grid.Col span={12} className="chartContainer">    
          {ReturnChart(tab, colors, query, totalResults, searchTimes)}
    <div className='center'>
      <Grid className='buttonContainer container center'>
        {ReturnButton(3, colors, query)}
        <Grid.Col md={4} sm={8} xs={12} className='center'>
          <Button color='violet' type="submit" onClick={() => fetchResults(3)}>
            Wyszukaj
          </Button>
        </Grid.Col>
    </Grid>
    </div>
      </Grid.Col>
      {returnInfo(3)}
    </Grid>
    </div>
  )
}
export default SelectIndex;
