import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faLinkedin, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-section">
        <div className="footer-container">
          <div className="footer-content">
            <h1><div className="logo">Blessed<span className='coloredletter'>F</span>abricators</div></h1>
            <p>our expertise in welding transforms raw materials into durable and beautiful structures. Committed to precision and quality</p></div>
          <div className="footer-content">
            <h2>follow us</h2>
            <ul className='footer-listings'>
              <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a href="https://wa.me/+254741887526"><FontAwesomeIcon icon={faWhatsapp} /> </a></li>
              <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTiktok} /></a></li>
              <li><a href="https://www.instagram.com/bfabricators2023/?igsh=MWkzdTN0bzI5OXR6Yg%3D%3D"><FontAwesomeIcon icon={faInstagram}  /></a></li>
            </ul>
          </div>
          <div className="footer-content">
            <h2>Donate</h2>
            <ul>
              <li><a href="http://campredemption.org">Camp Redemption</a></li>
              <li><a href="http://childsmile.org">Child Smile</a></li>
            </ul>
          </div>
          <div className="footer-content">
            <h2>Talk to Us</h2>
            <ul>
              <li><a href="mailto:info@blessedfabricators.com">info@blessedFabricators.com</a></li>
              <li><a href="mailto:blessedfabricators@gmail.com">blessedfabricators@gmail.com</a></li>
              <li><a href="mailto:blessed.fabricators@outlook.com">blessed.fabricators@outlook.com</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section className='footer-links'>
        <div className="footer-last">
          <p>Designed and developed by <a href="mailto:softnet.innovationlab@gmail.com">SoftNet</a></p>
          <p>&copy; All rights reserved. BlessedFabricators</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
