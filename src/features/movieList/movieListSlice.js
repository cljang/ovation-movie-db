import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
}

export const movieListSlice = createSlice({
  name: "movieList",
  initialState,
  reducers: {
    setMovieList: (state, action) => {
      state.value = action.payload;
    },
    clearMovieList: (state) => {
      state.value = [];
    },
    pushMovie: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    popMovie: (state) => {
      state.value = state.value.slice(0,-1)
    }
  }
})

export const {setMovieList, clearMovieList, pushMovie, popMovie} = movieListSlice.actions;

const movieListReducer = movieListSlice.reducer;
export default movieListReducer;