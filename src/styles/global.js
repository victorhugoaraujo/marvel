import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing:border-box;
  }

  body {
    background: #000;
    -webkit-font-smoothing: antialiased;
  }

  body, input,button {
    font-family: 'Gilroy';
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6{
    font-family: 'Gilroy';
    font-weight: 900;
    font-size: 32px;
    color: #313140;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer
  }
`;
