import React from 'react';
import './SearchInput.css';
import SearchIcon from '../../assets/Default.png';

type SearchInputProps = {
  onSearch?: (searchString: string) => void;
};

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    onSearch?.(target.value);
  };

  return (
    <div className="input-group">
      <input
        type="text"
        id="search"
        placeholder="Pesquisar"
        onChange={handleChange}
      />
      <div className="input-group-append">
        <img className="input-group-text" src={SearchIcon} />
      </div>
    </div>
  );
};

export default SearchInput;
