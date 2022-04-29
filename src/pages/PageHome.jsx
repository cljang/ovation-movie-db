import { useEffect } from "react"
import { endpointMovieSearch } from "../global/globals"
import { useSelector, useDispatch } from "react-redux"
import { setMovieFilter } from "../features/movieFilter/movieFilterSlice"
import { setMovieList } from "../features/movieList/movieListSlice"
import { API_KEY } from "../global/api-key"
import Movies from "../components/Movies";

const PageHome = () => {
  
  // Movie Filter
  const selectedMovieFilter = useSelector((state) => state.movieFilter.value);
  const validMovieFilters = useSelector((state) => state.movieFilter.valid_values)

  // Fetch movies 
  const fetchMovies = async () => {
    const res = await fetch(`${endpointMovieSearch}${selectedMovieFilter}?api_key=${API_KEY}`);
    const data = await res.json();
    const selectedMovies = data.results.splice(0, 15);
    console.log(selectedMovies);
    dispatch(setMovieList(selectedMovies));
  }

  // Fetch movies on page load
  useEffect(() => {
    fetchMovies();
  },[])

  const handleFilterChange = async (e) => {
    await dispatch(setMovieFilter(e.target.value))
    // Re-fetch movies
    fetchMovies();
  }
  
  const dispatch = useDispatch()

  return (
      <section className="page-home">
          <h2>Home</h2>
          <h3>{selectedMovieFilter}</h3>
          {/* Temp Filter Selector */}
          {validMovieFilters.map((filter) => {
            return <button key={filter} 
                           value={filter}
                           onClick={handleFilterChange}>
                    {filter}
                  </button>
          })}
          <Movies />
      </section>
  );

};

export default PageHome;