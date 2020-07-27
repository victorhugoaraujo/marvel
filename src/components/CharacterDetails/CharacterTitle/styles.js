import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => (props.color ? props.color : '#fff')};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '20px')};
`;
