import { render } from '@testing-library/react';

import WebDataAccessCountries from './web-data-access-countries';

describe('WebDataAccessCountries', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebDataAccessCountries />);
    expect(baseElement).toBeTruthy();
  });
});
