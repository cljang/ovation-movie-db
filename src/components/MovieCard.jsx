import { useState } from "react";
import { Link } from "react-router-dom";
import { pathToPoster } from "../global/globals";
import placeholderPoster from "../images/placeholder_poster.png";
import MovieRating from "./MovieRating";
import FavouriteHeart from "./FavouriteHeart";

function MovieCard({movie}) {

  const [ flipped, setFlipped ] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
  }

  const movieCardID = `movie-${movie.id}`
  return (
    <article id={movieCardID} className={"movie-card" + (flipped ? " flipped" : "")}>
      <img src={movie.poster_path ? `${pathToPoster}${movie.poster_path}` : placeholderPoster} alt={movie.title} className="movie-card-poster" />
      <div className="movie-card-overlay" onClick={flipCard}>
        <MovieRating rating={movie.vote_average}/>
        <FavouriteHeart movieID={movie.id} movie={movie}/>
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-release-date">{movie.release_date}</p>
        <p className="movie-overview">{movie.overview ? movie.overview : ""}</p>
        <Link to={`/movie/${movie.id}`} className="movie-info-button">More Info</Link>
      </div>
    </article>
  );
}

export default MovieCard;
