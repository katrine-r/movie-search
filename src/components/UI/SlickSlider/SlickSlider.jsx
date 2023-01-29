import React from 'react';
import Slider from 'react-slick';
import './slick.css'; 
import './slick-theme.css';
import SlideItem from '../SlideItem/SlideItem';

const SlickSlider = ({ movies, tvShows }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        swipeToSlide: true,
        swipe: true,
        initialSlide: 0,
        touchThreshold: 10,
        responsive: [
            {
                breakpoint: 1439,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
      };

    return (
        <Slider {...settings}>
          { movies?.map((i, index) => (
              <div key={i.id} className="SlideItem">
                <SlideItem
                    key={i.id}
                    id={i.id}
                    title={i.title}
                    poster_path={i.poster_path}
                    release_date={i.release_date}
                    vote_average={i.vote_average}
                />
              </div>
          ))
          }
          { tvShows?.map((i, index) => (
              <div key={i.id} className="SlideItem">
                <SlideItem
                    key={i.id}
                    id={i.id}
                    title={i.name}
                    poster_path={i.poster_path}
                    release_date={i.first_air_date}
                    vote_average={i.vote_average}
                />
              </div>
          ))
          }
        </Slider>
    )
}

export default SlickSlider