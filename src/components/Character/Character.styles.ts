import styled from 'styled-components'

export const Container = styled.div`
  cursor: pointer;
  color: #fff;

  div:first-of-type {
    position: relative;

    :after {
      content: '';
      display: block;
      padding-bottom: 100%;
      background: rgba(255, 255, 255, 0.1);
    }
  }

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    transition: all 0.2s ease-out;
  }

  &:hover img {
    transform: scale(1.1);
  }

  div:last-of-type {
    padding: 10px 10px 15px;
  }

  span {
    display: block;
    text-transform: capitalize;
  }

  span:first-of-type {
    font-size: 18px;
    font-weight: 700;
  }

  span:last-of-type {
    font-size: 14px;
    color: gray;
  }
`
