import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Blessed<span className='coloredletter'>F</span>abricators</div>
        <div className="menu">
          <ul className='navlists'>
          <li><Link  to='/'  className='navLink'>Home</Link></li>
          <li><Link  to='./About' className='navLink'>About </Link></li>
          <li><Link to='./Products'  className='navLink'>Products</Link></li>
          <li><Link to='./Contact'  className='navLink'>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar