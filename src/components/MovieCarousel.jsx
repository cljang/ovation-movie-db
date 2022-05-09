
import 'swiper/css/bundle';
import "../scss/components/_movieCarousel.scss"
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper";
import { pathToBackdrop } from "../global/globals";

function MovieCarousel({movieList}) {

  const settings = {
    slidesPerView: 'auto',
    loop: true,
    modules:[ Navigation, Pagination, Autoplay ],
    navigation: true,
    pagination:{
      clickable: true,
    },
    autoplay:{
      delay: 5000,
      pauseOnMouseEnter: true,
    }
  }

  return (
    movieList && movieList.length &&
      <Swiper {...settings} className="movie-carousel">
        {movieList.map((movie => {
          return (
            <SwiperSlide key={movie.id} className="carousel-slide">
              <div className='movie-backdrop'>
                {movie.backdrop_path && <img src={`${pathToBackdrop}${movie.backdrop_path}`} alt={`${movie.title} backdrop`} />}
              </div>
              <div className='carousel-text'>
                <h3 className='movie-title'>{movie.title}</h3>
                <p className='movie-overview'>{movie.overview}</p>
                <Link to={`/movie/${movie.id}`} className="movie-info-button">More Info</Link>
              </div>
            </SwiperSlide>
          )
        }))}
      </Swiper>
    
  )
}

export default MovieCarousel