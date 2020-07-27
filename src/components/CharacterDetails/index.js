import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadCharacters, loadCharacterSeries } from '../../actions/characters';
import Loading from '../Loading';
import { splitName } from '../../utils/splitName';

import {
  Container,
  Character,
  Description,
  SeriesContainer,
  SeriesList,
  SeriesListItem,
} from './styles';

import CharacterTitle from '../CharacterDetails/CharacterTitle';
import CharacterSubTitle from '../CharacterDetails/CharacterSubtitle';

const CharacterDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const formRef = useRef();

  const characters = useSelector((state) => state.characters.loadedCharacters);
  const loading = useSelector((state) => state.characters.loading);
  const series = useSelector((state) => state.characters.series);
  const loadingSeries = useSelector((state) => state.characters.loadingSeries);
  const [formToggle, setFormToggle] = useState(false);

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
    <Container>
      {!loading ? (
        <>
          {characterDetails.map((info) => (
            <Character
              key={info.id}
              background={`${info.thumbnail.path}.${info.thumbnail.extension}`}
            >
              <CharacterSubTitle>
                {realName || splitName(info.name)[1]}
              </CharacterSubTitle>
              <CharacterTitle fontSize={40}>
                {splitName(info.name)[0] || info.name}
              </CharacterTitle>
              <Description>{description || info.description}</Description>
              <button onClick={() => setFormToggle(!formToggle)}>
                Edit Profile
              </button>

              {formToggle && (
                <form ref={formRef} onSubmit={handleSubmit}>
                  <label>Real Name</label>
                  <input name="realName" type="text" />
                  <label>Description</label>
                  <input name="description" type="text" />
                  <button type="submit">Salvar</button>
                </form>
              )}
            </Character>
          ))}

          {!loadingSeries ? (
            <SeriesContainer>
              <p>Series</p>
              {series.length > 0 ? (
                <SeriesList>
                  {series.map((serie) => (
                    <SeriesListItem
                      backgroundSeries={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                      key={serie.id}
                    ></SeriesListItem>
                  ))}
                </SeriesList>
              ) : (
                <p>Nāo foi localizado nenhuma série!</p>
              )}
            </SeriesContainer>
          ) : (
            <Loading />
          )}
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default CharacterDetails;
