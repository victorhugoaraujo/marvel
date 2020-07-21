import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCharacters } from '../../actions/characters';

const Home = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(loadCharacters());
  }, [dispatch]);

  console.log(characters);

  return <h1>oi</h1>;
};

export default Home;
