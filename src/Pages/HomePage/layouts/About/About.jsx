import React from 'react';
import { NavLink } from 'react-router-dom';
import './About.css';
import { consultations } from '../../../../assets/assets';

const About = () => {
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
                                            <NavLink to={item.buttonLink} className='btn'>
                                                {item.buttonText}
                                            </NavLink>
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
