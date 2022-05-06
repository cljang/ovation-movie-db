export const appTitle = "Ovation Movie Database";
export const endpointMovieSearch = "https://api.themoviedb.org/3/movie/";
export const pathToPoster = "https://image.tmdb.org/t/p/w500/";
export const pathToBackdrop = "https://image.tmdb.org/t/p/original/";

// Available movie filters
export const movieFilters = [
  {
    text: "Popular",
    value: "popular"
  },
  {
    text: "Top Rated",
    value: "top_rated"
  },
  {
    text: "Upcoming",
    value: "upcoming"
  },
  {
    text: "Now Playing",
    value: "now_playing"
  },
]

// Main Navbar Links
export const navMainLinks = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Favourites",
    path: "/favourites"
  },
]

// Get localStorage favourites list as an array
export const localListName = "favouriteList";
export const getFavouritesList = () => {
  // Create an array of favourites and copy the local storage list if it exists
  const localListString = localStorage.getItem(localListName)
  let localListArr = [];
  if (localListString !== null && localListString !== "") {
    localListArr = JSON.parse(localListString);
  }

  return localListArr;
}
