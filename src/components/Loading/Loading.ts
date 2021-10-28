import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`
const Loading = styled.div`
  margin: 10px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 4px solid white;
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  animation: ${spin} 0.3s linear infinite;
`

export default Loading
