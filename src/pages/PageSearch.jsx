import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { appTitle } from "../global/globals";
import { endpointSearchMovies } from "../global/globals";
import { API_KEY } from "../global/api-key";
import MovieContainer from "../components/MovieContainer";

const PageSearch = () => {
  const { query } = useParams();
  // Movie List
  const [resultsList, setResultsList] = useState(false);
  // Flag for if more pages can be loaded
  const [canLoadMore, setCanLoadMore] = useState(true);
  // Last loaded page
  const [moviePage, setMoviePage] = useState(1);
  // Total Results
  const [totalResults, setTotalResults] = useState(false)

  // On mount: 
  //    Set document title
  //    Scroll back to the top
  useEffect(() => {
    if (query) {
      document.title = `${query} - Search - ${appTitle}`
      window.scrollTo(0, 0)
    }
  }, [query])
  
  const fetchMovies = useCallback(async (page) => {
    const res = await fetch(`${endpointSearchMovies}?api_key=${API_KEY}&query=${query}&page=${page}`);
    const data = await res.json();
    const selectedMovies = data.results;
    if (page === 1) {
      setResultsList(selectedMovies)
    } else {
      setResultsList(movieList => [...movieList, ...selectedMovies]);
    }
    // If the total page limit has been reached set the canLoadMore flag
    if (page >= data.total_pages) {
      setCanLoadMore(false)
    }
    // Set total results
    setTotalResults(data.total_results);
  }, [query])

  // Handle loadMore button
  const handleLoadMore = () => {
    fetchMovies(moviePage + 1);
    setMoviePage(moviePage + 1);
  }

  // Re-fetch movies if the selectedMovieFilter changes - this will also occur on page load
  useEffect(() => {
    fetchMovies(1)
    setMoviePage(1);
    setCanLoadMore(true)
  }, [fetchMovies, query])

  return (
      <section className="page page-search">
        <h2>Search Results</h2>
        {totalResults && <h3 className="search-query">{totalResults} results for "{query}"</h3>}
        {resultsList && <MovieContainer movieList={resultsList} />}
        {canLoadMore && <button 
          onClick={handleLoadMore}
          className="btn load-more-btn"
        >
          Load more <span className="screen-reader-text">movies</span>
        </button>}
      </section>
  );

};

export default PageSearch;