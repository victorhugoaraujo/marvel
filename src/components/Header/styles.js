import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
  @media (min-width: 800px) {
    justify-content: space-between;
    flex-direction: row;
  }

  .logoContainer {
    flex: 1;
  }
  .searchBarContainer {
    flex: 2;
    @media (max-width: 800px) {
      width: 100vw;
    }
  }
`;

export const Logo = styled.svg`
  height: 64px;
  & path {
    fill: #ed1d24;
  }
  @media (max-width: 800px) {
    height: 32px;
    margin-bottom: 10px;
  }
`;
