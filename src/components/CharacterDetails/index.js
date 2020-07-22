import React from 'react';
import { Header } from '../Header';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CharacterDetails = () => {
  const { id } = useParams();

  const character = useSelector((state) =>
    state.characters.characters.filter(
      (character) => character.id === parseInt(`${id}`)
    )
  );

  return (
    <>
      <h1>Details</h1>
      {character.map((info) => (
        <div key={info.id}>
          <p>{info.name}</p>
          <ul>
            {info.series.items.map((serie) => (
              <li key={serie.name}>{serie.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default CharacterDetails;
