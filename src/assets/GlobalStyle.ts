import { createGlobalStyle } from 'styled-components';
import { secondaryColor } from './variables';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    overflow-x: hidden;
    height: 100%;
    box-sizing: border-box;
    overflow-y: scroll;
    margin: 0;
    background-color: ${secondaryColor};
}

  a {
    text-decoration: none;
  }
  button {
    border-width: 0;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
  }
`;

export default GlobalStyle;
