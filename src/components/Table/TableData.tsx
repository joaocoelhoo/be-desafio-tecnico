import React from 'react';
import { IEmployee } from '../../@types/employees';
import EmployeeRow from './EmployeeRow';

type TableDataProps = {
  tableData: IEmployee[];
  expandedRows: {
    [key: number]: boolean;
  };
  toggleExpand: (index: number) => void;
};

const TableData: React.FC<TableDataProps> = ({ tableData, toggleExpand, expandedRows }) => {
  return (
    <tbody>
      {tableData.map((employee, index) => (
        <EmployeeRow
          key={employee.id}
          employee={employee}
          isExpanded={expandedRows[index]}
          onToggleExpand={() => toggleExpand(index)}
        />
      ))}
    </tbody>
  );
};

export default TableData;
