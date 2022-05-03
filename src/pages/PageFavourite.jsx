import { useState, useEffect } from "react";
import { localListName, getFavouritesList } from "../global/globals";

const PageFavourite = () => {

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