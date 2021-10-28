import { CharacterStatus, ICharacter } from './characterPage.interface'

interface IPagination {
  pages?: number
  count?: number
  next?: string
  prev?: string
}

export interface IHomepageInitialState {
  charactersList: ICharacter[]
  pagination: IPagination
  loading: boolean
  searchQuery: string
  characterStatus: CharacterStatus
  page: number
}
