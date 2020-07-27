import React from 'react';
import { Title } from './styles';

const CharacterTitle = ({ children, color, fontSize }) => {
  return (
    <Title color={color} fontSize={fontSize}>
      {children}
    </Title>
  );
};

export default CharacterTitle;
