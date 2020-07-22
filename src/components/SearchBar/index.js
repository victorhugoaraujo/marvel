import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { SearchInput, SearchIcon } from './styles';
// import { searchCharactersByName } from '../../actions/searchCharacters';
import { searchCharactersByName } from '../../actions/characters';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchCharactersByName(query));
  };

  useEffect(() => {
    if (query.length > 0) {
      dispatch(searchCharactersByName(query));
    }
  }, [dispatch, query]);

  return (
    <>
      {/* <SearchIcon>
        <FiSearch />
      </SearchIcon> */}
      {/* <form onSubmit={handleSubmit}> */}
      <input
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Buscar.."
      />
      {/* <button type="submit">Buscar</button> */}
      {/* </form> */}
    </>
  );
};
export default SearchBar;
