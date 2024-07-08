import React from 'react';
import { IEmployee } from '../../@types/employees';
import { formatDate, formatPhoneNumber } from '../../utils/formatFunctions';

type EmployeeDetailsProps = {
  employee: IEmployee;
};

const EmployeeDetails: React.FC<EmployeeDetailsProps> = ({ employee }) => {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <b>Cargo:</b>
        </div>
        <div>{employee.job}</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 6 }}>
        <div>
          <b>Data de admissão:</b>
        </div>
        <div>{formatDate(employee.admission_date)}</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 6 }}>
        <div>
          <b>Telefone:</b>
        </div>
        <div>{formatPhoneNumber(employee.phone)}</div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
