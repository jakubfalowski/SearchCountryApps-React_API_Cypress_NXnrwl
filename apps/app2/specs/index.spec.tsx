import React from 'react';
import { render } from '@testing-library/react';
import CustomApp from '../pages/_app';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomApp />);
    expect(baseElement).toBeTruthy();
  });
});
