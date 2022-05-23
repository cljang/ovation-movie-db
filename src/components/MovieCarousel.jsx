import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../scss/components/_movieCarousel.scss"
import Slider from "react-slick";
import { pathToBackdrop780, pathToBackdrop1280, pathToOriginalImage } from "../global/globals";
import { useDispatch } from "react-redux"
import { closeNav } from "../features/navOpen/navOpenSlice"
import MovieInfoButton from './MovieInfoButton';

function MovieCarousel({movieList}) {
  
  const dispatch = useDispatch()

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: 'progressive',
  }

  // Add a special exception when clicking the carousel to close the navMenu
  // Clicking outside navMenu usually closes the navMenu, but its a bit broken when clicking on swiper
  const handleSlideClick = () => {
    dispatch(closeNav());
  }

  return (
    movieList && movieList.length > 0 &&
      <Slider {...settings} className="movie-carousel" onClick={handleSlideClick}>
        {movieList.map((movie => {
          return (
            <div key={movie.id} className="carousel-slide">
              {movie.backdrop_path && 
                <div className="movie-backdrop">
                  <picture>
                    <source media="(max-width: 400px)" srcSet={`${pathToBackdrop780}${movie.backdrop_path}`}/>
                    <source media="(max-width: 720px)" srcSet={`${pathToBackdrop1280}${movie.backdrop_path}`}/>
                    <img src={`${pathToOriginalImage}${movie.backdrop_path}`} alt="" className="backdrop-image" />
                  </picture>
                </div>
              }
              
              <div className="carousel-content">
                <div className='carousel-text'>
                  <h3 className='movie-title'>{movie.title}</h3>
                  <p className='movie-overview'>{movie.overview}</p>
                  <MovieInfoButton movie={movie} tabIndex={-1}/>
                </div>
              </div>
            </div>
          )
        }))}
      </Slider>
    
  )
}

export default MovieCarousel