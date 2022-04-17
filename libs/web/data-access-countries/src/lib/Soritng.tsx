import { useState, useContext } from "react";
import FetchCountry from "./FetchCountry";

export const Sorting = (col :any, countries: any[]) => {

    const [order, setOrder] = useState("ASC");
    const [listCountries, setListCountries] = useState([] as any[])
    
    if(order === "ASC"){
      const sorted = [...countries].sort((a,b)=>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setListCountries(sorted);
      setOrder("DSC");
    }
  
  if(order === "DSC"){
    const sorted = [...countries].sort((a,b)=>
      a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
    );
    setListCountries(sorted);
    setOrder("ASC");
  }
}