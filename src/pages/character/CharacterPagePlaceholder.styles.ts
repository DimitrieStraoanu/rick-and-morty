import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0% { opacity: 0.1 }
  50%   { opacity: 0.12 }
  100%   { opacity: 0.1 }
`

export const Container = styled.div`
  width: 300px;
  margin: 30px auto 0;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-name: ${pulse};

  & > span {
    :after {
      content: '';
      display: block;
      padding-bottom: 100%;
      background: #fff;
    }
  }

  div {
    span:first-of-type {
      width: 90%;
      display: block;
      height: 38px;
      background: #fff;
      border-radius: 50px;
      margin: 20px auto;
    }
    span {
      display: block;
      width: 60%;
      height: 16px;
      border-radius: 50px;
      background: #fff;
      margin: 10px auto;
    }
  }
`
