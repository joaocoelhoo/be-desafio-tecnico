import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TableData from '../TableData';
import { IEmployee } from '../../../@types/employees';
import { formatDate, formatPhoneNumber } from '../../../utils/formatFunctions';

jest.mock('../../../utils/formatFunctions');

const mockEmployees: IEmployee[] = [
  {
    id: 1,
    name: 'Maria',
    job: 'Front-end',
    admission_date: '2020-03-15',
    phone: '5557894561230',
    image: 'https://www.clipartmax.com/png/middle/277-2772117_user-profile-avatar-woman-icon-avatar-png-profile-icon.png',
  },
  {
    id: 2,
    name: 'Giovana',
    job: 'Designer',
    admission_date: '2020-06-20',
    phone: '5553698520147',
    image: 'https://www.clipartmax.com/png/middle/277-2772117_user-profile-avatar-woman-icon-avatar-png-profile-icon.png',
  },
];

describe('TableData Component', () => {
  beforeEach(() => {
    (formatDate as jest.Mock).mockImplementation((date: string) => date);
    (formatPhoneNumber as jest.Mock).mockImplementation((phone: string) => phone);
  });

  test('renders table rows with employee data', () => {
    render(
      <table>
        <TableData tableData={mockEmployees} expandedRows={{}} toggleExpand={() => {}} />
      </table>
    );

    mockEmployees.forEach(employee => {
      expect(screen.getByText(employee.name)).toBeInTheDocument();
      expect(screen.getByText(employee.job)).toBeInTheDocument();
      expect(screen.getByText(employee.admission_date)).toBeInTheDocument();
      expect(screen.getByText(employee.phone)).toBeInTheDocument();
    });

    expect(screen.getAllByAltText('image-of-person')).toHaveLength(2);
  });

  test('toggles row expansion on button click', () => {
    const toggleExpand = jest.fn();
    render(
      <table>
        <TableData tableData={mockEmployees} expandedRows={{ 0: false, 1: false }} toggleExpand={toggleExpand} />
      </table>
    );

    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
    expect(toggleExpand).toHaveBeenCalledWith(0);
    fireEvent.click(buttons[1]);
    expect(toggleExpand).toHaveBeenCalledWith(1);
  });

  test('renders expanded row content when expanded', () => {
    render(
      <table>
        <TableData tableData={mockEmployees} expandedRows={{ 0: true, 1: false }} toggleExpand={() => {}} />
      </table>
    );

    const expandedContent = screen.getByText('Cargo:');
    expect(expandedContent).toBeInTheDocument();
  });
});
