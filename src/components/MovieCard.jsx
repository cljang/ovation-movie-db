import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { pathToPoster } from "../global/globals";
import placeholderPoster from "../images/placeholder_poster.png";

function MovieCard({movie}) {

  const movieCardID = `movie-${movie.id}`
  
  const [fontSize, setFontSize] = useState(0)

  // On mount, add a resize event listener to change the font size of the card relative to the width of the card, this will ensure that the cards are similarly legible on all screens
  useEffect(() => {
    const getRelativeFontSize = () => {
      // Select the card and get its width
      const element = document.querySelector(`#${movieCardID}`);
      const elementWidth = element.offsetWidth;

      // Take a fraction of the card's width and use it to set the nearest whole font size 
      // 0.054 is experimentally found to give a font size of 15px at 360px viewport width
      const relativeFontSize = elementWidth*0.05;
      const roundedFontSize = Math.round(relativeFontSize);

      setFontSize(relativeFontSize)
    }

    getRelativeFontSize();
    
    window.addEventListener("resize", getRelativeFontSize)
  }, [movieCardID])
  
  const style = {
    fontSize: `${fontSize}px`
  }

  // Format long overviews to be less than a specified character limit
  const formatOverview = (str="", characterLimit=200) => {
    if (str.length > characterLimit) {
      // Find the index of the last space before the characterLimit (to find last whole word before characterLimit)
      let lastSpace = str.slice(0,characterLimit).lastIndexOf(" ");

      // Slice front and back half of string around the last space
      let strFront = str.slice(0, lastSpace);
      let strBack = str.slice(lastSpace);

      return (
        <>
          {strFront}...
          <span className="hidden">{strBack}</span>
        </>
      )
    } else {
      return str;
    }
  }

  return (
    <article id={movieCardID} className="movie-card">
      <img src={movie.poster_path ? `${pathToPoster}${movie.poster_path}` : placeholderPoster} alt={movie.title} className="movie-card-poster" />
      <div className="movie-card-overlay"  style={style}>
        <p className="movie-rating">{movie.vote_average}</p>
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-release-date">{movie.release_date}</p>
        {/* <p className="movie-overview">{movie.overview}</p> */}
        <p className="movie-overview">{formatOverview(movie.overview)}</p>
        <Link to={`/movie/${movie.id}`} className="movie-info-button">More Info</Link>
      </div>
    </article>
  );
}

export default MovieCard;
