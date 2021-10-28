import React from 'react'
import { Container } from './Header.styles'
import { Logo } from 'assets/svg'

const Header = () => {
  return (
    <Container>
      <Logo />
    </Container>
  )
}

export default React.memo(Header)
