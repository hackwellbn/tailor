import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavLinkClick = () => {
    toggleMenu();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav className={`navbar ${isFixed ? 'fixed' : ''}`}>
      <NavLink to="/" className="logo" onClick={handleLogoClick}>
        Blessed<span className='coloredletter'>F</span>abricators
      </NavLink>
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
          <li>
            <NavLink to='/' className='navLink' onClick={handleNavLinkClick}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/About' className='navLink' onClick={handleNavLinkClick}>About</NavLink>
          </li>
          <li className="toggleDropDown" onClick={toggleDropDown}>
            <span className='navLink'>Services</span>
            <span className="material-symbols-outlined dropkey">
              {dropDownOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
            </span>
            {dropDownOpen && (
              <ul className='toggledropdown box'>
                <li>
                  <NavLink className='toggled' to="/Production" onClick={handleNavLinkClick}>Production</NavLink>
                </li>
                <hr />
                <li>
                  <NavLink className='toggled' to="/FeaturedProjects" onClick={handleNavLinkClick}>Featured Projects</NavLink>
                </li>
                <hr />
                <li>
                  <NavLink className='toggled' to="/Mission" onClick={handleNavLinkClick}>Mission</NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink to='/Contact' className='navLink' onClick={handleNavLinkClick}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/quote" className="navLink" onClick={handleNavLinkClick}>Get a Quote</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
