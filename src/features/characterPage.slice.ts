import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ICharacterPageInitialState } from './characterPage.interface'

const namespace = 'character'

const initialState: ICharacterPageInitialState = {
  character: null,
  episodes: [],
  loadingCharacter: true,
  loadingEpisodes: true,
}

interface IFetchCharacterByIdData {
  id: string
}

export const fetchCharacterById = createAsyncThunk(
  `${namespace}/fetchCharacterByID`,
  async (data: IFetchCharacterByIdData) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${data.id}`)
    if (response.ok) return await response.json()
    else throw new Error()
  }
)

interface IFetchEpisodesData {
  ids: string[]
}
export const fetchEpisodes = createAsyncThunk(
  `${namespace}/fetchEpisodes`,
  async (data: IFetchEpisodesData) => {
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${data.ids}`)
    if (response.ok) return await response.json()
    else throw new Error()
  }
)

const characterPage = createSlice({
  name: namespace,
  initialState,
  reducers: {
    resetCharacterPageState: (state) => {
      state.character = initialState.character
      state.episodes = initialState.episodes
      state.loadingCharacter = initialState.loadingCharacter
      state.loadingEpisodes = initialState.loadingEpisodes
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacterById.fulfilled, (state, action) => {
        state.character = action.payload
        state.loadingCharacter = false
      })
      .addCase(fetchCharacterById.pending, (state, action) => {
        state.loadingCharacter = true
      })
      .addCase(fetchCharacterById.rejected, (state, action) => {
        state.loadingCharacter = false
      })
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) state.episodes = action.payload
        else state.episodes = [action.payload]
        state.loadingEpisodes = false
      })
      .addCase(fetchEpisodes.pending, (state, action) => {
        state.loadingEpisodes = true
      })
      .addCase(fetchEpisodes.rejected, (state, action) => {
        state.loadingEpisodes = false
      })
  },
})

export const { resetCharacterPageState } = characterPage.actions
export default characterPage.reducer
