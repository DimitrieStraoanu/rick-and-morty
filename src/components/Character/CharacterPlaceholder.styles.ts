import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0% { opacity: 0.1 }
  50%   { opacity: 0.12 }
  100%   { opacity: 0.1 }
`

export const Container = styled.div`
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-name: ${pulse};

  & > span {
    width: 100%;

    :after {
      content: '';
      display: block;
      padding-bottom: 100%;
      background: #fff;
    }
  }

  div {
    padding: 10px 10px 15px;
  }

  div span {
    width: 90%;
    display: block;
    height: 18px;
    background: #fff;
    border-radius: 20px;
    margin-bottom: 5px;
  }

  div span:last-of-type {
    width: 70%;
  }
`
