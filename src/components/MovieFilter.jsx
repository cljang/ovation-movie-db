import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { FaChevronDown as DropdownArrow } from "react-icons/fa"
import { setMovieFilter } from "../features/movieFilter/movieFilterSlice"

function MovieFilter() {
  
  // Movie Filter
  const movieFilter = useSelector((state) => state.movieFilter);
  // Button Open
  const [ buttonOpen, setButtonOpen ] = useState(false);

  const dispatch = useDispatch()

  const handleButtonClick = (e) => {
    e.preventDefault();
    setButtonOpen(!buttonOpen);
  }

  // Handle Button Close on Blur
  const closeButton = () => {
    setButtonOpen(false);
  }

  // Function to change the movie filter state
  const handleFilterChange = (e) => {
    dispatch(setMovieFilter(e.target.value));
    closeButton();
  }

  return (
    <form className="movie-filter-selector">
      <button onClick={handleButtonClick} onBlur={closeButton}>
        <p>{movieFilter.text}</p>
        <DropdownArrow className={"dropdown-arrow" + (buttonOpen ? " filter-open" : "")} />
      </button>
      <fieldset className={"selectors" + (buttonOpen ? " filter-open" : "")}>
        {movieFilter.valid_values.map((filter) => {
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