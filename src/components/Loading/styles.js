import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  place-content: center;
  margin: 20px;

  & .ai-spin {
    animation: ai-spin 1s infinite linear;
    color: #fff;
    font-size: 70px;
  }
  @keyframes ai-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`;
