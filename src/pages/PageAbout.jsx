import { useEffect } from "react";
import { appTitle } from "../global/globals";
import tmdbLogo from "../images/tmdb-logo.svg"

const PageAbout = () => {

  // On mount, set document title
  useEffect(() => {
    document.title = `About - ${appTitle}`
  }, [])

  // On mount, scroll back to the top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
      <section className="page-about">
        <h2>About</h2>
        <div className="about-content">
          <p><span className="app-title">ovation.</span> is an online movie database that enables users to track their favourite movies.</p>
          <p>Browse and view detailed information about popular, top rated, upcoming, and now playing titles.</p>
          <div className="attribution">
            <p>*This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
            <a href="https://www.themoviedb.org/"><img src={tmdbLogo} alt="The Movie Database logo" /></a>
          </div>
        </div>
      </section>
  );

};

export default PageAbout;