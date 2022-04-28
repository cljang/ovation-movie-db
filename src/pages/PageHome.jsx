import MovieCard from "../components/MovieCard";

const PageHome = () => {

  return (
      <main>
          <h2>Home</h2>
          <section className="movie-cards">
            <MovieCard />
          </section>
      </main>
  );

};

export default PageHome;