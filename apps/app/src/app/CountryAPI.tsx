import React, {useState} from "react";
const codeContinent = `AF`
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
                  <div>
                    <h3>Państwo: {country.name}</h3>
                    <span>Stolica: {country.capital}</span>
                  </div>
                ))}
            </ul>
        </div>
    )
}


  