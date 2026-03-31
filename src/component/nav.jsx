import React, { useState } from 'react'

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='nav navbar'>
      <h2>MAINUL STORE</h2>
      
      <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <button className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </button>
      
    </div>
  )
}

export default Nav
