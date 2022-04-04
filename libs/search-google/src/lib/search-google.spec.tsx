import { render } from '@testing-library/react';

import SearchGoogle from './search-google';

describe('SearchGoogle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchGoogle />);
    expect(baseElement).toBeTruthy();
  });
});
