import React from 'react'
import { PortfolioImage } from '../../../../assets/assets'
import './Portfolio.css'

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <h2>portfolio</h2>
            <div className="portfolio-container">
                <div className="portfolio-content">
                    <div className="portfolio-banner">
                        <img src={PortfolioImage[0].image} alt="" />
                    </div>
                </div>
                <div className="portfolio-content-1">
                    <img src={PortfolioImage[0].image_3} alt="" />
                    <img src={PortfolioImage[0].image_4} alt="" />
                    <img src={PortfolioImage[0].image_5} alt="" />
                    <img src={PortfolioImage[0].image_6} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Portfolio