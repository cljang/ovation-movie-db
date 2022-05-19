import { useState, useEffect, useCallback, useRef } from "react"
import { useSelector } from "react-redux"
import { appTitle, endpointGetMovies } from "../global/globals"
import { API_KEY } from "../global/api-key"
import MovieCarousel from "../components/MovieCarousel"
import MovieContainer from "../components/MovieContainer";
import MovieFilter from "../components/MovieFilter"

const PageHome = () => {

  // Movie Filter
  const selectedMovieFilter = useSelector((state) => state.movieFilter.value);
  // Movie List
  const [movieList, setMovieList] = useState(false);
  // const [moviePage, setMoviePage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);
  const moviePage = useRef(1)
  const getMoviePage = () => {
    return moviePage.current;
  }
  const setMoviePage = (value) => {
    moviePage.current = value;
  }

  // On mount: 
  //    Set document title
  //    Scroll back to the top
  useEffect(() => {
    document.title = `${appTitle}`
    window.scrollTo(0, 0); 
  }, [])

  const fetchMovies = useCallback(async () => {
    const res = await fetch(`${endpointGetMovies}${selectedMovieFilter}?api_key=${API_KEY}&page=${getMoviePage()}`);
    const data = await res.json();
    const selectedMovies = data.results;
    if (getMoviePage() === 1) {
      setMovieList(selectedMovies)
    } else {
      setMovieList(movieList => [...movieList, ...selectedMovies]);
    }
    setTotalPages(data.total_pages)
  }, [selectedMovieFilter])

  const handleLoadMore = () => {
    setMoviePage(getMoviePage() + 1);
    fetchMovies();
  }

  // Re-fetch movies if the selectedMovieFilter changes - this will also occur on page load
  useEffect(() => {
    // const fetchInitialMovies = async () => {
    //   const res = await fetch(`${endpointGetMovies}${selectedMovieFilter}?api_key=${API_KEY}`);
    //   const data = await res.json();
    //   const selectedMovies = data.results;
    //   // setMoviePage(data.page);
    //   // setTotalPages(data.total_pages);
    //   setMovieList(selectedMovies)
    // }

    // fetchInitialMovies();
    fetchMovies()
  }, [fetchMovies])

 

  return (
      <section className="page-home">
          <h2 className="screen-reader-text">Home</h2>
          {movieList && <MovieCarousel movieList={movieList.slice(0,3)}/>}
          <div className="main-content">
            <MovieFilter />
            {movieList && <MovieContainer movieList={movieList} />}
            <button 
              onClick={handleLoadMore}
              className="btn"
            >
              Load more <span className="screen-reader-text">movies</span>
            </button>
          </div>
      </section>
  );

};

export default PageHome;