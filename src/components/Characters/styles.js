import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
`;

export const CharacterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
`;

export const CharacterItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  box-shadow: 5px 5px 7px 0px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 10px;
  background: ${(props) =>
    `linear-gradient(rgba(255,255,255,0), rgba(0,0,0,0.6)), url(${props.background}) no-repeat center`};
  width: 200px;
  height: 300px;
  background-size: cover;
  @media (min-width: 800px) {
    max-width: 700px;
    max-height: 500px;
  }
`;
