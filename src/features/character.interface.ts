export interface ICharacter {
  id: number
  name: string
  status: CharacterStatus
  gender: string
}

export enum CharacterStatus {
  ALL = '',
  ALIVE = 'alive',
  DEAD = 'dead',
  UNKNOWN = 'unknown',
}
