import { Button, Grid} from '@mantine/core';
import hslToColorName from './hslToColorName';

export function ReturnButton(i:number, colors:any, query:any){
    if(query[0] !== undefined){
        return [...Array(i).keys()].map(index => {
        return(
            <Grid.Col md={12/i} sm={8} xs={12} key={index}>
                <Button
                    color={hslToColorName(colors[index])}
                    key={index}
                >
                    {index+1} : {query[index].name !== undefined && query[index].name}
                </Button>
            </Grid.Col>
        )
        })
    }
    else return null
  }