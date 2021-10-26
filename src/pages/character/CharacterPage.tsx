import { useAppDispatch, useAppSelector } from 'app/hooks'
import {
  fetchCharacterById,
  fetchEpisodes,
  resetCharacterPageState,
} from 'features/characterPage.slice'
import React from 'react'
import { useParams } from 'react-router'

interface IParams {
  id: string
}

const CharacterPage = () => {
  const { id } = useParams<IParams>()
  const dispatch = useAppDispatch()
  const { character, episodes } = useAppSelector((state) => state.characterReducer)

  React.useEffect(() => {
    dispatch(resetCharacterPageState())
    return () => {
      dispatch(resetCharacterPageState())
    }
  }, [dispatch])

  React.useEffect(() => {
    dispatch(fetchCharacterById({ id }))
  }, [dispatch, id])

  React.useEffect(() => {
    if (character) {
      const ids: string[] = []
      character.episode.forEach((url) => {
        const id = url.split('/').pop()
        if (id) ids.push(id)
      })
      if (ids.length > 0) dispatch(fetchEpisodes({ ids }))
    }
  }, [character, dispatch])

  return (
    <div>
      <div>Character: {character?.name}</div>
      <br />
      <div>Episodes:</div>
      <ol>
        {episodes.map((episode) => (
          <li key={episode.id}>{episode.name}</li>
        ))}
      </ol>
    </div>
  )
}

export default CharacterPage
