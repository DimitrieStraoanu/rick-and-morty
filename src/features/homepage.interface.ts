import { ICharacter } from './character.interface'

interface IPagination {
  count?: number
  next?: string
}

export interface IHomepageInitialState {
  charactersList: ICharacter[]
  pagination: IPagination
  loading: boolean
}
