import ReactDOM from 'react-dom';
import {ContinentButton} from '@app/web/data-access-countries'
import {render} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

it("Prawidłowo wyrenderowane(react-dom)", ()=>{
  const span = document.createElement("span");
  ReactDOM.render(<ContinentButton continent="Europe" continentCode="EU" />, span)
})

it("Prawidłowo wyrenderowane button(jest-dom)", () => {
  const {getByTestId} = render(<ContinentButton continent="Europe" continentCode="EU"/>);
  expect(getByTestId('button')).toHaveTextContent("Europe")
})