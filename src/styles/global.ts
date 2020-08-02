import { createGlobalStyle } from 'styled-components';

import backgroundLogo from '../assets/background.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: url(${backgroundLogo}) no-repeat;
    background-size: 100%;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
