import React from 'react';
import './Hero.css';
import { heroSection } from '../../../../assets/assets';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faLinkedin, faInstagram ,faTiktok} from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

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
                <p className='text'>{heroBanner.description}</p>
                <div className="btns">
                  <button onClick={() => navigate(heroBanner.buttonLink)}>
                    {heroBanner.buttonText}
                  </button>
                </div>
                <ul className='icons'>
                  <li><a href="https://www.facebook.com/profile.php?id=61566856755729&mibextid=ZbWKwL"><FontAwesomeIcon icon={faFacebook} className='icon' /></a></li>
                  <li><a href="https://wa.me/+254741887526"><FontAwesomeIcon icon={faWhatsapp} className='icon' /></a></li>
                  <li><a href="http://"><FontAwesomeIcon icon={faLinkedin} className='icon' /></a></li>
                  <li><a href="https://www.instagram.com/bfabricators2023/?igsh=MWkzdTN0bzI5OXR6Yg%3D%3D"><FontAwesomeIcon icon={faInstagram} className='icon' /></a></li>
 <li><a href="https://www.tiktok.com/@blessed.fabricato?_t=8qai51wbV81&_r=1"><FontAwesomeIcon icon={faTiktok} className='icon' /></a></li>
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
