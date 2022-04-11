import { render } from '@testing-library/react';

import App from '../pages/_app';

describe('App', () => {
  it('Powinno się wyrenderować', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('Powinno być imie i nazwisko autora', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Jakub Fałowski/)).toBeTruthy();
  });

  it('4 dodać 6 powinno być większe od 7', () => {
    function sum(a, b) {
      return a + b;
    }
    expect(sum(4, 6)).toBeGreaterThan(7)
  });

});