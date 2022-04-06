import { render } from '@testing-library/react';

import SearchGoogle from './web-data-access-google';

describe('WebDataAccessGoogle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchGoogle />);
    expect(baseElement).toBeTruthy();
  });
});
