import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme.primary};
  }

  body {
    background: ${(props) => props.theme.background};
    -webkit-font-smoothing: antialiased;
  }

  input, textarea, button, body {
    font-family: ${(props) => props.theme['font-text']};
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    border: 0;
    outline: 0;
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme['font-header']};
    font-weight: 700;
  }
`;
