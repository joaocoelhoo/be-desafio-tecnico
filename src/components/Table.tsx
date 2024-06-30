import React, { ReactNode } from 'react';
import Context from '../context/Context';
import { EmployeeContextType, IEmployee } from '../@types/employees';

const Table: React.FC  = () => {

  const renderEmployees = (employees: IEmployee[]): ReactNode[] => {
    const employeesData = employees.map((employee, index) =>
      <tr key={index}>
        <td>
          { employee.image }
        </td>
        <td>
          { employee.name }
        </td>
        <td>
          { employee.job }
        </td>
        <td>
          { employee.admission_date }
        </td>
        <td>
          { employee.phone }
        </td>
      </tr>
    );

    return employeesData;
  }

  return (
    <Context.Consumer>
      {(contextValue: EmployeeContextType | null) => (
        <div>
          <table>
            <thead>
              <tr>
                <th>Foto</th>
                <th>Nome</th>
                <th>Cargo</th>
                <th>Data de Admissão</th>
                <th>Telefone</th>
              </tr>
            </thead>
            <tbody>
              { contextValue?.employees && renderEmployees(contextValue?.employees) }
            </tbody>
          </table>
        </div>
      )
      }
    </Context.Consumer>
  )
}

export default Table;