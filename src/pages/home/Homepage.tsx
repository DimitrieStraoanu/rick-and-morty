import { useAppDispatch, useAppSelector } from 'app/hooks'
import React from 'react'
import SearchBar from 'components/SearchBar'
import StatusSelector from 'components/StatusSelector'
import { CharacterStatus } from 'features/character.interface'
import { fetchCharacters } from 'features/homepage.slice'
import { useHistory } from 'react-router'

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
    dispatch(fetchCharacters({ name: searchQuery, status: characterStatus }))
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
    <div>
      <SearchBar onChange={(value) => handleSearch(value)} />
      <StatusSelector onChange={(value) => setCharacterStatus(value as CharacterStatus)} />
      {charactersList.map((character) => (
        <div key={character.id} onClick={handleClick(character.id)}>
          {character.name}
        </div>
      ))}
    </div>
  )
}

export default Homepage
