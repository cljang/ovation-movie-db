import { useSelector, useDispatch } from "react-redux"
import { setMovieFilter } from "../features/movieFilter/movieFilterSlice"

function MovieFilter() {
  
  // Movie Filter
  const selectedMovieFilter = useSelector((state) => state.movieFilter.value);
  const validMovieFilters = useSelector((state) => state.movieFilter.valid_values)

  const dispatch = useDispatch()

  // Function to change the movie filter state
  const handleFilterChange = (e) => {
    dispatch(setMovieFilter(e.target.value))    
  }
  
  
  return (
    <div className="movie-filter-selector">
      {validMovieFilters.map((filter) => {
        return <button key={filter} 
                      value={filter}
                      onClick={handleFilterChange}
                      className={"movie-filter" + (filter===selectedMovieFilter && " active")}>
                {filter}
              </button>
      })}
    </div>
  )
}

export default MovieFilter