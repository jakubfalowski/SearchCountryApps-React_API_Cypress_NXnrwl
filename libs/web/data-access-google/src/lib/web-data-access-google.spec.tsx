import { render } from '@testing-library/react';

import SearchGoogle from './SearchGoogle';

describe('WebDataAccessGoogle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchGoogle />);
    expect(baseElement).toBeTruthy();
  });
});
