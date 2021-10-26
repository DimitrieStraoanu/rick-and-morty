import React from 'react'
import { CharacterStatus } from 'features/characterPage.interface'
import { StyledSelect } from './StatusSelectorStyles'

interface IStatusSelectorProps {
  onChange: (value: string) => void
}

const StatusSelector = (props: IStatusSelectorProps) => {
  const { onChange } = props

  return (
    <StyledSelect onChange={(e) => onChange(e.target.value)}>
      <option value={CharacterStatus.ALL}>Select an option</option>
      <option value={CharacterStatus.ALIVE}>Alive</option>
      <option value={CharacterStatus.DEAD}>Dead</option>
      <option value={CharacterStatus.UNKNOWN}>Unknown</option>
    </StyledSelect>
  )
}

export default React.memo(StatusSelector)
