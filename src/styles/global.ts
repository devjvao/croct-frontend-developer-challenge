import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-size: 62.5%;
    display: grid;
    place-items: center;
    height: 100%;
    font-family: Inter, sans-serif;
  }
`

export default GlobalStyles
