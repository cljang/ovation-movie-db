
import { useSelector } from "react-redux"
import MovieCard from "./MovieCard"

function Movies() {
  
  // Rendered Movie List
  const movieList = useSelector((state) => state.movieList.value);
  
  return (
    <div className="movie-cards">
      {movieList.length > 0 && movieList.map((movie) => {
        return <MovieCard key={movie.id} 
                   movie={movie}
        />
      })}
    </div>
  )
}

export default Movies