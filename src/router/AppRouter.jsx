import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageFavourite from "../pages/PageFavourite";

function AppRouter() {
  return (
    <BrowserRouter>
      <Link to="#site-main" className="screen-reader-text">Skip to content</Link>
      <div className="site-wrapper">
        <Header />
        <main>
          <Routes>
              <Route path="/" element={<PageHome />} />
              <Route path="/about" element={<PageAbout />} />
              <Route path="/favourites" element={<PageFavourite />} />
              <Route path="*" element={<h2>404</h2>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
