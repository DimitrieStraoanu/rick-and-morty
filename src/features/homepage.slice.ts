import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CharacterStatus } from './characterPage.interface'
import { IHomepageInitialState } from './homepage.interface'

const namespace = 'homepage'

const initialState: IHomepageInitialState = {
  charactersList: [],
  loading: true,
  pagination: {},
}

interface IFetchCharactersData {
  searchQuery?: string
  characterStatus?: CharacterStatus
}

export const fetchCharacters = createAsyncThunk(
  `${namespace}/fetchCharacters`,
  async (data?: IFetchCharactersData) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?name=${data ? data.searchQuery : ''}&status=${
        data ? data.characterStatus : ''
      }`
    )
    if (response.ok) return await response.json()
    else throw new Error()
  }
)

const homepage = createSlice({
  name: namespace,
  initialState,
  reducers: {
    resetHomepageState: (state) => {
      state.charactersList = initialState.charactersList
      state.loading = initialState.loading
      state.pagination = initialState.pagination
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.charactersList = action.payload.results
        state.pagination.count = action.payload.info.count
        state.pagination.next = action.payload.info.next
        state.loading = false
      })
      .addCase(fetchCharacters.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false
        state.charactersList = []
      })
  },
})

export const { resetHomepageState } = homepage.actions
export default homepage.reducer
