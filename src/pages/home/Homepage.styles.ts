import styled from 'styled-components'
import { media } from 'utils'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const FiltersContainer = styled.div`
  background: ${({ theme }) => theme.colors.main};
  position: fixed;
  top: 200;
  left: 0;
  width: 100%;
  padding: 30px 0;

  ${media('md')} {
    top: 250px;
  }

  div {
    max-width: 1000px;
    padding: 0 15px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 15px;

    ${media('md')} {
      grid-template-columns: 2fr 1fr;
    }
  }
`

export const CharactersContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 180px 15px 30px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;

  ${media('md')} {
    padding-top: 130px;
    grid-template-columns: repeat(3, 1fr);
  }

  ${media('lg')} {
    grid-template-columns: repeat(5, 1fr);
  }
`

export const PageBackground = styled.div<{ url: string }>`
  background: rgba(0, 0, 0, 0.8);
  min-height: 100vh;
  padding-top: 200px;

  ${media('md')} {
    padding-top: 250px;
  }

  ::before {
    content: '';
    display: block;
    position: fixed;
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
