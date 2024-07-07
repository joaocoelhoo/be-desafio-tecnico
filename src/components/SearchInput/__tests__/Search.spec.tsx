import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchInput from '..';

describe('SearchInput Component', () => {
  test('renders input element and search icon', () => {
    render(<SearchInput />);
    const inputElement = screen.getByPlaceholderText(/Pesquisar/i);
    const iconElement = screen.getByRole('img');

    expect(inputElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  test('calls onSearch with the correct input value', () => {
    const handleSearch = jest.fn();
    render(<SearchInput onSearch={handleSearch} />);
    const inputElement = screen.getByPlaceholderText(/Pesquisar/i);

    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(handleSearch).toHaveBeenCalledWith('test');
  });
});
