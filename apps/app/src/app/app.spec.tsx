// import { render } from '@testing-library/react';

// import App from './app';

// describe('App', () => {
//   it('Powinno się wyrenderować', () => {
//     const { baseElement } = render(<App />);

//     expect(baseElement).toBeTruthy();
//   });

//   it('Powinno być imie i nazwisko autora', () => {
//     const { getByText } = render(<App />);

//     expect(getByText(/Jakub Fałowski/)).toBeTruthy();
//   });
// });
import ReactDOM from 'react-dom';
import {ContinentButton} from '@app/web/data-access-countries'
import {render} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

it("Prawidłowo wyrenderowane", ()=>{
  const span = document.createElement("span");
  ReactDOM.render(<ContinentButton continent="Europe" continentCode="EU" />, span)
})

it("Prawidłowy button", () => {
  const {getByTestId} = render(<ContinentButton continent="Europe" continentCode="EU"/>);
  expect(getByTestId('button')).toHaveTextContent("Europe")
})