export interface ICharacterPageInitialState {
  character: ICharacter | null
  episodes: IEpisode[]
  loadingCharacter: boolean
  loadingEpisodes: boolean
}

export interface ICharacter {
  id: number
  name: string
  status: CharacterStatus
  gender: Gender
  episode: string[]
  image: string
  location: { name: string }
  origin: { name: string }
}

export enum Gender {
  FEMALE = 'female',
  MALE = 'male',
  GENDERLESS = 'genderless',
  UNKNOWN = 'unknown',
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
