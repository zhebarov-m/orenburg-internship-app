import { configureStore } from '@reduxjs/toolkit'
import filmReducer from './slices/FilmSlice'

export const store = configureStore({
  reducer: {
    film: filmReducer,
  },
})