import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { endpointMovieSearch, pathToPoster, pathToBackdrop } from "../global/globals";
import { API_KEY } from "../global/api-key";
import { appTitle } from "../global/globals";
import placeholderPoster from "../images/placeholder_poster.png";
import MovieRating from "../components/MovieRating";
import FavouriteHeart from "../components/FavouriteHeart";

function PageMovie() {
  const { id } = useParams();

  const [movie, setMovie] = useState(false);

  // On mount, set document title
  useEffect(() => {
    if (movie) {
      document.title = `${movie.title} - ${appTitle}`
    }
  }, [movie])

  // On mount, scroll back to the top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Once id is set, call API to get movie details 
  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`${endpointMovieSearch}${id}?api_key=${API_KEY}`)
      const data = await res.json();
      setMovie(data);
    }

    fetchMovie();
  }, [id])

  const formatRuntime = (runtimeMinutes) => {
    const minutesInHour = 60;
    const hours = Math.floor(runtimeMinutes / minutesInHour);
    const minutes = runtimeMinutes % minutesInHour;
    return `${hours}h ${minutes}m`
  };

  return (
    <section className="page-movie">
      {movie.backdrop_path && 
        <div className="movie-backdrop"><img src={movie.backdrop_path && `${pathToBackdrop}${movie.backdrop_path}`} alt={`${movie.title} backdrop`} /></div>
      }
      <div className="movie-content">
        <img src={movie.poster_path ? `${pathToPoster}${movie.poster_path}` : placeholderPoster} alt={`${movie.title} poster`} className="movie-poster" />
        <div className="movie-text">
          <MovieRating rating={movie.vote_average}/>
          <FavouriteHeart movie={movie}/>
          <h2 className="movie-title">{movie.title}</h2>
          <p className="movie-release-date">{movie.release_date}</p>
          <p className="movie-runtime">{movie.runtime ? formatRuntime(movie.runtime) : ""}</p>
          <p className="movie-overview">{movie.overview ? movie.overview : ""}</p>
        </div>
      </div>
    </section>
  )
}

export default PageMovie