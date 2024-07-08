import { useEffect, useState } from 'react';
import { IEmployee } from '../@types/employees';

type UseTableProps = {
  tableData: IEmployee[];
};

const SMALL_MEDIA_QUERY = 600;

const useTable = ({ tableData }: UseTableProps) => {
  const [tableViewData, setTableViewData] = useState<IEmployee[]>([]);
  const [expandedRows, setExpandedRows] = useState<{ [key: number]: boolean }>(
    {},
  );

  const resetExpadendRows = () => {
    if (window.innerWidth > SMALL_MEDIA_QUERY) {
      setExpandedRows({});
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resetExpadendRows);

    return () => {
      window.removeEventListener('resize', resetExpadendRows);
    };
  }, []);

  const toggleExpand = (index: number) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  useEffect(() => {
    if (tableData) {
      setTableViewData(tableData);
    }
  }, [tableData]);

  const searchEmployees = (searchString: string) => {
    const sanitizedSearchString = searchString.toLocaleLowerCase();
    const filteredEmployees = tableData.filter(
      (item) =>
        item.name.toLocaleLowerCase().includes(sanitizedSearchString) ||
        item.phone.toLocaleLowerCase().includes(sanitizedSearchString) ||
        item.job.toLocaleLowerCase().includes(sanitizedSearchString),
    );

    setTableViewData(filteredEmployees);
  };

  return { tableViewData, searchEmployees, expandedRows, toggleExpand };
};

export default useTable;