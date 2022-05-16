export const appTitle = "Ovation Movie Database";
export const endpointGetMovies = "https://api.themoviedb.org/3/movie/";
export const endpointSearchMovies = "https://api.themoviedb.org/3/search/movie";
export const pathToPoster = "https://image.tmdb.org/t/p/w500/";
export const pathToOriginalImage = "https://image.tmdb.org/t/p/original/";

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
