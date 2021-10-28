import { useAppDispatch, useAppSelector } from 'app/hooks'
import React from 'react'
import SearchBar from 'components/SearchBar'
import StatusSelector from 'components/StatusSelector'
import { CharacterStatus } from 'features/characterPage.interface'
import {
  fetchCharacters,
  resetHomepageState,
  setSearchQuery,
  setCharacterStatus,
  setPage,
} from 'features/homepage.slice'
import { useHistory } from 'react-router'
import Character from 'components/Character'
import {
  CharactersContainer,
  Container,
  Counter,
  FiltersContainer,
  Pagination,
  PaginationBtn,
} from './Homepage.styles'
import homepageBg from 'assets/images/homepageBg.jpg'
import PageBackground from 'components/PageBackground'
import CharacterPlaceholder from 'components/Character/CharacterPlaceholder'
import { ArrowIcon } from 'assets/svg'

const Homepage = () => {
  const history = useHistory()
  const dispatch = useAppDispatch()
  const {
    searchQuery,
    characterStatus,
    charactersList,
    loading,
    page,
    pagination: { count, pages },
  } = useAppSelector((store) => store.homepageReducer)
  const timeoutID = React.useRef<NodeJS.Timeout>()

  const debounce = React.useCallback((fn: Function) => {
    if (timeoutID.current) clearTimeout(timeoutID.current)
    timeoutID.current = setTimeout(() => fn(), 300)
  }, [])

  React.useEffect(() => {
    return () => {
      dispatch(resetHomepageState())
    }
  }, [dispatch])

  React.useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])

  const handleQueryChange = (value: string): void => {
    dispatch(setPage(1))
    dispatch(setSearchQuery(value))
    debounce(() => dispatch(fetchCharacters()))
  }

  const handleStatusChange = (value: CharacterStatus): void => {
    dispatch(setPage(1))
    dispatch(setCharacterStatus(value))
    dispatch(fetchCharacters())
  }

  const handleCharacterClick = (id: number) => (): void => {
    history.push(`/character/${id}`)
  }

  const handlePageChange = (direction: number) => (): void => {
    dispatch(setPage(page + direction))
    dispatch(fetchCharacters())
  }

  return (
    <PageBackground url={homepageBg}>
      <Container>
        <FiltersContainer>
          <div>
            <SearchBar value={searchQuery} onChange={(value) => handleQueryChange(value)} />
            <StatusSelector
              value={characterStatus}
              onChange={(value) => handleStatusChange(value as CharacterStatus)}
            />
          </div>
        </FiltersContainer>

        <Pagination>
          <PaginationBtn onClick={handlePageChange(-1)} disabled={page === 1 || !pages || loading}>
            <ArrowIcon style={{ transform: 'rotate(-90deg)' }} /> <span>Prev</span>
          </PaginationBtn>
          <Counter>
            <span>Characters {count}</span>
            <span>|</span>
            <span>
              Page {page} of {pages}
            </span>
          </Counter>
          <PaginationBtn
            onClick={handlePageChange(1)}
            disabled={page === pages || !pages || loading}
          >
            <span>Next</span> <ArrowIcon style={{ transform: 'rotate(90deg)' }} />
          </PaginationBtn>
        </Pagination>

        <CharactersContainer>
          {charactersList.map((character) => (
            <Character
              key={character.id}
              character={character}
              onClick={handleCharacterClick(character.id)}
            />
          ))}
          {loading &&
            Array(20)
              .fill(0)
              .map((_, index) => <CharacterPlaceholder key={index} />)}
        </CharactersContainer>
      </Container>
    </PageBackground>
  )
}

export default Homepage
