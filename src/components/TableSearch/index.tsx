import React from 'react';
import SearchInput from '../SearchInput';
import './TableSearch.css';

type SearchInputProps = {
  onSearch?: (searchString: string) => void;
};

export default function TableSearch({ onSearch }: SearchInputProps) {
  return (
    <div className="table-search-flex-container">
      <p>Funcionários</p>
      <SearchInput onSearch={onSearch} />
    </div>
  );
}
