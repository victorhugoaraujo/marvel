import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  searchCharactersByName,
  clearSearchCharacter,
  addCharacterToList,
} from '../../actions/characters';
import { FiSearch } from 'react-icons/fi';
import {
  Container,
  SearchInput,
  SearchIcon,
  SearchContainer,
  SearchResultList,
  DescriptionContainer,
} from './styles';

import CharacterTitle from '../CharacterDetails/CharacterTitle';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const characters = useSelector((state) => state.characters.foundCharacters);
  const loading = useSelector((state) => state.characters.loading);
  const loadedCharacters = useSelector(
    (state) => state.characters.loadedCharacters
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length > 0) {
        dispatch(searchCharactersByName(query));
        return;
      }
      // dispatch(clearSearchCharacter());
    }, 1000);
    return () => clearTimeout(timer);
  }, [dispatch, query]);

  const handleAddCharacterToList = (character) => {
    console.log(character.id);
    const findCharacter =
      loadedCharacters &&
      loadedCharacters.find((item) => item.id === character.id);
    console.log(findCharacter);

    if (findCharacter) {
      return;
    }
    dispatch(addCharacterToList(character));
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
          placeholder="Buscar..."
          autoComplete="off"
        />
      </SearchContainer>
      {!loading && query.length > 0 && (
        <SearchResultList>
          {characters.map((character) => (
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
          ))}
        </SearchResultList>
      )}
    </Container>
  );
};
export default SearchBar;
