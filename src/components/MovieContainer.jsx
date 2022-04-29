
import { useSelector } from "react-redux"
import MovieCard from "./MovieCard"

function MovieContainer() {
  
  // Rendered Movie List
  const movieList = useSelector((state) => state.movieList.value);
  
  return (
    <div className="movie-container">
      {movieList.length > 0 && movieList.map((movie) => {
        return <MovieCard key={movie.id} 
                   movie={movie}
        />
      })}
    </div>
  )
}

export default MovieContainer