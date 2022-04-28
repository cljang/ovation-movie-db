import { useState, useEffect } from "react"
import { endpointMovieSearch } from "../global/globals"
import { useSelector, useDispatch } from "react-redux"
import { setMovieFilter } from "../features/movieFilter/movieFilterSlice"
import { API_KEY } from "../global/api-key"
import Movies from "../components/Movies";

const PageHome = () => {
  
  const movieFilter = useSelector((state) => state.movieFilter.value);
  const validMovieFilters = useSelector((state) => state.movieFilter.valid_values)
  const dispatch = useDispatch()

  // Rendered Movie List
  // const [moviesData, setMoviesData] = useState(false);

  // Fetch movies 
  // const fetchMovies = async () => {
  //   // const res = await fetch(`${endpointMovieSearch}${movieFilter}?api_key=${API_KEY}`);
  //   const res = await fetch(`${endpointMovieSearch}popular?api_key=${API_KEY}`);
  //   // console.log(`${endpointMovieSearch}${movieFilter}?api_key=${API_KEY}`);
  //   const data = await res.json();
  //   const selectedMovies = data.results.splice(0, 15);
  //   setMoviesData(selectedMovies);
  // }

  // // Fetch movies on mount
  // useEffect(() => {
  //   fetchMovies();
  // },[])

  return (
      <section className="page-home">
          <h2>Home</h2>
          <h3>{movieFilter}</h3>
          {validMovieFilters.map((filter) => {
            return <button key={filter} onClick={() => {dispatch(setMovieFilter(filter))}}>{filter}</button>
          })}
          <Movies />
      </section>
  );

};

export default PageHome;