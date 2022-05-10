import { Link } from "react-router-dom"

function MovieInfoButton( { movie } ) {
  return (
    movie && <Link to={`/movie/${movie.id}`} className="movie-info-button">More Info<span className='screen-reader-text'> about {movie.title}</span></Link>
  )
}

export default MovieInfoButton