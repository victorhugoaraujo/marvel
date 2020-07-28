import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RiEdit2Line } from 'react-icons/ri';
import { AiOutlineSave } from 'react-icons/ai';
import {
  loadCharacters,
  loadCharacterSeries,
  addCharacterToLocalStorage,
  loadCharacterFromLocalStorage,
} from '../../actions/characters';
import Loading from '../Loading';
import { splitName } from '../../utils/splitName';

import {
  Container,
  Character,
  Description,
  EditCharacterForm,
  PrimaryButton,
  SaveButton,
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

  const { loadedCharacters, storeCharacter } = useSelector(
    (state) => state.characters
  );
  const loading = useSelector((state) => state.characters.loading);
  const series = useSelector((state) => state.characters.series);
  const loadingSeries = useSelector((state) => state.characters.loadingSeries);
  const [formToggle, setFormToggle] = useState(false);

  const characterDetails = loadedCharacters.filter(
    (character) => character.id === parseInt(id)
  );

  const findCurrentCharacterAtLocalStore =
    storeCharacter && storeCharacter.find((item) => item.id === parseInt(id));

  const { realName, description } =
    !!findCurrentCharacterAtLocalStore && findCurrentCharacterAtLocalStore;

  useEffect(() => {
    dispatch(loadCharacters(id));
    dispatch(loadCharacterSeries(id));
    dispatch(loadCharacterFromLocalStorage());
  }, [dispatch, id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const realName =
      !!formRef.current.realName.value && formRef.current.realName.value;
    const description =
      !!formRef.current.description.value && formRef.current.description.value;
    let character = storeCharacter || [];
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
    dispatch(addCharacterToLocalStorage(character));
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
            </Character>
          ))}

          <PrimaryButton onClick={() => setFormToggle(!formToggle)}>
            <RiEdit2Line />
            Edit Profile
          </PrimaryButton>

          {formToggle && (
            <EditCharacterForm ref={formRef} onSubmit={handleSubmit}>
              <label>Real Name</label>
              <input
                name="realName"
                type="text"
                autoComplete="off"
                placeholder="Ex: Peter Parker"
              />
              <label>Description</label>
              <textarea
                name="description"
                type="text"
                autoComplete="off"
                placeholder="Ex: In the stories, Spider-Man is the alias of Peter Parker, "
              />
              <SaveButton type="submit">
                <AiOutlineSave />
                Salvar
              </SaveButton>
            </EditCharacterForm>
          )}

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
