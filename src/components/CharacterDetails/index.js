import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadCharacters, loadCharacterSeries } from '../../actions/characters';

const CharacterDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const character = useSelector((state) => state.characters.loadedCharacters);
  const series = useSelector((state) => state.characters.series);
  const loadingSeries = useSelector((state) => state.characters.loadingSeries);

  useEffect(() => {
    dispatch(loadCharacters(id));
    dispatch(loadCharacterSeries(id));
  }, [dispatch, id]);

  return (
    <>
      <h1>Details</h1>
      {character.map((info) => (
        <div key={info.id}>
          <p>{info.name}</p>
          <img
            src={`${info.thumbnail.path}.${info.thumbnail.extension}`}
            alt={`Marvel hero ${info.name}`}
          />
          {!loadingSeries && (
            <ul>
              {series.map((serie) => (
                <li key={serie.title}>
                  {serie.title}
                  <img
                    src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                    alt={`Marvel serie ${info.title}`}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </>
  );
};

export default CharacterDetails;
