import React from 'react'
import { Link } from 'react-router-dom'<Link className='NavLinks'></Link>
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">Blessed<span className='coloredF'>F</span>abricators</div>
        <div className="menu">

          <ul>
          <li><Link  to='/'  className='NavLinks'>Home</Link></li>
          <li><Link  to='./About' className='NavLinks'>About </Link></li>
          <li><Link to='./Products'  className='NavLinks'>Products</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar