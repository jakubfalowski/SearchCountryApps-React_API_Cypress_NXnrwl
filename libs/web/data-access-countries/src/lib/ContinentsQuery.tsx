import {
  gql
} from "@apollo/client";

export const continentsQuery = (codeContinent: string) => gql`{
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
