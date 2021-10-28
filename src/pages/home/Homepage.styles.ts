import styled from 'styled-components'
import { media } from 'utils'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 155px;

  ${media('md')} {
    padding-top: 100px;
  }
`
export const FiltersContainer = styled.div`
  background: ${({ theme }) => theme.colors.main};
  position: fixed;
  top: 200px;
  left: 0;
  width: 100%;
  padding: 30px 0;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
  z-index: 1;

  ${media('md')} {
    top: 250px;
  }

  & > div {
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

export const Counter = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  span {
    margin: 0 10px;
  }

  span:first-of-type {
    display: none;
  }
  span:nth-of-type(2) {
    display: none;
  }

  ${media('md')} {
    span:first-of-type {
      display: inline;
    }
    span:nth-of-type(2) {
      display: inline;
    }
  }
`

export const CharactersContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 30px auto 0;
  padding: 0 15px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;

  ${media('md')} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${media('lg')} {
    grid-template-columns: repeat(5, 1fr);
  }
`
export const PaginationBtn = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;
  padding: 0 15px;
  display: flex;
  align-items: center;

  :disabled {
    opacity: 0.2;
  }

  svg {
    width: 15px;
  }

  span {
    margin: 5px;
  }
`

export const Pagination = styled.div`
  color: #fff;
  max-width: 1000px;
  margin: 30px auto 0;
  width: 100%;
  padding: 0 15px;
  display: flex;
`
