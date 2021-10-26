import React from 'react'
import { StyledInput } from './SearchBar.styles'

interface ISearchBarProps {
  onChange: (value: string) => void
}

const SearchBar: React.FC<ISearchBarProps> = (props) => {
  const { onChange } = props

  return (
    <StyledInput
      onChange={(e) => onChange(e.target.value)}
      placeholder={'Search characters'}
    ></StyledInput>
  )
}

export default React.memo(SearchBar)
