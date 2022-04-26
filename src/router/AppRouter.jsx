import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageFavourite from "../pages/PageFavourite";

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Header />
        <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/favourite" element={<PageFavourite />} />
            <Route path="*" element={<h2>404</h2>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
