import React from 'react';
import './Experience.css';
import { videosWeld } from '../../../../assets/assets';

const Experience = () => {
  return (
    <div className="Experience">
      <div className="experienceUs">
        <video src={videosWeld.Videoweld} autoPlay loop muted></video>
      </div>
      <div className="experienceUs">
        <div className="experience-description">
          <h1>Experience Us</h1>
          <p>
            Discover the exceptional craftsmanship and innovation that set us apart in the industry. At Blessed Fabricators, we combine state-of-the-art technology with unparalleled expertise to deliver products that exceed your expectations. Whether you're looking for bespoke fabrications or large-scale manufacturing solutions, our team is dedicated to providing you with the highest quality and service.
          </p>
          <p>
            Join our community of satisfied customers who have experienced the difference with Blessed Fabricators. We pride ourselves on our attention to detail, commitment to excellence, and personalized approach to every project. Explore our portfolio, read testimonials from our clients, and see why we are the trusted choice for your fabrication needs.
          </p>
          <div className="experiencebtns">
            <button className="btn" onClick={'/quote'}>Get a Quote</button>
            <button className="btn" onClick={() => window.location.href = '/#testimonials'}>View Testimonials</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
