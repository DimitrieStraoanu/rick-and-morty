import styled from 'styled-components'

export const StyledSelect = styled.select`
  font-size: 16px;
  padding: 10px;
  border: none;
  height: 40px;
`

export const Container = styled.div`
  background: #fff;
  position: relative;
  font-size: 16px;
  padding: 10px;
  height: 40px;

  & > span {
    cursor: pointer;
    color: grey;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &.withValue {
      text-transform: capitalize;
      color: inherit;
    }

    svg {
      transform: rotate(180deg);
      width: 15px;
      fill: grey;
    }
  }
`

export const Options = styled.div`
  background: #fff;
  visibility: hidden;
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  z-index: 10;

  display: flex;
  flex-direction: column;

  &.active {
    visibility: visible;
  }
`

export const Item = styled.span<{ selected: boolean }>`
  padding: 10px;
  cursor: pointer;
  background: ${({ selected, theme }) => (selected ? theme.colors.highlight : '')};

  :hover {
    background: ${({ theme }) => theme.colors.highlight};
  }
`

export const Backdrop = styled.div`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  cursor: pointer;

  &.active {
    visibility: visible;
  }
`
