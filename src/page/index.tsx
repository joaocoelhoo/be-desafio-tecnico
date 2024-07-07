import React from 'react';
import { useFetchTableData } from '../hooks/useFetchTableData';
import Table from '../components/Table';
import useTable from '../hooks/useTable';
import TopBar from '../components/TopBar';
import TableSearch from '../components/TableSearch';

const MainPage: React.FC = () => {
  const { data } = useFetchTableData();
  const { tableViewData, searchEmployees, expandedRows, toggleExpand } =
    useTable({ tableData: data });

  return (
    <>
      <TopBar />
      <div style={{ margin: 32 }}>
        <TableSearch onSearch={searchEmployees} />
        <Table
          tableData={tableViewData}
          expandedRows={expandedRows}
          toggleExpand={toggleExpand}
        />
      </div>
    </>
  );
};

export default MainPage;
