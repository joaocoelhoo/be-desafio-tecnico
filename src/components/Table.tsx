import React, { ReactNode, useEffect, useState } from 'react';
import Context from '../context/Context';
import { EmployeeContextType, IEmployee } from '../@types/employees';
import './Table.css';
import { formatDate, formatPhoneNumber } from '../utils/formatFunctions';

const Table: React.FC  = () => {
  const { employees } = React.useContext(Context) as EmployeeContextType;
  const [filteredEmployees, setFilteredEmployees] = useState<IEmployee[]>([]);

  useEffect(() => {
    setFilteredEmployees(employees)
  }, [employees])

  const searchEmployees = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = target.value.toLowerCase();

    const filterEmployees = employees.filter((employee) => {
      const name = employee.name.toLowerCase(); 
      const job = employee.job.toLowerCase();
      const phone = employee.phone;

      const employeeFound = name.includes(inputValue) || job.includes(inputValue) || phone.includes(inputValue);

      return employeeFound;
    });

    setFilteredEmployees(filterEmployees);
  };

  const renderEmployees = (employees: IEmployee[]): ReactNode[] => {
    const employeesData = employees.map((employee, index) =>
      <tr key={index}>
        <td>
          <img 
            className='img-person' 
            alt='image of person' 
            src={ employee.image }
          />
        </td>
        <td>
          { employee.name }
        </td>
        <td>
          { employee.job }
        </td>
        <td>
          { formatDate(employee.admission_date) }
        </td>
        <td>
          { formatPhoneNumber(employee.phone) }
        </td>
      </tr>
    );

    return employeesData;
  }

  return (
    <div>
      <section>
        <h4 className='title'>Funcionários</h4>
      </section>
      <section>
        <input
          type='text' 
          id='search'
          placeholder='Pesquisar'
          onChange={ (event) => {searchEmployees(event)} } />
      </section>
      <table>
        <thead className='columns'>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Data de Admissão</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          { filteredEmployees && renderEmployees(filteredEmployees) }
        </tbody>
      </table>
    </div>
  )
}

export default Table;