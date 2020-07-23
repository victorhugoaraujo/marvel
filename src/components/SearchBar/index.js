import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchCharactersByName } from '../../actions/characters';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

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
      <input
        name="search"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Buscar..."
      />
    </>
  );
};
export default SearchBar;
