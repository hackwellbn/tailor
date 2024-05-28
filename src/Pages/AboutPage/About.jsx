import React from 'react';
import { AboutFeatures } from '../../assets/assets';
import './About.css';

const About = () => {
    return (
        <div className="About-container-2">
            <h1>About Us</h1>
            {AboutFeatures.map((feature, index) => (
                <div className="feature-section" key={index}>
                    <h2>{feature.title}</h2>
                    <p>{feature.content.split('\n').map((line, i) => (
                        <span key={i}>{line}<br/></span>
                    ))}</p>
                </div>
            ))}
        </div>
    );
}

export default About;
