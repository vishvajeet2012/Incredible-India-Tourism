import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navstyless from '../css/Navbar.module.css';

const pages = [
  { name: 'Home', link: '/' }, 
  { name: 'Product', link: '/ImmersiveExperience' },
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
    <nav className={Navstyless.navbar}>
      <div className={Navstyless.container}>
        <div className={Navstyless.logo}>
          <Link to="/">India Tourism</Link>
        </div>
        <div 
          className={Navstyless.hamburger} 
          onClick={toggleMenu} 
          aria-label="Toggle navigation"
        >
          <div className={`${Navstyless.bar} ${isOpen ? Navstyless.barActive : ''}`}></div>
          <div className={`${Navstyless.bar} ${isOpen ? Navstyless.barActive : ''}`}></div>
          <div className={`${Navstyless.bar} ${isOpen ? Navstyless.barActive : ''}`}></div>
        </div>
        <div className={`${Navstyless.navLinks} ${isOpen ? Navstyless.active : ''}`}>
          {pages.map((page) => (
            <Link key={page.name} to={page.link} onClick={() => setIsOpen(false)}>
              {page.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
