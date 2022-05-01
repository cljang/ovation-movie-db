import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { endpointMovieSearch } from "../global/globals"
import { API_KEY } from "../global/api-key"
import MovieContainer from "../components/MovieContainer";
import MovieFilter from "../components/MovieFilter"

const PageHome = () => {

  // Movie Filter
  const selectedMovieFilter = useSelector((state) => state.movieFilter.value);
  // Movie List
  const [movieList, setMovieList] = useState(false);

  // Re-fetch movies if the selectedMovieFilter changes - this will also occur on page load
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(`${endpointMovieSearch}${selectedMovieFilter}?api_key=${API_KEY}`);
      const data = await res.json();
      const selectedMovies = data.results;
      setMovieList(selectedMovies);
    }

    fetchMovies();
  }, [selectedMovieFilter])
  

  return (
      <section className="page-home">
          <h2>Home</h2>
          <MovieFilter />
          <MovieContainer movieList={movieList} />
      </section>
  );

};

export default PageHome;