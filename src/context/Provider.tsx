import React, { useState, useEffect } from 'react';
import Context from './Context';
import { IEmployee } from '../@types/employees';
import getEmployees from '../api/api';

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);

  const contextValues = {
    employees,
  };

  useEffect(() => {
    getEmployees()
      .then((result) => {
        setEmployees(result);
      })
      .catch((error) => console.log('An error occured', error));
  }, []);
  
  return (
    <Context.Provider value={ contextValues }>
      { children }
    </Context.Provider>
  );
}

export default Provider;
