import React from 'react'
import './Quote.css'
import { assets } from '../../assets/assets'
const Quote = () => {
  return (
    <div className='quote'>
      <h2>request quote</h2>
      <div className="quote-container">
        <div className="quote-content">
          <div className="quote-image">
          <img src={assets.Logo_}alt="" />

          </div>
        </div>
        <div className="quote-content">
        <p>Provide us with your project details, and we’ll get back to you with a comprehensive quote tailored to your needs.</p>

          <form className="form">
            <div className="first-container">
              <input type="text" id="name" name="name" required placeholder='name' />
              <input type="email" id="email" name="email" required placeholder="email" />
            </div>
            <div className="second-container">
              <input type="tel" id="phone" name="phone" required placeholder="phone" />
              <input type="text" id="company" name="company" placeholder="company" />
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
              <textarea id="details" name="details" rows="6" required placeholder="input quote"></textarea>
            </div>
            <div className="btns">
              <button type="submit" className="btn">Submit Request</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Quote