import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './app'
import '@testing-library/jest-dom/extend-expect';
import {SelectCountries} from '@app/web/data-access-countries';

it('Correctly rendered(react-dom)', () => {
  const span = document.createElement('span');
  ReactDOM.render(
    <App />,
    span
  );
});

it('Correctly rendered(jest-dom)', () => {
  render(
    <App />
  );
});

it('Correctly rendered Countries', () => {
  const countries = ['Polska','Anglia']
  for(let i=1;i<=countries.length;i++){
    render(SelectCountries(countries,i,i))
    expect(countries[i-1]).toBeTruthy();
  };
});
