import React, {useState} from "react";

const COUNTRIES_QUERY = `
{
  continent(code:"EU"){
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
            <h1> Country API </h1>
            <ul>  
            {/* {JSON.stringify(countries, null, 2)} */}
                {countries.map(country => (
                  <div>
                    <h3>Państwo: {country.name}</h3>
                    <span>Stolica: {country.capital}</span>
                  </div>
                ))}
            </ul>
        </div>
    )
}


  