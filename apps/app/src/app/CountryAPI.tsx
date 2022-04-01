import path from "path";
import React, {useState} from "react";
var pathname = window.location.pathname
pathname = pathname.replace('/','');
const codeContinent = pathname
const COUNTRIES_QUERY = `
{
  continent(code:"`+codeContinent+`"){
    code
    name
    countries{
      name
      capital
    }
  }
}
  `

export default function CountryAPI(){
    const [countries, setCountries] = useState([] as any[]);

    React.useEffect(() => {
        fetch('https://countries.trevorblades.com/graphql',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify ({ query: COUNTRIES_QUERY })
        }).then(response => response.json())
        .then(data => setCountries(data.data.continent.countries))
    },[]);
    return(
        <div>
            <ul>  
            {/* {JSON.stringify(countries, null, 2)} */}
                {countries.map(country => (
                  <ul>
                    <li>Państwo: {country.name}</li>
                    <li>Stolica: {country.capital === null ? '-' : country.capital }</li>
                  </ul>
                ))}
            </ul>
        </div>
    )
}


  