import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #000;

  & h1,
  h2,
  p {
    color: #fff;
  }
`;

export const Character = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 595px;
  background: ${(props) =>
    `linear-gradient(rgba(255,255,255,0), rgba(0,0,0,1)), url(${props.background}) no-repeat center`};
  background-size: cover;
  padding: 20px;
`;

export const CharacterName = styled.h1`
  font-size: 40px;
`;

export const RealName = styled.h2`
  font-size: 16px;
  font-weight: 300;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 40px;
`;

export const SeriesContainer = styled.div`
  padding: 20px;
`;
export const SeriesList = styled.ul`
  display: flex;
  overflow: auto;
  margin-top: 10px;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #7d7d7d;
    border-radius: 4px;
  }
`;

export const SeriesListItem = styled.li`
  flex: 0 0 auto;
  height: 150px;
  width: 100px;
  margin: 10px;
  background: ${(props) => `url(${props.backgroundSeries}) no-repeat center`};
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0px 0px 1px 0px rgba(255, 255, 255, 0.38);
`;
