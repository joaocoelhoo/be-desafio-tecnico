import React from 'react';

const HEADERS = [
  { name: 'Foto', className: 'none' },
  { name: 'Nome', className: 'none' },
  { name: 'Cargo', className: 'none' },
  { name: 'Data de Admissão', className: 'none' },
  { name: 'Telefone', className: 'none' },
  { name: '.', className: 'hidded-colunm' },
];

export default function TableHeader() {
  return (
    <thead className="table-header">
      <tr>
        {HEADERS.map((item) => (
          <th className={item.className} key={item.name}>
            {item.name}
          </th>
        ))}
      </tr>
    </thead>
  );
}
