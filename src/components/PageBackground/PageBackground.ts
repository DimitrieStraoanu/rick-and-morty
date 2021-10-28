import styled from 'styled-components'
import { media } from 'utils'

const PageBackground = styled.div<{ url: string }>`
  background: rgba(0, 0, 0, 0.85);
  min-height: 100vh;
  padding-top: 200px;
  padding-bottom: 30px;
  position: relative;

  ${media('md')} {
    padding-top: 250px;
  }

  ::before {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.url});
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }
`

export default PageBackground
