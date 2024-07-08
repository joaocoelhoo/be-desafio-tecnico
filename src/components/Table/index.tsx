import React from 'react';
import { IEmployee } from '../../@types/employees';
import TableHeader from './Header';
import TableData from './TableData';
import './Table.css';

type TableDataProps = {
  tableData: IEmployee[];
  expandedRows: {
    [key: number]: boolean;
  };
  toggleExpand: (index: number) => void;
};

export default function Table({
  tableData,
  expandedRows,
  toggleExpand,
}: TableDataProps) {
  return (
    <table className="responsive-table">
      <TableHeader />
      <TableData
        tableData={tableData}
        expandedRows={expandedRows}
        toggleExpand={toggleExpand}
      />
    </table>
  );
}
