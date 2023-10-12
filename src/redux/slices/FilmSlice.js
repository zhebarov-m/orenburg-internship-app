import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filmId: '',
  filmData: {},
}

export const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    setFilmId: (state, action) => {
        state.filmId = action.payload
    },
    setFilmData: (state, action) => {
        state.filmData = action.payload
    }
  },
})

export const { setFilmId, setFilmData } = filmSlice.actions

export default filmSlice.reducer