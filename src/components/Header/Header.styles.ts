import styled from 'styled-components'
import { media } from 'utils'

export const Container = styled.div`
  height: 200px;
  background: black;
  position: fixed;
  width: 100%;

  ${media('md')} {
    height: 250px;
  }
`

export const Logo = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  padding: 30px;
  margin: 0 auto;
`
