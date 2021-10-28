import { createGlobalStyle } from 'styled-components'

const theme = {
  colors: {
    main: '#12B0C8',
    typography: '#333333',
    highlight: '#e8e8e8',
  },
  breakpoints: {
    lg: 1024,
    md: 768,
    sm: 375,
  },
}

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.typography};
    background: black;
  }

  *:focus{
    outline: none;
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }

  img {
    display: block;
  }
`

export default theme
