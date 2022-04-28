import MovieCard from "../components/MovieCard";

const PageHome = () => {

  return (
      <main className="page-home">
          <h2>Home</h2>
          <section className="movie-cards">
            <MovieCard />
            <MovieCard />
          </section>
      </main>
  );

};

export default PageHome;