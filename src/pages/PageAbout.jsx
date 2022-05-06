import { useEffect } from "react";
import { appTitle } from "../global/globals";

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
      </section>
  );

};

export default PageAbout;