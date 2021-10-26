import { useAppDispatch, useAppSelector } from 'app/hooks'
import React from 'react'
import SearchBar from 'components/SearchBar'
import StatusSelector from 'components/StatusSelector'
import { CharacterStatus } from 'features/characterPage.interface'
import { fetchCharacters, resetHomepageState } from 'features/homepage.slice'
import { useHistory } from 'react-router'
import Character from 'components/Character'
import { CharactersContainer, Container, FiltersContainer, PageBackground } from './Homepage.styles'
import homepageBg from 'assets/images/homepageBg.jpg'

const Homepage = () => {
  const history = useHistory()
  const dispatch = useAppDispatch()
  const { charactersList } = useAppSelector((store) => store.homepageReducer)
  const [searchQuery, setSearchQuery] = React.useState('')
  const [characterStatus, setCharacterStatus] = React.useState(CharacterStatus.ALL)
  const timeoutID = React.useRef<NodeJS.Timeout>()

  const debounce = React.useCallback((fn: Function) => {
    if (timeoutID.current) clearTimeout(timeoutID.current)
    timeoutID.current = setTimeout(() => fn(), 300)
  }, [])

  React.useEffect(() => {
    dispatch(resetHomepageState())
    return () => {
      dispatch(resetHomepageState())
    }
  }, [dispatch])

  React.useEffect(() => {
    dispatch(fetchCharacters({ searchQuery, characterStatus }))
  }, [dispatch, searchQuery, characterStatus])

  const handleSearch = (value: string): void => {
    debounce(() => {
      setSearchQuery(value)
    })
  }

  const handleClick = (id: number) => (): void => {
    history.push(`/character/${id}`)
  }

  return (
    <PageBackground url={homepageBg}>
      <Container>
        <FiltersContainer>
          <div>
            <SearchBar onChange={(value) => handleSearch(value)} />
            <StatusSelector onChange={(value) => setCharacterStatus(value as CharacterStatus)} />
          </div>
        </FiltersContainer>
        <CharactersContainer>
          {charactersList.map((character) => (
            <Character
              key={character.id}
              character={character}
              onClick={handleClick(character.id)}
            />
          ))}
        </CharactersContainer>
      </Container>
    </PageBackground>
  )
}

export default Homepage
