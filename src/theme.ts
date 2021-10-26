import { createGlobalStyle } from 'styled-components'

const theme = {
  colors: {
    main: '#01ADC9',
  },
  breakpoints: {
    lg: 1024,
    md: 768,
    sm: 375,
  },
}

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    box-sizing: border-box;
  }

  img {
    display: block;
  }
`

export default theme
