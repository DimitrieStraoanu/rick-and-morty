import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CharacterStatus } from './character.interface'
import { IHomepageInitialState } from './homepage.interface'

const name = 'homepage'

const initialState: IHomepageInitialState = {
  charactersList: [],
  loading: true,
  pagination: {},
}

interface IFetchCharactersData {
  name?: string
  status?: CharacterStatus
}

export const fetchCharacters = createAsyncThunk(
  `${name}/fetchCharacters`,
  async (data?: IFetchCharactersData) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?name=${data ? data.name : ''}&status=${
        data ? data.status : ''
      }`
    )
    if (response.ok) return await response.json()
    else throw new Error()
  }
)

const homepage = createSlice({
  name,
  initialState,
  reducers: {},
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
      })
  },
})

export default homepage.reducer
