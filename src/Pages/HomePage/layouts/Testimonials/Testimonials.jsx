import React from 'react';
import './Testimonials.css';
import { TestimonialsComponent } from '../../../../assets/assets';

const Testimonials = () => {
    return (
        <div className="wrapper-1" id='testimonials'>
            <div className="testimonial-container">
                {TestimonialsComponent.map((testimonial, index) => (
                    <div className="testimonial" key={index}>
                        <div className="image-container-1">
                            <img src={testimonial.image} alt="Testimonial" className="testimonial-image" />

                        </div>
                        <div className="rating">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <span key={i} className="star">&#9733;</span>
                            ))}
                        </div>
                        <p className="testimonial-text">{testimonial.description}</p>
                        <p className="author-name-1">{testimonial.name}</p>
                        <p className="author-position">{testimonial.position}</p>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Testimonials;
