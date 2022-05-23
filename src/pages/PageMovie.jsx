import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { endpointGetMovies, pathToOriginalImage, pathToPoster } from "../global/globals";
import { API_KEY } from "../global/api-key";
import { appTitle } from "../global/globals";
import MoviePoster from "../components/MoviePoster";
import MovieRating from "../components/MovieRating";
import FavouriteHeart from "../components/FavouriteHeart";

function PageMovie() {
  const { id } = useParams();

  const [movie, setMovie] = useState(false);
  const [style, setStyle] = useState({})

  const navigate = useNavigate();

  // On mount: 
  //    Set document title
  //    Scroll back to the top
  useEffect(() => {
    if (movie) {
      document.title = `${movie.title} - ${appTitle}`
    }
    window.scrollTo(0, 0)
  }, [movie])

  // Once id is set, call API to get movie details 
  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`${endpointGetMovies}${id}?api_key=${API_KEY}`)

      // If Invalid Id, redirect to 404
      if (res.status !== 200) {
        navigate("/404")
      }

      const data = await res.json();
      setMovie(data);
    }

    fetchMovie();
  }, [id, navigate])

  const formatRuntime = (runtimeMinutes) => {
    const minutesInHour = 60;
    const hours = Math.floor(runtimeMinutes / minutesInHour);
    const minutes = runtimeMinutes % minutesInHour;
    return `${hours}h ${minutes>10 ? minutes : "0" + minutes}m`
  };

  // Dynamically set backdrop image
  // const style = {
  //   backgroundImage: `url(${pathToOriginalImage}${movie.backdrop_path})`,
  // }
  useEffect(() => {
    if (movie.backdrop_path) {
      setStyle({backgroundImage: `url(${pathToOriginalImage}${movie.backdrop_path})`})
    } 
  }, [movie.backdrop_path])

  return (
    <section className="page page-movie">
      {movie.backdrop_path && 
        <div className="movie-backdrop">
          <div className="backdrop-image" style={style}></div>
        </div>
      }
      <div className="movie-content">
        <MoviePoster 
          posterPath={movie.poster_path ? `${pathToPoster}${movie.poster_path}` : ""}
          alt={`${movie.title} poster`}
          className="movie-poster"
        />
        <div className="movie-text">
          <MovieRating rating={movie.vote_average}/>
          <FavouriteHeart movie={movie}/>
          <h2 className="movie-title">{movie.title}</h2>
          <div className="movie-release-info">
            <p className="movie-release-date">{movie.release_date}</p>
            <p className="movie-runtime">{movie.runtime ? formatRuntime(movie.runtime) : ""}</p>
            {movie.genres && <p className="movie-genres">{movie.genres.map((genre) => genre.name).join(', ')}</p>}
          </div>
          <p className="movie-overview">{movie.overview ? movie.overview : ""}</p>
        </div>
      </div>
    </section>
  )
}

export default PageMovie