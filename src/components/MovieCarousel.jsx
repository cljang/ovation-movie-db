
import 'swiper/css/bundle';
import "../scss/components/_movieCarousel.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper";
import { pathToOriginalImage } from "../global/globals";
import MovieInfoButton from './MovieInfoButton';

function MovieCarousel({movieList}) {

  const settings = {
    // spaceBetween: 10,
    slidesPerView: 'auto',
    loop: true,
    modules:[ Pagination, Autoplay ],
    pagination:{
      clickable: true,
    },
    autoplay:{
      delay: 5000,
      pauseOnMouseEnter: true,
    }
  }

  return (
    movieList && movieList.length > 0 &&
      <Swiper {...settings} className="movie-carousel">
        {movieList.map((movie => {
          return (
            <SwiperSlide key={movie.id} className="carousel-slide">
              <div className='movie-backdrop'>
                {movie.backdrop_path && <img src={`${pathToOriginalImage}${movie.backdrop_path}`} alt={`${movie.title} backdrop`} />}
              </div>
              <div className='carousel-text'>
                <h3 className='movie-title'>{movie.title}</h3>
                <p className='movie-overview'>{movie.overview}</p>
                <MovieInfoButton movie={movie} tabIndex={-1}/>
              </div>
            </SwiperSlide>
          )
        }))}
      </Swiper>
    
  )
}

export default MovieCarousel