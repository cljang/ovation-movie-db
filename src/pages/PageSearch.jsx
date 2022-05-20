import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { appTitle } from "../global/globals";
import { endpointSearchMovies } from "../global/globals";
import { API_KEY } from "../global/api-key";
import MovieContainer from "../components/MovieContainer";

const PageSearch = () => {
  const { query } = useParams();
  // Movie List
  const [resultsList, setResultsList] = useState(false);

  // On mount: 
  //    Set document title
  //    Scroll back to the top
  //    Fetch search results 
  useEffect(() => {
    if (query) {
      document.title = `${query} - Search - ${appTitle}`
      window.scrollTo(0, 0)
  
      const fetchResults = async () => {
        const res = await fetch(`${endpointSearchMovies}?api_key=${API_KEY}&query=${query}`);
        const data = await res.json();
        const selectedMovies = data.results;
        setResultsList(selectedMovies);
      }
  
      fetchResults();
    }
  }, [query])

  return (
      <section className="page page-search">
        <h2>Search Results</h2>
        <h3 className="search-query">Results for "{query}"</h3>
        {resultsList && <MovieContainer movieList={resultsList} />}
      </section>
  );

};

export default PageSearch;