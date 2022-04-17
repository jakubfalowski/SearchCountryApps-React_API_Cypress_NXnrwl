export const COUNTRIES_QUERY = (codeContinent :any) => `{
    continent(code:"${codeContinent}"){
      code
      name
      countries{
        name
        native
        code
        capital
        currency
        phone
      }
    }
  }`;
