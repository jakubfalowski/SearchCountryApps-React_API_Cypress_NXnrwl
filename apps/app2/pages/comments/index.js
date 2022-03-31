import React, { useState } from "react";

function CommentsPage(){
    let [comments, setComments] = useState([])
    const fetchComments = async () => {
        const response = await fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyC9ntEwOZg7dixTbfbVOTLr3YNx6fvOI4g&cx=017576662512468239146:omuauf_lfve&q=poland')
        const data = await response.json()
        setComments(data)
    }
    
    const sampleJSON = {
        
            "kind": "customsearch#search",
            "url": {
              "type": "application/json",
              "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
            },
            "queries": {
              "request": [
                {
                  "title": "Google Custom Search - poland",
                  "totalResults": "14440000000",
                  "searchTerms": "poland",
                  "count": 10,
                  "startIndex": 1,
                  "inputEncoding": "utf8",
                  "outputEncoding": "utf8",
                  "safe": "off",
                  "cx": "017576662512468239146:omuauf_lfve"
                }
              ],
              "nextPage": [
                {
                  "title": "Google Custom Search - poland",
                  "totalResults": "14440000000",
                  "searchTerms": "poland",
                  "count": 10,
                  "startIndex": 11,
                  "inputEncoding": "utf8",
                  "outputEncoding": "utf8",
                  "safe": "off",
                  "cx": "017576662512468239146:omuauf_lfve"
                }
              ]
            }
            
      }
      console.log(sampleJSON.queries.request)
      console.log(comments)
    return(
        <div>
        <button onClick = {fetchComments}> Load comments </button>
        {comments.kind}
        { sampleJSON.queries.request.map((item, i) => {
          return <div key={i}><h3>{item.searchTerms}</h3><span>{item.totalResults}</span></div>
        }) }
        {/* { comments.queries.request.map((item, i) => {
          return <div key={i}><h3>{item.searchTerms}</h3><span>{item.totalResults}</span></div>
        }) } */}
        </div>
        
        
    )
}
export default CommentsPage
