import React from 'react'
import { CharacterStatus } from 'features/character.interface'

interface IStatusSelectorProps {
  onChange: (value: string) => void
}

const StatusSelector = (props: IStatusSelectorProps) => {
  const { onChange } = props

  return (
    <select onChange={(e) => onChange(e.target.value)}>
      <option value={CharacterStatus.ALL}>All</option>
      <option value={CharacterStatus.ALIVE}>Alive</option>
      <option value={CharacterStatus.DEAD}>Dead</option>
      <option value={CharacterStatus.UNKNOWN}>Unknown</option>
    </select>
  )
}

export default React.memo(StatusSelector)
