import { useState, useRef } from "react";
import { FaSearch as SearchIcon, FaTimes as ClearIcon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux"


function SearchBar({ tabIndex }) {
  const [ searchQuery, setSearchQuery ] = useState("");
  
  // const navOpen = useSelector((state) => state.navOpen.value);

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
        aria-label="Search"
        className="search-input"
        placeholder="Search for a Movie..."
        autoComplete="off"
        value={searchQuery}
        onChange={handleSearchInput}
        ref={searchInputRef}
        tabIndex={tabIndex}
      />
      {searchQuery && 
      <button 
        type="reset"
        className="clear-btn"
        onClick={handleSearchClear}
        tabIndex={tabIndex}
      >
        <ClearIcon />
        <span className="screen-reader-text">Clear Search Query</span>
      </button>}
      <button 
        type="submit"
        className="search-btn"
        tabIndex={tabIndex}
      >
        <SearchIcon className="search-icon"/>
        <span className="screen-reader-text">Search</span>
      </button>
      <input type="submit" hidden />
    </form>
  )
}

export default SearchBar