import { Button} from '@mantine/core';
import hslToColorName from './hslToColorName';

export function ReturnButton(i:number, colors:any, query:any){
    if(query.employees !== undefined){
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
    else return "<p> Brak wpisanego zapytania </p>"
  }