import { useEffect } from "react";
import { appTitle } from "../global/globals";

const PageAbout = () => {

  // On mount, set document title
  useEffect(() => {
    document.title = `About - ${appTitle}`
  }, [])

  return (
      <section>
          <h2>About</h2>
      </section>
  );

};

export default PageAbout;