function MovieCard({movie}) {

  const poster = "https://www.themoviedb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg";
  const title = "Spider-Man: No Way Home";
  const releaseDate = "2021-12-17";
  const overview = "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."

  return (
    <article className="movie-card">
      <img src={poster} alt={`${title} poster`} className="movie-card-poster" />
      <div className="movie-card-overlay">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-release-date">{releaseDate}</p>
        <p className="movie-overview">{overview}</p>
      </div>
    </article>
  );
}

export default MovieCard;
