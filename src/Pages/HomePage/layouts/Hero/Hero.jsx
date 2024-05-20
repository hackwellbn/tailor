import React from 'react';
import './Hero.css';
import { heroSection } from '../../../../assets/assets';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      {heroSection.map((heroBanner, index) => (
        <div className='hero-slide' key={index}>
          <div className='hero-image' style={{ backgroundImage: `url(${heroBanner.image})` }}>
            <div className='hero-overlay'>
              <div className='hero-text'>
                <h1>{heroBanner.title}</h1>
                <p>{heroBanner.description}</p>
                <div className="btns">
                  <button>{heroBanner.buttonText}</button>
                  <button>{heroBanner.buttonLink}</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Hero;
