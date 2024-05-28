import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={`navbar ${isFixed ? 'fixed' : ''}`}>
        <div className="logo">Blessed<span className='coloredletter'>F</span>abricators</div>
        <span className="material-icons menu-icon" onClick={toggleMenu}>
          {menuOpen ? 'close' : 'menu'}
        </span>
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <span className="material-icons close-icon" onClick={toggleMenu}>
            close
          </span>
          <ul className='navlists'>
            <li><Link to='/' className='navLink' onClick={toggleMenu}>Home</Link></li>
            <li><Link to='/About' className='navLink' onClick={toggleMenu}>About</Link></li>
            <li><Link to='/Products' className='navLink' onClick={toggleMenu}>Products</Link></li>
            <li><Link to='/Contact' className='navLink' onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
