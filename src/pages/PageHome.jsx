import { useEffect, useCallback } from "react"
import { endpointMovieSearch } from "../global/globals"
import { useSelector, useDispatch } from "react-redux"
import { setMovieList } from "../features/movieList/movieListSlice"
import { API_KEY } from "../global/api-key"
import MovieContainer from "../components/MovieContainer";
import MovieFilter from "../components/MovieFilter"

const PageHome = () => {
  
  // Movie Filter
  const selectedMovieFilter = useSelector((state) => state.movieFilter.value);

  const dispatch = useDispatch()

  // Fetch movies 
  const fetchMovies = useCallback(async () => {
    const res = await fetch(`${endpointMovieSearch}${selectedMovieFilter}?api_key=${API_KEY}`);
    const data = await res.json();
    const selectedMovies = data.results;
    dispatch(setMovieList(selectedMovies));
  },[selectedMovieFilter, dispatch])

  // Re-fetch movies if the selectedMovieFilter changes - this will also occur on page load
  useEffect(() => {
    fetchMovies();
  }, [selectedMovieFilter, fetchMovies])
  

  return (
      <section className="page-home">
          <h2>Home</h2>
          <MovieFilter />
          <MovieContainer />
      </section>
  );

};

export default PageHome;