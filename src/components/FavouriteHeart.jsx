import { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { localListName, getFavouritesList } from "../global/globals";

function FavouriteHeart( {movieID} ) {

  const [favourited, setFavourited] = useState(false)

  // Switch heart state and update local storage for favouriteList
  const toggleHeart = () => {
    // Create an array of favourites and copy the local storage list if it exists
    let localListArr = getFavouritesList()

    // If the movieID is currently favourited, filter it out and set favourited to false
    // Else add it to the favourited list and set favourited to true
    if (favourited) {
      localListArr = localListArr.filter((favouritedID) => favouritedID !== `${movieID}`)
    } else {
      localListArr.push(movieID);
    }
    setFavourited(!favourited)
    localStorage.setItem(localListName, localListArr);
  }

  // On mount, check if the localStorage list has the movie favourited 
  useEffect(() => {
    let localListArr = getFavouritesList();
    if (localListArr.includes(`${movieID}`) ) {
      setFavourited(true);
    }
  }, [movieID])

  return (
    <button className={"favourite-heart" + (favourited ? " favourite" : " no-favourite")} onClick={toggleHeart}>
      {favourited ? <FaHeart /> : <FaRegHeart />}
    </button>
  )
}

export default FavouriteHeart