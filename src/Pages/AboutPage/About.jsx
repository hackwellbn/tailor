import React from 'react'
import {AboutFeatures} from '../../assets/assets'
import './About.css'
const About = () => {
    return (
        <div className='about'>
            <div className="about-hero">
                <div className="image">
                     <p>{AboutFeatures[0].title}</p>
                </div>
            </div>
        </div>
    )
}

export default About