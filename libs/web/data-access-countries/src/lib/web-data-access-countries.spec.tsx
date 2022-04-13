import { render } from '@testing-library/react';

import SelectCountries from './SelectCountries';

describe('WebDataAccessCountries', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SelectCountries />);
    expect(baseElement).toBeTruthy();
  });
});
