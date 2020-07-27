import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  searchCharactersByName,
  clearSearchCharacter,
  addCharacterToList,
} from '../../actions/characters';
import { FiSearch } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

import {
  Container,
  SearchInput,
  SearchIcon,
  SearchContainer,
  SearchResultList,
  DescriptionContainer,
  ClearQuery,
} from './styles';

import CharacterTitle from '../CharacterDetails/CharacterTitle';
import Loading from '../Loading';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [inputFocus, setInputFocus] = useState(false);
  const characters = useSelector((state) => state.characters.foundCharacters);
  const loadingSearch = useSelector((state) => state.characters.loadingSearch);
  const loadedCharacters = useSelector(
    (state) => state.characters.loadedCharacters
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // const timer = setTimeout(() => {
    if (query.length > 0) {
      dispatch(searchCharactersByName(query));
      return;
    }
    // }, 1000);
    dispatch(clearSearchCharacter());
    // return () => clearTimeout(timer);
  }, [dispatch, query]);

  const handleAddCharacterToList = (character) => {
    setInputFocus(false);
    const findCharacter =
      loadedCharacters &&
      loadedCharacters.find((item) => item.id === character.id);

    if (findCharacter) {
      return;
    }
    dispatch(addCharacterToList(character));
  };

  const handleClearQuery = () => {
    setQuery('');
    dispatch(clearSearchCharacter());
  };

  return (
    <Container>
      <SearchContainer>
        <SearchIcon>
          <FiSearch />
        </SearchIcon>
        <SearchInput
          name="search"
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setInputFocus(true)}
          value={query}
          placeholder="Buscar..."
          autoComplete="off"
        />
        {query && (
          <ClearQuery onClick={handleClearQuery}>
            <MdClose />
          </ClearQuery>
        )}
      </SearchContainer>
      {query && inputFocus && (
        <SearchResultList>
          {loadingSearch ? (
            <Loading />
          ) : (
            characters.map((character) => (
              <li key={character.id}>
                <img
                  alt={`Marvel character named ${character.name}`}
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                />
                <DescriptionContainer>
                  <Link
                    data-testid="character-image"
                    onClick={() => handleAddCharacterToList(character)}
                    to={`/character/${character.id}`}
                  >
                    <CharacterTitle>{character.name}</CharacterTitle>
                    <span>{character.description}</span>
                  </Link>
                </DescriptionContainer>
              </li>
            ))
          )}
        </SearchResultList>
      )}
    </Container>
  );
};
export default SearchBar;
