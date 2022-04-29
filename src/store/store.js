import { configureStore } from "@reduxjs/toolkit";
import navOpenReducer from "../features/navOpen/navOpenSlice";
import movieFilterReducer from "../features/movieFilter/movieFilterSlice";
import movieListReducer from "../features/movieList/movieListSlice"

export const store = configureStore({
  reducer: {
    navOpen: navOpenReducer,
    movieFilter: movieFilterReducer,
    movieList: movieListReducer,
  }
})