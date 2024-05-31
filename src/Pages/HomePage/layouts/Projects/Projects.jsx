import React from 'react';
import { NavLink } from 'react-router-dom';
import './Projects.css';
import { FeaturedProjects } from '../../../../assets/assets';

const Projects = () => {
    return (
        <div>
            <section className="project-section">
                <section className='project-content'>
                    <h2>Discover Our Featured Projects</h2>
                    <p>Explore our showcased welding projects to see our craftsmanship and innovation in action.</p>
                    <NavLink to="/FeaturedProjects" className='btn'>Featured Projects</NavLink>
                </section>
                <section className="project-content">
                    <div className="project-image">
                        <video autoPlay loop>
                            <source src={FeaturedProjects[0].video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Projects;
