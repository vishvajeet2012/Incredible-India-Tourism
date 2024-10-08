import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const pages = [
  { name: 'Home', link: '/' }, 
  { name: 'Product', link: '/Product' },
  { name: 'City', link: '/city' }
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">LOGO</Link>
        </div>
        <div className="nav-links">
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
