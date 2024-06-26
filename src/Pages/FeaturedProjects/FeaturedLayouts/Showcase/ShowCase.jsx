import React from 'react';
import './ShowCase.css';
import { FeaturedProjects, assets } from '../../../../assets/assets';
const ShowCase = () => {
    const handleServices = (e) => {
        e.preventDefault();
        window.location.href = "/services"
    }
    return (
        <section className="showcase">
            <div className="showcase-content">
                <h1>showcasing our designs from simple to complex</h1>
                <p> <strong>"converting row materials to useful products"</strong> the Aim of  Actuary,<b>-Albert Odhiambo-</b></p>
                <div className="showcase-buttons">
                    <button className="btn btn-primary" onClick={handleServices}>Explore Now</button>
                    <button className="btn btn-secondary">Learn More</button>
                </div>
            </div>
            <div className="showcase-images">
                <section className="showcase-flex">
                    <div className="image-container-show">
                        <img src={FeaturedProjects[0].image} alt="Showcase Image 1" className="showcase-image" />
                    </div>
                    <div className="image-container-show">
                        <img src={assets.structure_1} alt="Showcase Image 2" className="showcase-image" />
                    </div>

                </section>
                <section className="showcase-flex">
                    <div className="image-container-show">
                        <img src={assets.weldedGate} alt="Showcase Image 3" className="showcase-image" />
                    </div>
                    <div className="image-container-show">
                        <img src={assets.structure_2} alt="Showcase Image 4" className="showcase-image" />
                    </div>
                </section>
            </div>
        </section>
    );
};

export default ShowCase;
