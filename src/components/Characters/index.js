import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCharacters } from '../../actions/characters';
import { Link } from 'react-router-dom';

const Characters = () => {
  const dispatch = useDispatch();
  const characters = useSelector(
    (state) => state.characters.searchCharacters || state.characters.characters
  );
  const loading = useSelector((state) => state.characters.loading);

  useEffect(() => {
    dispatch(loadCharacters());
  }, [dispatch]);

  return (
    <ul>
      {!loading &&
        characters.map((character) => (
          <li key={character.id}>
            <Link to={`/details/${character.id}`}>
              <p>{character.name}</p>
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={`Marvel hero ${character.name}`}
              />
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default Characters;
