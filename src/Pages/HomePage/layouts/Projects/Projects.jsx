import React from 'react'; // Make sure React is imported
import './Projects.css';
import { FeaturedProjects } from '../../../../assets/assets';

const Projects = () => {
    const handleFeaturedProject = () => {
        window.location.href = '/FeaturedProjects';
    };

    return (
        <div>
            <section className="project-section">
                <section className='project-content'>
                    <h2>Discover Our Featured Projects</h2>
                    <p>Explore our showcased welding projects to see our craftsmanship and innovation in action.</p>
                    <button onClick={handleFeaturedProject} className='btn'>View Featured Projects</button> {/* Corrected onclick to onClick */}
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
