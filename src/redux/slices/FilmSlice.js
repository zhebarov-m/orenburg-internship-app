import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filmId: "",
  filmData: {},
  backImage: "",
};

export const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    setFilmId: (state, action) => {
      state.filmId = action.payload;
    },
    setFilmData: (state, action) => {
      state.filmData = action.payload;
    },
    setBackImage: (state, action) => {
      state.backImage = action.payload;
    },
  },
});

export const { setFilmId, setFilmData, setBackImage } = filmSlice.actions;

export default filmSlice.reducer;
