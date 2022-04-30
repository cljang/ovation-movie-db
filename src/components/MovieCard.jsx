import { useState, useEffect } from "react";
import { pathToPoster } from "../global/globals";

function MovieCard({movie}) {

  const movieCardID = `movie-${movie.id}`
  
  const [fontSize, setFontSize] = useState(0)

  // On mount, add a resize event listener to change the font size of the card relative to the width of the card, this will ensure that the cards are similarly legible on all screens
  useEffect(() => {
    console.log("effect");
    const getRelativeFontSize = () => {
      // Select the card and get its width
      const element = document.querySelector(`#${movieCardID}`);
      const elementWidth = element.offsetWidth;

      // Take a fraction of the card's width and use it to set the nearest whole font size 
      // 0.05 is experimentally found to give a font size of 16px at 360px viewport width
      setFontSize(Math.round(elementWidth*0.054))
    }

    getRelativeFontSize();
    
    window.addEventListener("resize", getRelativeFontSize)
  }, [movieCardID])
  
  const style = {
    fontSize: `${fontSize}px`
  }

  console.log(fontSize);

  return (
    <article id={movieCardID} className="movie-card">
      <img src={`${pathToPoster}${movie.poster_path}`} alt={movie.title} className="movie-card-poster" />
      <div className="movie-card-overlay"  style={style}>
        <p>{movie.vote_average}</p>
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-release-date">{movie.release_date}</p>
        <p className="movie-overview">{movie.overview}</p>
      </div>
    </article>
  );
}

export default MovieCard;
