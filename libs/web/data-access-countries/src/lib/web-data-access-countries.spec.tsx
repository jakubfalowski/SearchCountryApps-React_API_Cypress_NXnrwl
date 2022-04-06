import { render } from '@testing-library/react';

import CountryAPI from './web-data-access-countries';

describe('WebDataAccessCountries', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CountryAPI />);
    expect(baseElement).toBeTruthy();
  });
});
