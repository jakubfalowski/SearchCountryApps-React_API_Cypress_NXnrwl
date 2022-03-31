import React from 'react';
import ReactDOM from 'react-dom';

const sampleJSON = {
    "kind": "customsearch#search",
  "url": {
    "type": "application/json",
    "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
  }  
}

const sampleJSON2 = {
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
      ]
  }
}

function CommentsPage() {

  return (
    <div>
      {
        Object.keys(sampleJSON.url).map((key, i) => (
          <p key={i}>
            <span>Key Name: {key}</span>
            <span>Value: {sampleJSON.url[key]}</span>
          </p>
        ))
      }

      <h2>Array of Objects:</h2>
      <ul>
        {sampleJSON2.queries.request.map((item, i) => {
          return <li key={i}>{item.searchTerms} - {item.totalResults}</li>
        })}
      </ul>
    </div>
  )
}
export default CommentsPage