import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders main page', () => {
  const { getByText } = render(<App />);
  expect(getByText(/Funcionários/)).toBeInTheDocument();
});
