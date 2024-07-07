import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TableHeader from '../Header';

const HEADERS = [
  { name: 'Foto', className: 'none' },
  { name: 'Nome', className: 'none' },
  { name: 'Cargo', className: 'none' },
  { name: 'Data de Admissão', className: 'none' },
  { name: 'Telefone', className: 'none' },
  { name: '.', className: 'hidded-colunm' },
];

describe('TableHeader', () => {
  it('should render headers correctly', () => {
    const { getByText } = render(<TableHeader />);

    HEADERS.forEach((header) => {
      const headerElement = getByText(header.name);
      expect(headerElement).toBeInTheDocument();
      expect(headerElement).toHaveClass(header.className);
    });
  });
});
