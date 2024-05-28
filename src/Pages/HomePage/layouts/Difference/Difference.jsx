import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Difference.css'
const Difference = () => {
  return (
    <div className='diff'>
      <h2>what makes us different</h2>
      <h6>excellence in welding</h6>
      <div className="diff-container">
        <div className="divv-content ">
          <div className="diff-icons flexed">
            <FontAwesomeIcon icon={faMessage} className='diff-icons' />
          </div>
          <div className="diff-description flexed">
            <h5>Advanced Techniques</h5>
            <p>We utilize the latest welding technologies to deliver superior results.</p>
          </div>
        </div>
        <div className="divv-content ">
          <div className="diff-icons flexed">
            <FontAwesomeIcon icon={faMessage} className='diff-icons' />
          </div>
          <div className="diff-description flexed">
            <h5>Experienced Team</h5>
            <p>Our skilled welders bring years of expertise to every project.</p>
          </div>
        </div>
        <div className="divv-content ">
          <div className="diff-icons flexed">
            <FontAwesomeIcon icon={faMessage} className='diff-icons' />
          </div>
          <div className="diff-description flexed">
            <h5>Custom Solutions</h5>
            <p>Tailored welding services to meet your specific needs.</p>
          </div>
        </div>
        <div className="divv-content">
          <div className="diff-icons flexed">
            <FontAwesomeIcon icon={faMessage} className='diff-icons' />
          </div>
          <div className="diff-description flexed">
            <h5>Quality Assurance</h5>
            <p>Strict quality control for reliable and durable results.s</p>
          </div>
        </div>
        <div className="divv-content">
          <div className="diff-icons flexed">
            <FontAwesomeIcon icon={faMessage} className='diff-icons' />
          </div>
          <div className="diff-description flexed">
            <h5>Timely Delivery</h5>
            <p>On-time project completion without compromising quality.</p>
          </div>
        </div>
        <div className="divv-content">
          <div className="diff-icons flexed">
            <FontAwesomeIcon icon={faMessage} className='diff-icons' />
          </div>
          <div className="diff-description flexed">
            <h5>Customer Support</h5>
            <p>Dedicated support to ensure your satisfaction.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Difference