import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadCharacters, loadCharacterSeries } from '../../actions/characters';

const CharacterDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const formRef = useRef();

  const characters = useSelector((state) => state.characters.loadedCharacters);
  const series = useSelector((state) => state.characters.series);
  const loadingSeries = useSelector((state) => state.characters.loadingSeries);
  const characterDetails = characters.filter(
    (character) => character.id === parseInt(id)
  );

  const [charatersStored, setCharatersStored] = useState(
    JSON.parse(localStorage.getItem('@Marvel:character'))
  );
  const findCurrentCharacterAtLocalStore =
    charatersStored && charatersStored.find((item) => item.id === parseInt(id));
  const { realName, description } =
    !!findCurrentCharacterAtLocalStore && findCurrentCharacterAtLocalStore;

  useEffect(() => {
    if (characters.length <= 0) {
      dispatch(loadCharacters(id));
    }
    dispatch(loadCharacterSeries(id));
  }, [dispatch, id, characters]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const realName = formRef.current.realName.value;
    const description = formRef.current.description.value;
    let character = charatersStored || [];
    let editedInfo = {
      id: parseInt(id),
      realName,
      description,
    };
    if (findCurrentCharacterAtLocalStore) {
      for (var i in character) {
        if (character[i].id === parseInt(id)) {
          character[i] = editedInfo;
          break;
        }
      }
    } else {
      character = [...character, editedInfo];
    }
    localStorage.setItem('@Marvel:character', JSON.stringify(character));
    setCharatersStored(character);
  };

  return (
    <>
      <h1>Details</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label>Real Name</label>
        <input name="realName" type="text" />
        <label>Description</label>
        <input name="description" type="text" />
        <button type="submit">Salvar</button>
      </form>
      {characterDetails.map((info) => (
        <div key={info.id}>
          <p>{info.name}</p>
          <p>{realName}</p>
          <p>{description || info.description}</p>
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
