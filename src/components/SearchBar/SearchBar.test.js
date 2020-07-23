import React from 'react';
import { render, fireEvent } from '../../utils/test-utils';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from './';

const setup = () => {
  const utils = render(<SearchBar />);
  const input = utils.getByPlaceholderText(/Buscar.../i);
  return {
    input,
    ...utils,
  };
};
describe('render SearchBar component', () => {
  it('should render an input element', () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const inputElement = getByPlaceholderText(/Buscar.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should search for characters', async () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'SpiderMan' } });
    expect(input.value).toBe('SpiderMan');
  });
});
