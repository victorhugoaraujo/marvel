import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchCharactersByName } from '../../actions/characters';
import { FiSearch } from 'react-icons/fi';
import { Container, SearchInput, SearchIcon } from './styles';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (query.length > 0) {
      dispatch(searchCharactersByName(query));
    }
  }, [dispatch, query]);

  return (
    <Container>
      <SearchIcon>
        <FiSearch />
      </SearchIcon>
      <SearchInput
        name="search"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Buscar..."
      />
    </Container>
  );
};
export default SearchBar;
