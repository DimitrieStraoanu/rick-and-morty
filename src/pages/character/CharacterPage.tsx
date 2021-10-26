import React from 'react'
import { useParams } from 'react-router'

const CharacterPage = () => {
  const id = useParams<{ id: string }>()
  return <div>Character ID: {id}</div>
}

export default CharacterPage
