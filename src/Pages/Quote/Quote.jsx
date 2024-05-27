import React from 'react';
import './Quote.css';

const Quote = () => {
  return (
    <div className="quote-page">
      <h1>Request a Quote</h1>
      <p>Provide us with your project details, and we’ll get back to you with a comprehensive quote tailored to your needs.</p>
      <form className="quote-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" required />

        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" />

        <label htmlFor="service">Service Required</label>
        <select id="service" name="service" required>
          <option value="">Select a service</option>
          <option value="custom-fabrication">Custom Fabrication</option>
          <option value="prototype-development">Prototype Development</option>
          <option value="mass-production">Mass Production</option>
          <option value="consultation">Consultation</option>
        </select>

        <label htmlFor="budget">Estimated Budget</label>
        <input type="number" id="budget" name="budget" placeholder="USD" />

        <label htmlFor="timeline">Project Timeline</label>
        <input type="text" id="timeline" name="timeline" placeholder="e.g., 2 months" />

        <label htmlFor="details">Project Details</label>
        <textarea id="details" name="details" rows="6" required></textarea>

        <label htmlFor="attachments">Attachments</label>
        <input type="file" id="attachments" name="attachments" multiple />

        <button type="submit" className="btn">Submit Request</button>
      </form>
    </div>
  );
};

export default Quote;
