import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import homepageReducer from 'features/homepage.slice'
export const store = configureStore({
  reducer: {
    homepageReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
