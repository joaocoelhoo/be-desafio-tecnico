import { useCallback, useEffect, useState } from 'react';
import { IEmployee } from '../@types/employees';

const api = 'http://localhost:3000/employees';

export const useFetchTableData = () => {
  const [data, setData] = useState<IEmployee[]>(
    JSON.parse(localStorage.getItem('api-cache') || '[]'),
  );

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(api);
      const tableData = await response.json();
      setData(tableData);
      localStorage.setItem('api-cache', JSON.stringify(tableData));
    } catch (err) {
      throw new Error('Error while fetching API');
    }
  }, [setData]);

  useEffect(() => {
    if (!data.length) {
      fetchData();
    }
  }, [fetchData]);

  return { data };
};
