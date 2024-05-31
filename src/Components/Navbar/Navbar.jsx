import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.pageYOffset > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropDownOpen(false);
  };

  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  };

  return (
    <nav className={`navbar ${isFixed ? 'fixed' : ''}`}>
      <div className="logo">Blessed<span className='coloredletter'>F</span>abricators</div>
      <span className="material-icons menu-icon" onClick={toggleMenu}>
        {menuOpen ? 'close' : 'menu'}
      </span>
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        {menuOpen && (
          <span className="material-icons close-icon" onClick={toggleMenu}>
            close
          </span>
        )}
        <ul className='navlists'>
          <li><Link to='/' className='navLink' onClick={toggleMenu}>Home</Link></li>
          <li><Link to='/About' className='navLink' onClick={toggleMenu}>About</Link></li>
          <li className="toggleDropDown" onClick={toggleDropDown}>
            <span className='navLink'>Services</span>
            <span className="material-symbols-outlined dropkey">
              {dropDownOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
            </span>
            {dropDownOpen && (
              <ul className='toggledropdown box'>
                <li><Link className='toggled' to="/Production" onClick={toggleMenu}>Production</Link></li>
                <hr />
                <li><Link className='toggled' to="/featuredProjects" onClick={toggleMenu}>Featured Projects</Link></li>
                <hr />
                <li><Link className='toggled' to="/Mission" onClick={toggleMenu}>Mission</Link></li>
              </ul>
            )}
          </li>
          <li><Link to='/Contact' className='navLink' onClick={toggleMenu}>Contact</Link></li>
          <li><Link to="/quote" className="navLink" onClick={toggleMenu}>Get a Quote</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
