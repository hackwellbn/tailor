import React from 'react';
import './Content.css';
import { assets } from '../../../../assets/assets';

const Content = () => {
    return (
        <div className='featuredContent'>
            <h2>Featured Welding & Metal Fabrication Projects</h2>
            <p className='description'>Discover our latest welding and metal fabrication projects below.</p>
            <div className="featured-container">
                <div className="cards">
                    <img src={assets.metals} alt="Welding Project 1" />
                    <div className="text-container">
                        <p className='description'>Custom-designed steel structure for industrial warehouse, ensuring durability and efficiency in storage solutions.</p>
                    </div>
                </div>
                <div className="cards">
                    <img src={assets.metals_2} alt="Welding Project 2" />
                    <div className="text-container">
                        <p className='description'>Precision welding and fabrication of stainless steel components for a food processing plant, meeting strict hygiene standards.</p>
                    </div>
                </div>
                <div className="cards">
                    <img src={assets.metals_3} alt="Welding Project 3" />
                    <div className="text-container">
                        <p className='description'>Structural welding and metal fabrication for a commercial building project, ensuring safety and structural integrity.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
