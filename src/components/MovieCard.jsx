import { useState } from "react";
import { pathToPoster } from "../global/globals";
import placeholderPoster from "../images/placeholder_poster.jpg";
import Poster from "../components/Poster";
import MovieRating from "./MovieRating";
import FavouriteHeart from "./FavouriteHeart";
import MovieInfoButton from "./MovieInfoButton";


function MovieCard({movie}) {

  // Track whether card is open (overlay showing) or closed (overlay hidden)
  const [ cardOpen, setCardOpen ] = useState(false);
  // Allow cards to be locked open
  const [ lockedOpen, setLockedOpen ] = useState(false);

  // Utility Functions to open/close cards freely
  const openCard = () => {
    setCardOpen(true);
  } 

  const closeCard = () => {
    setCardOpen(false);
  } 

  // Functions to open and close cards as long as they are not locked open
  const controlledOpen = () => {
    if (!lockedOpen) {
      openCard();
    }
  }
  
  const controlledClose = () => {
    if (!lockedOpen) {
      closeCard();
    }
  }

  // Toggle cards to be locked/unlocked on click
  const handleClick = () => {
    if (!lockedOpen) {
      openCard()
    } else {
      closeCard()
    }
    setLockedOpen(!lockedOpen);
  }

  const movieCardID = `movie-${movie.id}`
  return (
    <article 
      id={movieCardID} 
      className={"movie-card" + (cardOpen ? " card-open" : "")}
      onMouseEnter={controlledOpen}
      onMouseLeave={controlledClose}
      onClick={handleClick}
    >
      <Poster 
        posterPath={movie.poster_path ? `${pathToPoster}${movie.poster_path}` : ""}
        alt={`${movie.title} poster`}
        className="movie-card-poster"
      />
      {/* <img 
        src={movie.poster_path ? `${pathToPoster}${movie.poster_path}` : placeholderPoster} 
        alt={movie.title} 
        className="movie-card-poster" 
        loading="lazy"
      /> */}
      <div className="movie-card-overlay">
        <MovieRating rating={movie.vote_average}/>
        <FavouriteHeart 
          movie={movie}
          onFocus={controlledOpen}
          onBlur={controlledClose}
          disabled={!cardOpen}
        />
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-release-date">{movie.release_date}</p>
        <p className="movie-overview">{movie.overview ? movie.overview : ""}</p>
        <MovieInfoButton 
          movie={movie}
          onFocus={controlledOpen}
          onBlur={controlledClose}
          disabled={!cardOpen}
        />
      </div>
    </article>
  );
}

export default MovieCard;
