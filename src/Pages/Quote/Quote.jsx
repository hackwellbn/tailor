import React, { useState } from 'react';
import './Quote.css';
import { assets } from '../../assets/assets';

const Quote = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "654a6bd1-d795-4e00-ab76-1b75c6c5223f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div className="quote">
      <h2>Request Quote</h2>
      <div className="quote-container">
        <div className="quote-content">
          <div className="quote-image">
            <img src={assets.Logo_} alt="Logo" />
          </div>
        </div>
        <div className="quote-content">
          <p>Provide us with your project details, and we’ll get back to you with a comprehensive quote tailored to your needs.</p>

          <form className="form" onSubmit={onSubmit}>
            <div className="first-container">
              <input type="text" id="name" name="name" required placeholder="Name" />
              <input type="email" id="email" name="email" required placeholder="Email" />
            </div>
            <div className="second-container">
              <input type="tel" id="phone" name="phone" required placeholder="Phone" />
              <input type="text" id="company" name="company" placeholder="Company" />
            </div>
            <div className="third-container">
              <select id="service" name="service" required>
                <option value="">Select a service</option>
                <option value="custom-fabrication">Custom Fabrication</option>
                <option value="prototype-development">Prototype Development</option>
                <option value="mass-production">Mass Production</option>
                <option value="consultation">Consultation</option>
              </select>
              <input type="number" id="budget" name="budget" placeholder="USD" />
            </div>
            <div className="fourth-container">
              <input type="text" id="timeline" name="timeline" placeholder="e.g., 2 months" />
            </div>
            <div className="fifth-container">
              <textarea id="details" name="details" rows="6" required placeholder="Project Details"></textarea>
            </div>
            <div className="btns">
              <button type="submit" className="btn">Submit Request</button>
            </div>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Quote;
