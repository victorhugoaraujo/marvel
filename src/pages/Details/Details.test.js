import React from 'react';
import { render } from '../../utils/test-utils';

import Details from './';

jest.mock('../../components/Header', () => {
  return {
    __esModule: true,
    default: () => {
      return <div />;
    },
  };
});

jest.mock('../../components/CharacterDetails', () => {
  return {
    __esModule: true,
    default: () => {
      return <div />;
    },
  };
});

describe('render Details Page', () => {
  it('should render Details Page correctly', () => {
    const { getByTestId } = render(<Details />);
  });
});
