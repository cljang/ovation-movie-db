import { useSelector, useDispatch } from "react-redux"
import { setMovieFilter } from "../features/movieFilter/movieFilterSlice"
import { movieFilters } from "../global/globals";

function MovieFilter() {
  
  // Movie Filter
  const selectedMovieFilter = useSelector((state) => state.movieFilter.value);

  const dispatch = useDispatch()
  // const setBackground = (element) => {
  //   const background = document.querySelector(".movie-filter-selector .filter-background");
  //   if (background) {
  //     background.classList.remove("popular");
  //     background.style.position = "absolute";
  //     background.style.top = element.offsetTop + "px";
  //     background.style.left = element.offsetLeft + "px";
  //     background.style.width = element.offsetWidth + "px";
  //     background.style.height = element.offsetHeight + "px";
  //   }
  // };

  // Function to change the movie filter state
  const handleFilterChange = (e) => {
    dispatch(setMovieFilter(e.target.value))    
    // setBackground(e.target);
  }
  
  
  return (
    <div className="movie-filter-selector">
      {/* <div className="filter-background popular"></div> */}
      {movieFilters.map((filter) => {
        return <button key={filter.value} 
                      value={filter.value}
                      onClick={handleFilterChange}
                      className={`movie-filter ${filter.value}` + (filter.value===selectedMovieFilter ? " active" : "")}>
                {filter.text}
              </button>
      })}
    </div>
  )
}

export default MovieFilter