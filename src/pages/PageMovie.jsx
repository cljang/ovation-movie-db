import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { endpointMovieSearch, pathToPoster } from "../global/globals";
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
    <section>
    <img src={movie.poster_path ? `${pathToPoster}${movie.poster_path}` : placeholderPoster} alt={movie.title} className="movie-poster" />
      <MovieRating rating={movie.vote_average}/>
      <FavouriteHeart movieID={movie.id} movie={movie}/>
      <h2>{movie.title}</h2>
      <p className="movie-release-date">{movie.release_date}</p>
      <p className="movie-runtime">{movie.runtime ? formatRuntime(movie.runtime) : ""}</p>
      <p className="movie-overview">{movie.overview ? movie.overview : ""}</p>
    </section>
  )
}

export default PageMovie