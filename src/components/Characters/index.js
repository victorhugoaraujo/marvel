import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCharacters } from '../../actions/characters';
import { Link } from 'react-router-dom';
import { splitName } from '../../utils/splitName';

import { Container, CharacterList, CharacterItem } from './styles';
import Loading from '../Loading';

import CharacterSubTitle from '../CharacterDetails/CharacterSubtitle';
import CharacterTitle from '../CharacterDetails/CharacterTitle';

const Characters = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.loadedCharacters);
  const loading = useSelector((state) => state.characters.loading);

  useEffect(() => {
    if (characters.length > 0) {
      return;
    }
    dispatch(loadCharacters());
  }, [dispatch, characters]);

  return (
    <Container>
      {!loading ? (
        <CharacterList>
          {characters.map((character) => (
            <CharacterItem
              background={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              key={character.id}
            >
              <Link
                data-testid="character-image"
                to={`/character/${character.id}`}
              >
                <CharacterSubTitle>
                  {splitName(character.name)[1]}
                </CharacterSubTitle>
                <CharacterTitle data-testid="character-name">
                  {splitName(character.name)[0]}
                </CharacterTitle>
              </Link>
            </CharacterItem>
          ))}
        </CharacterList>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default Characters;
