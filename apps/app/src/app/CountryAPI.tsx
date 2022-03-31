import React from "react";

const LAUNCHES_QUERY = `
{
        country(code: "PL") {
          name
          native
          capital
          emoji
          currency
          languages {
            code
            name
          }
        }
}
  `

export default function CountryAPI(){
    const [launches, setLaunches] = React.useState([]);

    React.useEffect(() => {
        fetch('https://countries.trevorblades.com/graphql',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify ({ query: LAUNCHES_QUERY })
        }).then(response => response.json())
        .then(data => setLaunches(data))
    },[]);
    return(
        <div>
            <h1> Country API </h1>
            <ul> 
                {JSON.stringify(launches, null, 2)}
            </ul>
        </div>
    )
}


  