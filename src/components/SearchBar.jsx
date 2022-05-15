import { useState } from "react";
import { FaSearch as SearchIcon, FaTimes as ClearIcon } from "react-icons/fa";


function SearchBar() {
  const [ searchQuery, setSearchQuery ] = useState("");

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleSearchClear = (e) => {
    e.preventDefault();
    setSearchQuery("");
  }

  return (
    <div className="searchbar">
      <input 
        type="search" 
        name="query" 
        id="site-search" 
        className="search-input"
        placeholder="Search for a Movie..."
        value={searchQuery}
        onChange={handleSearchInput}
      />
      {searchQuery && 
      <button 
        className="clear-btn"
        onClick={handleSearchClear}
      >
        <ClearIcon />
      </button>}
      <button className="search-btn">
        <SearchIcon className="search-icon"/>
        <span className="screen-reader-text">Search for a movie</span>
      </button>
    </div>
  )
}

export default SearchBar