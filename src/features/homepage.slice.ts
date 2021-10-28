import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'app/store'
import { CharacterStatus } from './characterPage.interface'
import { IHomepageInitialState } from './homepage.interface'

const namespace = 'homepage'

const initialState: IHomepageInitialState = {
  charactersList: [],
  loading: true,
  pagination: {},
  searchQuery: '',
  characterStatus: CharacterStatus.ALL,
  page: 1,
}

export const fetchCharacters = createAsyncThunk<any, void, { state: RootState }>(
  `${namespace}/fetchCharacters`,
  async (data, { getState }) => {
    const {
      homepageReducer: { searchQuery, characterStatus, page },
    } = getState()
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?name=${searchQuery}&status=${characterStatus}&page=${page}`
    )
    if (response.ok) return await response.json()
    else throw new Error()
  }
)

const homepage = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload
    },
    setSearchQuery: (state, { payload }) => {
      state.searchQuery = payload
    },
    setCharacterStatus: (state, { payload }) => {
      state.characterStatus = payload
    },
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
        state.pagination = action.payload.info
        state.loading = false
      })
      .addCase(fetchCharacters.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false
        state.charactersList = []
        state.pagination.count = 0
        state.pagination.pages = 0
        state.page = 0
      })
  },
})

export const { setCharacterStatus, setPage, setSearchQuery, resetHomepageState } = homepage.actions
export default homepage.reducer
