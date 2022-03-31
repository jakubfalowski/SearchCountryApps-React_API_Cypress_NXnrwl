import React, { useState, useRef, useEffect} from "react";

function CommentsPage(){
    const [functionEnabled, enableFunction] = useState([])
    const [comments, setComments] = useState([])
    const [query, setQuery] = useState('')
    console.log(query)
    
    const fetchComments = async () => {
        const response = await fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyC9ntEwOZg7dixTbfbVOTLr3YNx6fvOI4g&cx=017576662512468239146:omuauf_lfve&q='+query)
        const data = await response.json()
        setComments(data)
        enableFunction(true)
    }
    return(
        <div>
            <input value={query} type="text" placeholder="google" onChange={e => setQuery(e.target.value)}/>
            <button onClick = {fetchComments}> Wyświetl</button>
            { functionEnabled === true ? comments.queries.request.map((item, i) => {
            return <div key={i}><h3>Wyszukiwane hasło: {item.searchTerms}</h3><span>Liczba wyszukań: {item.totalResults === undefined ? 0 : item.totalResults}</span></div>
            }) : <p> Musisz wpisać dowolną wartość </p>}
        </div>    
    )
}
export default CommentsPage