import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const pages = [
  { name: 'Home', link: '/' }, 
  { name: 'Product', link: '/Product' },
  { name: 'City', link: '/city' },
  { name: 'Food', link: '/Food' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/Contact' }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">India Tourism</Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {pages.map((page) => (
            <Link key={page.name} to={page.link}>
              {page.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
