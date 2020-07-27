import styled from 'styled-components';

export const SubTitle = styled.h2`
  color: ${(props) => (props.color ? props.color : '#fff')};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '16px')};
  font-weight: 300;
`;
