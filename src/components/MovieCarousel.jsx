
import 'swiper/css/bundle';
import "../scss/components/_movieCarousel.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper";
import { pathToOriginalImage } from "../global/globals";
import { useSelector, useDispatch } from "react-redux"
import { closeNav } from "../features/navOpen/navOpenSlice"
import MovieInfoButton from './MovieInfoButton';

function MovieCarousel({movieList}) {
  
  const navOpen = useSelector((state) => state.navOpen.value);
  
  const dispatch = useDispatch()

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

  // Add a special exception when clicking the carousel to close the navMenu
  // Clicking outside navMenu usually closes the navMenu, but its a bit broken when clicking on swiper
  const handleSlideClick = () => {
    dispatch(closeNav());
  }

  return (
    movieList && movieList.length > 0 &&
      <Swiper {...settings} className="movie-carousel" onClick={handleSlideClick}>
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