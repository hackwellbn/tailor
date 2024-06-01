import React from 'react';
import './About.css';
import { consultations } from '../../../../assets/assets';

const About = () => {
    const handleNavigation = (url) => {
        window.location.href = '/about';
    };

    return (
        <div>
            <div className="About-container">
                {consultations.map((item, index) => (
                    <div className="about-content" key={index}>
                        <div className="about-body">
                            <div className="about-body-card">
                                <div className="about-description about-flex">
                                    <h3>{item.heading}</h3>
                                    <p>{item.description}</p>
                                    {item.buttonText && item.buttonLink && (
                                        <div className="btns">
                                            <button className='btn' onClick={() => handleNavigation(item.buttonLink)}>
                                                {item.buttonText}
                                            </button>
                                        </div>
                                    )}
                                </div>
                                <div className="about-image about-flex">
                                    <img src={item.image} alt={`Consultation ${index}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
