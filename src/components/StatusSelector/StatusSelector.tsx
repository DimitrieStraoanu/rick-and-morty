import React from 'react'
import { CharacterStatus } from 'features/characterPage.interface'
import { Container, Item, Options, Backdrop } from './StatusSelectorStyles'
import { ArrowIcon } from 'assets/svg'

interface IStatusSelectorProps {
  onChange: (value: string) => void
  value: CharacterStatus
}

const StatusSelector = (props: IStatusSelectorProps) => {
  const { onChange, value } = props
  const [showOptions, setShowOptions] = React.useState(false)

  const handleClick = (e: any) => {
    onChange(e.target.dataset.value)
    setShowOptions(false)
  }

  return (
    <>
      <Container>
        <span className={value ? 'withValue' : ''} onClick={() => setShowOptions(true)}>
          {value || 'Select status'} <ArrowIcon />
        </span>
        <Options className={showOptions ? 'active' : ''} onClick={handleClick}>
          <Item selected={value === CharacterStatus.ALL} data-value={''}>
            <em>None</em>
          </Item>
          <Item selected={value === CharacterStatus.ALIVE} data-value={CharacterStatus.ALIVE}>
            Alive
          </Item>
          <Item selected={value === CharacterStatus.DEAD} data-value={CharacterStatus.DEAD}>
            Dead
          </Item>
          <Item selected={value === CharacterStatus.UNKNOWN} data-value={CharacterStatus.UNKNOWN}>
            Unknown
          </Item>
        </Options>
      </Container>
      <Backdrop className={showOptions ? 'active' : ''} onClick={() => setShowOptions(false)} />
    </>
  )
}

export default React.memo(StatusSelector)
