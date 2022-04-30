import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valid_values: [
    "popular",
    "top_rated",
    "upcoming",
    "now_playing"
  ],
  value: "popular",
}

export const movieFilterSlice = createSlice({
  name: "movieFilter",
  initialState,
  reducers: {
    setMovieFilter: (state, action) => {
      if (state.valid_values.includes(action.payload)) {
        state.value = action.payload;
      }
    },
    
  }
})

export const {setMovieFilter} = movieFilterSlice.actions;

const movieFilterReducer = movieFilterSlice.reducer;
export default movieFilterReducer;