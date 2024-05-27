import React from 'react'
import './Advanced.css'
import { assets } from '../../../../assets/assets'

const Advanced = () => {
    return (
        <div className='advanced'>
            <div className="unleash-container">
                <div className="unleash-content">
                    <div className="unleash">
                        <h2>unleash the power of precision welding</h2>
                        <p>Discover industry-leading welding solutions tailored to elevate your projects to the next level.</p>
                        <button className='btn'>Get started Now</button>
                    </div>
                </div>
                <div className="unleash-content">
                    <img src={assets.unleash} alt="" />
                    <div className="unleash-overlay">
                        <p>we work in strength and in boldness just to bring the quality designs you prefer that is commencing with a great commitment from consultation to the end products</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advanced