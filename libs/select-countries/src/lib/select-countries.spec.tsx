import { render } from '@testing-library/react';

import SelectCountries from './select-countries';

describe('SelectCountries', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SelectCountries />);
    expect(baseElement).toBeTruthy();
  });
});
