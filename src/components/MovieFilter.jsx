import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { FaChevronDown as DownArrow, FaChevronUp as UpArrow } from "react-icons/fa"
import { setMovieFilter } from "../features/movieFilter/movieFilterSlice"
import { movieFilters } from "../global/globals";

function MovieFilter() {
  
  // Movie Filter
  const selectedMovieFilter = useSelector((state) => state.movieFilter.value);
  // Text Value for Filter
  const [filterText, setFilterText] = useState("Popular")
  // Button Open
  const [ buttonOpen, setButtonOpen ] = useState(false);

  const dispatch = useDispatch()

  const handleButtonClick = (e) => {
    e.preventDefault();
    setButtonOpen(!buttonOpen);
  }

  // Function to change the movie filter state
  const handleFilterChange = (e) => {
    dispatch(setMovieFilter(e.target.value));
    setButtonOpen(false);
  }

  // Handle Button Close on Blur
  const handleButtonBlur = (e) => {
    setButtonOpen(false);
  }

  useEffect(() => {
    const [matchingFilter] = movieFilters.filter((filter) => filter.value === selectedMovieFilter);
    setFilterText(matchingFilter.text);
  }, [selectedMovieFilter, setFilterText])
  
  
  return (
    <form className="movie-filter-selector">
      <button onClick={handleButtonClick} onBlur={handleButtonBlur}>
        <p>{filterText}</p>
        {buttonOpen ? <UpArrow className="dropdown-arrow" /> : <DownArrow className="dropdown-arrow" />}
      </button>
      <fieldset className={"selectors" + (buttonOpen ? "" : " filter-hidden")}>
        {movieFilters.map((filter) => {
          return (
            <div key={filter.value}>
              <input type="radio" name="filter" id={filter.value} value={filter.value} onChange={handleFilterChange}/>
              <label htmlFor={filter.value}>{filter.text}</label>
            </div>
          )
        })}
      </fieldset>
    </form>
  )
}

export default MovieFilter