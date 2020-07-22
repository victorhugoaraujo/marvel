import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { SearchInput, SearchIcon } from './styles';
import { searchCharacter } from '../../actions/characters';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(query);
    dispatch(searchCharacter(query));
  };

  return (
    <>
      {/* <SearchIcon>
        <FiSearch />
      </SearchIcon> */}
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar.."
        />
        <button type="submit">Buscar</button>
      </form>
    </>
  );
};
export default SearchBar;
