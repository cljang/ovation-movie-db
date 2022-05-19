import { useState } from "react";
import { pathToPoster } from "../global/globals";
import placeholderPoster from "../images/placeholder_poster.png";
import MovieRating from "./MovieRating";
import FavouriteHeart from "./FavouriteHeart";
import MovieInfoButton from "./MovieInfoButton";

function MovieCard({movie}) {

  const [ flipped, setFlipped ] = useState(false);
  
  const openCard = () => {
    setFlipped(true);
  } 

  const closeCard = () => {
    setFlipped(false);
  } 

  const movieCardID = `movie-${movie.id}`
  return (
    <article id={movieCardID} className={"movie-card" + (flipped ? " flipped" : "")}>
      <img src={movie.poster_path ? `${pathToPoster}${movie.poster_path}` : placeholderPoster} alt={movie.title} className="movie-card-poster" />
      <div className="movie-card-overlay">
        <MovieRating rating={movie.vote_average}/>
        <FavouriteHeart 
          movie={movie}
          onFocus={openCard}
          onBlur={closeCard}
        />
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-release-date">{movie.release_date}</p>
        <p className="movie-overview">{movie.overview ? movie.overview : ""}</p>
        <MovieInfoButton 
          movie={movie}
          onFocus={openCard}
          onBlur={closeCard}
        />
      </div>
    </article>
  );
}

export default MovieCard;
