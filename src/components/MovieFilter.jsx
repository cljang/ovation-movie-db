import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { FaChevronDown as DropdownArrow } from "react-icons/fa"
import { setMovieFilter } from "../features/movieFilter/movieFilterSlice"

function MovieFilter() {
  
  // Movie Filter
  const movieFilter = useSelector((state) => state.movieFilter);
  // Button Open
  const [ selectorButtonOpen, setSelectorButtonOpen ] = useState(false);

  const dispatch = useDispatch()

  // Handle Button Close on Blur
  const closeButton = () => {
    setSelectorButtonOpen(false);
  }

  // Function to toggle the selector button
  const handleSelectorButtonClick = (e) => {
    e.preventDefault();
    setSelectorButtonOpen(!selectorButtonOpen);
  }

  // Function to change the movie filter state to match the clicked filter button
  const handleFilterButtonClick = (e) => {
    e.preventDefault();
    dispatch(setMovieFilter(e.target.value));
    closeButton();
  }

  // Detect click outside of filter
  // https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
  const wrapperRef = useRef(null);

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      // Function that checks if there is a current reference and it doesn't contain the target
      // Clicked outside the ref element
      const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          closeButton();
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref])
  }
  
  useOutsideAlerter(wrapperRef)

  return (
    <form className="movie-filter-selector" ref={wrapperRef}>
      <button onClick={handleSelectorButtonClick} className="selector-btn">
        <p>{movieFilter.text}</p>
        <DropdownArrow className={"dropdown-arrow" + (selectorButtonOpen ? " filter-open" : "")} />
      </button>
      <fieldset className={"filters" + (selectorButtonOpen ? " filter-open" : "")}>
        {movieFilter.valid_values.map((filter) => {
          return (
            <button key={filter.value} value={filter.value} onClick={handleFilterButtonClick} className="filter-btn">{filter.text}</button>
          )
        })}
      </fieldset>
    </form>
  )
}

export default MovieFilter