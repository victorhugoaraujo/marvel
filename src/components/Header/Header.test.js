import React from 'react';
import { render } from '../../utils/test-utils';

import Header from './';

describe('render Header component', () => {
  it('should render a title element', () => {
    const { getByText } = render(<Header />);
    const titleElement = getByText(/MARVEL/i);
    expect(titleElement).toBeInTheDocument();
  });
});
