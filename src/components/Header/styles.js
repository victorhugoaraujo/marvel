import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const Logo = styled.svg`
  width: 375px;
  height: 32px;
  & path {
    fill: #ed1d24;
  }
  @media (min-width: 800px) {
    height: 64px;
  }
`;
