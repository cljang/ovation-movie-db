import { useState, useRef } from "react";
import { FaSearch as SearchIcon, FaTimes as ClearIcon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function SearchBar() {
  const [ searchQuery, setSearchQuery ] = useState("");

  const searchInputRef = useRef();

  const navigate = useNavigate();

  const clearSearch = () => {
    setSearchQuery("");
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchInputRef.current.blur();
    console.log(searchInputRef);
    if ( searchQuery ) {
      console.log(searchQuery);
      navigate(`/search/${searchQuery}`)
      clearSearch();
    }
  }

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleSearchClear = (e) => {
    e.preventDefault();
    clearSearch();
  }

  return (
    <form 
      className="searchbar" 
      onSubmit={handleSearchSubmit}
    >
      <input 
        type="search" 
        name="query" 
        id="site-search" 
        className="search-input"
        placeholder="Search for a Movie..."
        autocomplete="off"
        value={searchQuery}
        onChange={handleSearchInput}
        ref={searchInputRef}
      />
      {searchQuery && 
      <button 
        type="reset"
        className="clear-btn"
        onClick={handleSearchClear}
      >
        <ClearIcon />
      </button>}
      <button 
        type="submit"
        className="search-btn"
      >
        <SearchIcon className="search-icon"/>
        <span className="screen-reader-text">Search for a movie</span>
      </button>
      <input type="submit" hidden />
    </form>
  )
}

export default SearchBar