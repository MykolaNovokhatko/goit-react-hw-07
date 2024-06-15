import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSearch = event => {
    dispatch(setSearch(event.target.value));
  };

  return (
    <div className={css.searchStyle}>
      <label htmlFor="search">Find contacts by name:</label>
      <input
        type="text"
        id="search"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
