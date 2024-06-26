import React from 'react';
import './Production.css';
import { FeaturedProductions } from '../../assets/assets';

const Production = () => {
    return (
        <section id="production" className="production">
            <h2>Our Production Process</h2>
            <div className="production-steps">
                <div className="step">
                    <h3>Design & Planning</h3>
                    <div className="procedure">
                        <div className="procedure-image procedure-box">
                            {FeaturedProductions.length > 0 && (
                                <img src={FeaturedProductions[0].image} alt="" />
                            )}
                        </div>
                        <p className='procedure-box'>We start with meticulous design and planning to ensure precision and quality in every project.</p>

                    </div>
                </div>
                <div className="step">
                    <h3>Material Selection</h3>
                    <div className="procedure">
                        <p className='procedure-box'>We use high-quality materials sourced from trusted suppliers to guarantee durability and performance.</p>
                        <div className="procedure-image procedure-box">
                            {FeaturedProductions.length > 0 && (
                                <img src={FeaturedProductions[0].image} alt="" />
                            )}
                        </div>
                    </div>
                </div>
                <div className="step">
                    <h3>Fabrication</h3>
                    <div className="procedure">
                        <div className="procedure-image procedure-box">
                            {FeaturedProductions.length > 0 && (
                                <img src={FeaturedProductions[0].image} alt="" />
                            )}
                        </div>
                        <p className='procedure-box'>Our skilled craftsmen utilize state-of-the-art equipment to fabricate each component with precision.</p>
                    </div>
                </div>
                <div className="step">
                    <h3>Quality Control</h3>
                    <div className="procedure">
                        <div className="procedure-image procedure-box">
                            {FeaturedProductions.length > 0 && (
                                <img src={FeaturedProductions[1].image} alt="" />
                            )}
                        </div>
                        <p className='procedure-box'>Every product undergoes rigorous quality control checks to meet our high standards and customer expectations.</p>
                    </div>
                </div>
                <div className="step">
                    <h3>Delivery & Installation</h3>
                    <div className="procedure">
                    <p className='procedure-box'>We ensure timely delivery and professional installation for a seamless experience.</p>
                        <div className="procedure-image procedure-box">
                            {FeaturedProductions.length > 0 && (
                                <img src={FeaturedProductions[0].image} alt="" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Production;
