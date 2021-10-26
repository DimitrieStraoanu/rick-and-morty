import { ICharacter } from './characterPage.interface'

interface IPagination {
  count?: number
  next?: string
}

export interface IHomepageInitialState {
  charactersList: ICharacter[]
  pagination: IPagination
  loading: boolean
}
