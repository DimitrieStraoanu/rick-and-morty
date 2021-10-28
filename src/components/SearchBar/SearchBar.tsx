import React from 'react'
import { StyledInput } from './SearchBar.styles'

interface ISearchBarProps {
  onChange: (value: string) => void
  value: string
}

const SearchBar: React.FC<ISearchBarProps> = (props) => {
  const { onChange, value } = props

  return (
    <StyledInput
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={'Search for characters'}
    ></StyledInput>
  )
}

export default React.memo(SearchBar)
