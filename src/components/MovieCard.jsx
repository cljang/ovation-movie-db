import { pathToPoster } from "../global/globals";

function MovieCard({movie}) {

  return (
    <article className="movie-card">
      <img src={`${pathToPoster}${movie.poster_path}`} alt={movie.title} className="movie-card-poster" />
      <div className="movie-card-overlay">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-release-date">{movie.releaseDate}</p>
        <p className="movie-overview">{movie.overview}</p>
      </div>
    </article>
  );
}

export default MovieCard;
