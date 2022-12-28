import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
  }

  input, button {
    outline: none;
  }

  a {
    min-width: max-content;
    padding: 10px;
    color: #fff;
    text-decoration: none;
    border-bottom: 1px solid #fff;

    &:hover {
      background-color: #fff;

      color: #048c66;
    }
  }
`

export { GlobalStyle }