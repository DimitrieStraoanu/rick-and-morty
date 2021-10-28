import { ICharacter } from 'features/characterPage.interface'
import React from 'react'
import { Container } from './Character.styles'

interface ICharacterProps {
  character: ICharacter
  onClick: () => void
}

const Character: React.FC<ICharacterProps> = (props) => {
  const { character, onClick } = props
  return (
    <Container className={character.status} onClick={onClick}>
      <div>
        <img src={character.image} alt={character.name} />
      </div>
      <div>
        <span>{character.name}</span>
        <span>{character.status}</span>
      </div>
    </Container>
  )
}

export default React.memo(Character)
