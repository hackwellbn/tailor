import React from 'react';
import './Testimonials.css'; // Import your CSS file for styling
import { TestimonialsComponent } from '../../../../assets/assets';

const Testimonials = () => {
    return (
        <div className="testimonial-container">
            {TestimonialsComponent.map((testimonial, index) => (
                <div className="testimonial" key={index}>
                    <img src={testimonial.image} alt="Testimonial" className="testimonial-image" />
                    <p className="testimonial-text">{testimonial.description}</p>
                    <p className="author-name">{testimonial.name}</p>
                    <p className="author-position">{testimonial.position}</p>
                </div>
            ))}
        </div>
    );
}

export default Testimonials;
