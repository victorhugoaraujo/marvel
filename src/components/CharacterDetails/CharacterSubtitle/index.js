import React from 'react';
import { SubTitle } from './styles';

const CharacterSubTitle = ({ children, color, fontSize }) => {
  return (
    <SubTitle color={color} fontSize={fontSize}>
      {children}
    </SubTitle>
  );
};

export default CharacterSubTitle;
