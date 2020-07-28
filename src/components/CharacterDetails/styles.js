import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h1,
  h2,
  p {
    color: #fff;
  }
`;

export const Character = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  justify-content: flex-end;
  min-height: calc(100vh - 410px);
  background: ${(props) =>
    `linear-gradient(rgba(255,255,255,0), rgba(0,0,0,1)), url(${props.background}) no-repeat center`};
  background-size: cover;
  padding: 20px;
`;

export const Description = styled.p`
  font-size: 14px;
  max-width: 800px;
  margin-top: 40px;
`;

export const SeriesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const SeriesList = styled.ul`
  display: flex;
  overflow: auto;
  margin-top: 10px;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #7d7d7d;
    border-radius: 4px;
  }
`;

export const SeriesListItem = styled.li`
  flex: 0 0 auto;
  height: 175px;
  width: 125px;
  margin: 10px;
  background: ${(props) => `url(${props.backgroundSeries}) no-repeat center`};
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0px 0px 1px 0px rgba(255, 255, 255, 0.38);
`;

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 40px;
  background: #202020;
  border: none;
  color: #fff;
  border-top: 4px solid #ff0000;
  margin: 0 20px;
  & svg {
    margin-right: 5px;
  }
`;

export const EditCharacterForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
  max-width: 400px;

  & label {
    margin-bottom: 10px;
  }

  & input,
  & textarea {
    margin-bottom: 10px;
    padding: 10px;
    height: 35px;
    border: none;
  }
  & textarea {
    height: 70px;
  }
`;

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 40px;
  background: #fff;
  border: none;
  & svg {
    margin-right: 5px;
  }
`;
