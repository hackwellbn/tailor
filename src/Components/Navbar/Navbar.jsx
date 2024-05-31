import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
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
    setDropDownOpen(!true);
  };
  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  }


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
            <li className="toggleDropDown" onClick={toggleDropDown}>
              <Link to="services" className='navLink'>services</Link>
              <span className="material-symbols-outlined dropkey">
                {dropDownOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
              </span>
              {dropDownOpen && (
                <ul className='toggledropdown box'>
                   <li><Link className='toggled' to="/Production">Production</Link></li>
                   <hr />
                  <li><Link className='toggled' to="/featuredProjects">Featured Projects</Link></li>
                  <hr />
                  <li><Link  className='toggled'to="/Mission">Mission</Link></li>
                </ul>
              )}
            </li>
            <li><Link to='/Contact' className='navLink' onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
