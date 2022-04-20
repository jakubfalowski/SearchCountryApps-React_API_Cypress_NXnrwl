import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './app'
import '@testing-library/jest-dom/extend-expect';

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
