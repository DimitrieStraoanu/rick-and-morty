import React from 'react'
import { Container } from './CharacterPagePlaceholder.styles'

const CharacterPagePlaceholder = () => {
  return (
    <Container>
      <span />
      <div>
        <span />
        <span />
        <span />
      </div>
    </Container>
  )
}

export default React.memo(CharacterPagePlaceholder)
