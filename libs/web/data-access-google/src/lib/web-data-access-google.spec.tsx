import { render } from '@testing-library/react';

import WebDataAccessGoogle from './web-data-access-google';

describe('WebDataAccessGoogle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebDataAccessGoogle />);
    expect(baseElement).toBeTruthy();
  });
});
