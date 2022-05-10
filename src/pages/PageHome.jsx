import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { appTitle, endpointMovieSearch } from "../global/globals"
import { API_KEY } from "../global/api-key"
import MovieCarousel from "../components/MovieCarousel"
import MovieContainer from "../components/MovieContainer";
import MovieFilter from "../components/MovieFilter"

const PageHome = () => {

  // Movie Filter
  const selectedMovieFilter = useSelector((state) => state.movieFilter.value);
  // Movie List
  const [movieList, setMovieList] = useState(false);

  // On mount, set document title
  useEffect(() => {
    document.title = `${appTitle}`
  }, [])
  
  // On mount, scroll back to the top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
          <h2 className="screen-reader-text">Home</h2>
          {movieList && <MovieCarousel movieList={movieList.slice(0,3)}/>}
          <div className="main-content">
            <MovieFilter />
            {movieList && <MovieContainer movieList={movieList} />}
          </div>
      </section>
  );

};

export default PageHome;