import { useEffect } from "react";
import { appTitle } from "../global/globals";
import { useSelector } from "react-redux";
import MovieContainer from "../components/MovieContainer";

const PageFavourite = () => {

  const favouritesList = useSelector((state) => state.favouritesList.value);
  
  // On mount, set document title
  useEffect(() => {
    document.title = `Favourites - ${appTitle}`
  }, [])
  
  // On mount, scroll back to the top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
      <section>
          <h2>Favourite</h2>
          <MovieContainer movieList={favouritesList}/>
      </section>
  );

};

export default PageFavourite;