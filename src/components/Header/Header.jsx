import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <ul style={{display: 'flex', backgroundColor: 'black', width: '900px', height: '40px', alignItems: 'center', margin: '0 auto', listStyleType: 'none', justifyContent: 'space-around' }}>
          <li>
            <Link to="/" style={{textDecoration: 'none', color: 'red'}}>Home</Link>
          </li>
          <li>
            <Link to="/contact" style={{textDecoration: 'none', color: 'red'}}>Contact</Link>
          </li>
          <li>
            <Link to="/about" style={{textDecoration: 'none', color: 'red'}}>About</Link>
          </li>
          <li>
            <Link to="/service" style={{textDecoration: 'none', color: 'red'}}>Service</Link>
          </li>
      </ul>
    </div>
  )
}

export default Header
