import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
}

export const movieListSlice = createSlice({
  name: "movieList",
  initialState,
  reducers: {
    setMovieList: (state, action) => {
      state.value = [...action.payload];
    },
    clearMovieList: (state) => {
      state.value = [];
    },
    addMovieList: (state, action) => {
      state.value = [...state.value, ...action.payload];
    }
  }
})

export const {setMovieList, clearMovieList, addMovieList} = movieListSlice.actions;

const movieListReducer = movieListSlice.reducer;
export default movieListReducer;