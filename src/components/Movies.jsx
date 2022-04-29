import { useState, useEffect } from "react"
import { endpointMovieSearch } from "../global/globals"
import { useSelector } from "react-redux"
import { API_KEY } from "../global/api-key"
import MovieCard from "./MovieCard"

function Movies() {
  
  const movieFilter = useSelector((state) => state.movieFilter.value);

  // Rendered Movie List
  const [moviesData, setMoviesData] = useState(false);

  // Fetch movies 
  const fetchMovies = async () => {
    const res = await fetch(`${endpointMovieSearch}${movieFilter}?api_key=${API_KEY}`);
    const data = await res.json();
    const selectedMovies = data.results.splice(0, 15);
    console.log(selectedMovies);
    setMoviesData(selectedMovies);
  }

  // Fetch movies on mount
  useEffect(() => {
    fetchMovies();
  },[])
  
  return (
    <div className="movie-cards">
      {moviesData !== false && moviesData.map((movie) => {
        return <MovieCard key={movie.id} 
                   movie={movie}
        />
      })}
    </div>
  )
}

export default Movies