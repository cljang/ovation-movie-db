import { useSelector, useDispatch } from "react-redux"
import { setMovieFilter } from "../features/movieFilter/movieFilterSlice"
import { movieFilters } from "../global/globals";

function MovieFilter() {
  
  // Movie Filter
  const selectedMovieFilter = useSelector((state) => state.movieFilter.value);

  const dispatch = useDispatch()

  // Function to change the movie filter state
  const handleFilterChange = (e) => {
    dispatch(setMovieFilter(e.target.value))    
  }
  
  
  return (
    <div className="movie-filter-selector">
      {movieFilters.map((filter) => {
        return <button key={filter.value} 
                      value={filter.value}
                      onClick={handleFilterChange}
                      className={"movie-filter" + (filter.value===selectedMovieFilter && " active")}>
                {filter.text}
              </button>
      })}
    </div>
  )
}

export default MovieFilter