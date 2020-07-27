import React from 'react';
import { render } from '../../utils/test-utils';

import Header from './';
jest.mock('../SearchBar', () => {
  return {
    __esModule: true,
    default: () => {
      return <div></div>;
    },
  };
});

describe('render Header component', () => {
  it('should render logo component', () => {
    const { debug, getByTestId } = render(<Header />);
    debug();
    const titleElement = getByTestId('logo');
    expect(titleElement).toBeInTheDocument();
  });
});
