import React from 'react';
import Characters from '../../components/Characters';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

const Home = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <Characters />
    </>
  );
};

export default Home;
