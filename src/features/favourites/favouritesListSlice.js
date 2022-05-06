import { createSlice } from "@reduxjs/toolkit";
import { localListName, getFavouritesList } from "../../global/globals";

const initialState = {
  value: getFavouritesList(),
}

export const favouritesListSlice = createSlice({
  name: "favouritesList",
  initialState,
  reducers: {
    // Take a movie object and add it to the favourites list
    addFavourite: (state, action) => {
      state.value = [...state.value, action.payload];
      localStorage.setItem(localListName, JSON.stringify(state.value))
    },
    // Take a move object and if filter it out of the favourites list
    removeFavourite: (state, action) => {
      state.value = state.value.filter((movie) => movie.id !== action.payload.id)
      localStorage.setItem(localListName, JSON.stringify(state.value))
    }
    
  }
})

export const { addFavourite, removeFavourite } = favouritesListSlice.actions;

const favouritesListReducer = favouritesListSlice.reducer;
export default favouritesListReducer;