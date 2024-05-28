import React from 'react';
import './About.css';
import { consultations } from '../../../../assets/assets';

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <div className="About-container">

                {consultations.map((item, index) => (
                    <div className="about-content" key={index}>
                        <div className="about-body">
                            <div className="about-body-card">
                                <div className="about-description about-flex">
                                    <h3>{item.heading}</h3>
                                    <p>{item.description}</p>
                                    <div className="btns">
                                        <button className='btn'>{item.buttonText}</button>
                                        <button className='btn'>{item.buttonLink}</button>
                                    </div>
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
}

export default About;
