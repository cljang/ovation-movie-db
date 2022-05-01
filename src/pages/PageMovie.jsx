import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { endpointMovieSearch, pathToPoster } from "../global/globals"
import { API_KEY } from "../global/api-key"

function PageMovie() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  // On mount, scroll back to the top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Once id is set, call API to get movie details 
  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`${endpointMovieSearch}${id}?api_key=${API_KEY}`)
      const data = await res.json();
      console.log(data);
      setMovie(data);
    }

    fetchMovie();
  }, [id])

  return (
    <section>
      <img src={`${pathToPoster}${movie.poster_path}`} alt={movie.title} className="movie-card-poster" />
      <p className="movie-rating">{movie.vote_average}</p>
      <h2>{movie.title}</h2>
      <p className="movie-release-date">{movie.release_date}</p>
      <p className="movie-overview">{movie.overview}</p>
    </section>
  )
}

export default PageMovie