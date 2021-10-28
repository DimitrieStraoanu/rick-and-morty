import React from 'react'
import { Container } from './CharacterPlaceholder.styles'

const CharacterPlaceholder = () => {
  return (
    <Container>
      <span />
      <div>
        <span />
        <span />
      </div>
    </Container>
  )
}

export default React.memo(CharacterPlaceholder)
