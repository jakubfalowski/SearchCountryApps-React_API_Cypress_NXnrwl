import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('Powinno się wyrenderować', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('Powinno być imie i nazwisko autora', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Jakub Fałowski/)).toBeTruthy();
  });
});
