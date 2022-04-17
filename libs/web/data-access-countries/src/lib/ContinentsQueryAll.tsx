export const ContinentsQueryAll = `{
    continents{
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
