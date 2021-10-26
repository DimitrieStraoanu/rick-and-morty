export interface ICharacterPageInitialState {
  character: ICharacter | null
  episodes: IEpisode[]
  loading: boolean
}

export interface ICharacter {
  id: number
  name: string
  status: CharacterStatus
  gender: string
  episode: string[]
  image: string
}

export enum CharacterStatus {
  ALL = '',
  ALIVE = 'alive',
  DEAD = 'dead',
  UNKNOWN = 'unknown',
}

interface IEpisode {
  id: number
  name: string
}
