function MovieCard() {

  const poster = "https://www.themoviedb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg";
  const title = "Movie Title";
  const releaseDate = "2022-04-28";
  const overview = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam illum, distinctio eveniet tempore doloribus consequatur laboriosam accusantium tenetur, necessitatibus vero impedit deserunt obcaecati rem quibusdam voluptas error eos iusto libero!"

  return (
    <article className="movie-card">
      <img src={poster} alt={`${title} poster`} />
      <div className="movie-card-overlay">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-release-date">{releaseDate}</p>
        <p className="movie-overview">{overview}</p>
      </div>
    </article>
  );
}

export default MovieCard;
