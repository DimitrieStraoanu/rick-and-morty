import { useAppDispatch, useAppSelector } from 'app/hooks'
import PageBackground from 'components/PageBackground'
import {
  fetchCharacterById,
  fetchEpisodes,
  resetCharacterPageState,
} from 'features/characterPage.slice'
import React from 'react'
import { useParams } from 'react-router'
import characterPageBg from 'assets/images/characterPageBg.jpg'
import { Container, Episodes, GenderBadge } from './CharacterPage.styles'
import CharacterPagePlaceholder from './CharacterPagePlaceholder'
import Loading from 'components/Loading'

interface IParams {
  id: string
}

const CharacterPage = () => {
  const { id } = useParams<IParams>()
  const dispatch = useAppDispatch()
  const { character, episodes, loadingCharacter, loadingEpisodes } = useAppSelector(
    (state) => state.characterReducer
  )

  React.useEffect(() => {
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
    <PageBackground url={characterPageBg}>
      {character && (
        <Container>
          <img src={character.image} alt={character.name} />
          <span>{character.name}</span>
          <span>Status: {character?.status}</span>
          <span>
            Gender:{' '}
            <GenderBadge className={character.gender.toLowerCase()}>{character.gender}</GenderBadge>
          </span>
          <span>Origin: {character.origin.name}</span>
          <span>Location: {character.location.name}</span>

          <Episodes>
            <span>Episodes</span>
            <ul>
              {episodes.map((episode) => (
                <li key={episode.id}>{episode.name}</li>
              ))}
            </ul>
            {loadingEpisodes && <Loading />}
          </Episodes>
        </Container>
      )}
      {loadingCharacter && <CharacterPagePlaceholder />}
    </PageBackground>
  )
}

export default CharacterPage
