import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCharacters } from '../../actions/characters';
import { Link } from 'react-router-dom';

import { CharacterList, CharacterItem, CharacterName } from './styles';

const Characters = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.loadedCharacters);
  const loading = useSelector((state) => state.characters.loading);

  useEffect(() => {
    dispatch(loadCharacters());
  }, [dispatch]);

  return (
    <CharacterList>
      {!loading &&
        characters.map((character) => (
          <CharacterItem
            background={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            key={character.id}
          >
            <Link
              data-testid="character-image"
              to={`/character/${character.id}`}
            >
              <CharacterName data-testid="character-name">
                {character.name}
              </CharacterName>
            </Link>
          </CharacterItem>
        ))}
    </CharacterList>
  );
};

export default Characters;
