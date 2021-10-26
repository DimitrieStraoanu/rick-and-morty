import React from 'react'

interface ISearchBarProps {
  onChange: (value: string) => void
}

const SearchBar: React.FC<ISearchBarProps> = (props) => {
  const { onChange } = props

  return <input onChange={(e) => onChange(e.target.value)}></input>
}

export default React.memo(SearchBar)
