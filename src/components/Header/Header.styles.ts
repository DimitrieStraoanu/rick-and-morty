import styled from 'styled-components'
import { media } from 'utils'

export const Container = styled.div`
  height: 200px;
  background: black;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  svg {
    padding: 15px;
    width: 400px;
  }

  ${media('md')} {
    height: 250px;
    svg {
      width: 600px;
    }
  }
`
