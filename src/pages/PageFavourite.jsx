import { useState, useEffect } from "react";
import { appTitle, localListName, getFavouritesList } from "../global/globals";

const PageFavourite = () => {
  
  // On mount, set document title
  useEffect(() => {
    document.title = `Favourites - ${appTitle}`
  }, [])
  
  // On mount, scroll back to the top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [favouritesList, setFavouritesList] = useState();
  useEffect(() => {
    setFavouritesList(getFavouritesList());
  }, [])

  return (
      <section>
          <h2>Favourite</h2>
          <ul>
            {favouritesList && favouritesList.map((id) => <li key={id}>{id}</li>)}
          </ul>
      </section>
  );

};

export default PageFavourite;