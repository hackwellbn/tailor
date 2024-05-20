import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-section">
        <div className="footer-container">
          <div className="footer-content">
            <h2>Important Links</h2>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">WhatsApp</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">TikTok</a></li>
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
