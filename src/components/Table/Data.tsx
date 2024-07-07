import React from 'react';
import { IEmployee } from '../../@types/employees';
import { formatDate, formatPhoneNumber } from '../../utils/formatFunctions';
import IconButton from '../CollapseButton/CollapseButton';

type TableDataProps = {
  tableData: IEmployee[];
  expandedRows: {
    [key: number]: boolean;
  };
  toggleExpand: (index: number) => void;
};

export default function TableData({
  tableData,
  toggleExpand,
  expandedRows,
}: TableDataProps) {
  return (
    <tbody>
      {tableData.map((employee, index) => (
        <React.Fragment key={employee.id}>
          <tr>
            <td>
              <img
                className="img-person"
                alt="image of person"
                src={employee.image}
              />
            </td>
            <td>{employee.name}</td>
            <td>{employee.job}</td>
            <td>{formatDate(employee.admission_date)}</td>
            <td>{formatPhoneNumber(employee.phone)}</td>
            <td>
              <IconButton
                isOpen={expandedRows[index]}
                onClick={() => toggleExpand(index)}
              />
            </td>
          </tr>
          {expandedRows[index] && (
            <tr>
              <td colSpan={6} style={{ padding: 0 }}>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: 10,
                  }}
                >
                  <div
                    style={{ display: 'flex', justifyContent: 'space-around' }}
                  >
                    <div>
                      <b>Cargo:</b>
                    </div>
                    <div>{employee.job}</div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      marginTop: 6,
                    }}
                  >
                    <div>
                      <b>Data de admissão:</b>
                    </div>
                    <div>{formatPhoneNumber(employee.phone)}</div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      marginTop: 6,
                    }}
                  >
                    <div>
                      <b>Telefone:</b>
                    </div>
                    <div>{formatPhoneNumber(employee.phone)}</div>
                  </div>
                </div>
              </td>
            </tr>
          )}
        </React.Fragment>
      ))}
    </tbody>
  );
}