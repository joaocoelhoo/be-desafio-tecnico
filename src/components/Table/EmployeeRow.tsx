import React from 'react';
import { IEmployee } from '../../@types/employees';
import { formatDate, formatPhoneNumber } from '../../utils/formatFunctions';
import IconButton from '../CollapseButton/CollapseButton';
import EmployeeDetails from './EmployeeDetails';

type EmployeeRowProps = {
  employee: IEmployee;
  isExpanded: boolean;
  onToggleExpand: () => void;
};

const EmployeeRow: React.FC<EmployeeRowProps> = ({ employee, isExpanded, onToggleExpand }) => {
  return (
    <React.Fragment>
      <tr>
        <td>
          <img className="img-person" alt="image-of-person" src={employee.image} />
        </td>
        <td>{employee.name}</td>
        <td>{employee.job}</td>
        <td>{formatDate(employee.admission_date)}</td>
        <td>{formatPhoneNumber(employee.phone)}</td>
        <td>
          <IconButton isOpen={isExpanded} onClick={onToggleExpand} />
        </td>
      </tr>
      {isExpanded && (
        <tr>
          <td colSpan={6} style={{ padding: 0 }}>
            <EmployeeDetails employee={employee} />
          </td>
        </tr>
      )}
    </React.Fragment>
  );
};

export default EmployeeRow;
