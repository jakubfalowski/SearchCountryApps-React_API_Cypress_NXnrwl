import React, { useState } from "react";

function CommentsPage(){
    let [functionEnabled, enableFunction] = useState([])
    let [comments, setComments] = useState([])
    const fetchComments = async () => {
        const response = await fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyC9ntEwOZg7dixTbfbVOTLr3YNx6fvOI4g&cx=017576662512468239146:omuauf_lfve&q=poland')
        const data = await response.json()
        setComments(data)
        enableFunction(true)
    }
    return(
        <div>
        <button onClick = {fetchComments}> Load comments </button>
        { functionEnabled === true ? comments.queries.request.map((item, i) => {
          return <div key={i}><h3>Wyszukiwane hasło: {item.searchTerms}</h3><span>Liczba wyszukań: {item.totalResults}</span></div>
        }) : <p> Wpisz dowolną wartość </p>}
        </div>
        
        
    )
}
export default CommentsPage
