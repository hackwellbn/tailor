import React from 'react'
import './FeaturedProjects.css'
import { assets } from '../../assets/assets'
import ShowCase from './FeaturedLayouts/Showcase/ShowCase'
import Content from './FeaturedLayouts/Content/Content'
const FeaturedProjects = () => {
    const handleExplorebtn = (e) => {
        window.location.href = "/Contact"
    }
    return (
        <>
            <div className='banner-featured'>
                <div className="banner-container">
                    <div className="banner-featured-content">
                        <div className="featured-body">
                            <h2>Crafting Quality, One Project at a Time</h2>
                            <p>Discover our latest and most impressive works.</p>
                            <button className='btn' onClick={handleExplorebtn} >Explore now</button>
                        </div>
                    </div>
                    <div className="banner-featured-content">
                        <img src={assets.grinder} alt="" />
                    </div>
                </div>
                <ShowCase />
            </div>
            <Content />
        </>

    )
}

export default FeaturedProjects