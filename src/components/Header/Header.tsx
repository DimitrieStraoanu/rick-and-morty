import React from 'react'
import logo from 'assets/images/logo.webp'
import { Container, Logo } from './Header.styles'

const Header = () => {
  return (
    <Container>
      <Logo src={logo} alt="Rick and Morty" />
    </Container>
  )
}

export default React.memo(Header)
