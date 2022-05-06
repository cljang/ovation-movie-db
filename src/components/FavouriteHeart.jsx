import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { addFavourite, removeFavourite } from "../features/favourites/favouritesListSlice";

function FavouriteHeart( { movie } ) {
  const [favourited, setFavourited] = useState(false)

  const favouritesList = useSelector((state) => state.favouritesList.value)

  const dispatch = useDispatch();

  // Switch heart state and update local storage for favouriteList
  const toggleHeart = () => {
    // If the movieID is currently favourited, filter it out and set favourited to false
    // Else add it to the favourited list and set favourited to true
    if (favourited) {
      dispatch(removeFavourite(movie));
    } else {
      dispatch(addFavourite(movie));
    }
    setFavourited(!favourited)
  }

  // On mount, check if the localStorage list has the movie favourited 
  useEffect(() => {
    if (favouritesList.some((favouriteMovie) => favouriteMovie.id === movie.id)) {
      setFavourited(true);
    }
  }, [favouritesList, movie])

  return (
    <button className={"favourite-heart" + (favourited ? " favourite" : " no-favourite")} onClick={toggleHeart}>
      {favourited ? <FaHeart /> : <FaRegHeart />}
    </button>
  )
}

export default FavouriteHeart