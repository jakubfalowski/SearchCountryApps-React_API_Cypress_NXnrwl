import { useState } from "react";

export function GoogleAPI(){
    const [functionEnabled, enableFunction] = useState([])
    const [comments, setComments] = useState([])
    const [query, setQuery] = useState('')
    let lackInfo = false;
    
    const fetchComments = async () => {
        const response = await fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyC9ntEwOZg7dixTbfbVOTLr3YNx6fvOI4g&cx=017576662512468239146:omuauf_lfve&q='+query)
        const data = await response.json()
        setComments(data)
        enableFunction(true)
    }
    return(
        <div>
            <h3> Wpisz dane wyszukiwanie, by sprawdzić jak często zostało one wyświetlane </h3>
            <input value={query} type="text" placeholder="google" onChange={e => setQuery(e.target.value)}/>
            <button onClick = {fetchComments}> Wyświetl</button>
            { functionEnabled === true ? comments.queries.request.map((item, i) => {
            return <div key={i}><h3>Wyszukiwane hasło: {item.searchTerms}</h3><span>Liczba wyszukań: {item.totalResults === undefined ? lackInfo=true : item.totalResults}</span></div>
            }) : <p> Musisz wpisać dowolną wartość </p>}
            { functionEnabled === true && lackInfo === false ? comments.items.map((item, i) => {
            return <div key={i}><h3>Tytuł: <a href={item.link}> {item.title}</a></h3></div>
            }) : ''}
        </div>    
    )
}
export default GoogleAPI