import React from 'react';
import './Hero.css';
import { heroSection } from '../../../../assets/assets';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
                <ul className='icons'>
                  <li><a href="http://"><FontAwesomeIcon icon={faFacebook} className='icon' /></a></li>
                  <li><a href="http://"><FontAwesomeIcon icon={faWhatsapp} className='icon' /></a></li>
                  <li><a href="http://"><FontAwesomeIcon icon={faLinkedin} className='icon' /></a></li>
                  <li><a href="http://"><FontAwesomeIcon icon={faInstagram} className='icon' /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Hero;
