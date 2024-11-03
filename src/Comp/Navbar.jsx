import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from "../css/Navbar.module.css";

const pages = [
  { name: 'Home', link: '/' },
  { name: 'City', link: '/viewallcard' },
  { name: 'Food', link: '/ImmersiveExperience' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/Contact' }
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Assuming you have access to total cart quantity
  const totalQuantity = 3; // Replace with actual value from state or context

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">India Tourism</Link>
        </div>
        
        <div className={`${styles['nav-links']} ${mobileMenuOpen ? styles.active : ''}`}>
          <div className={styles.shopingbox2}>
            <Link to="/cart">
              <Badge badgeContent={totalQuantity} color="secondary" overlap="rectangular">
                <ShoppingCartIcon />
              </Badge>
            </Link>
          </div>
          {pages.map((page) => (
            <Link key={page.name} to={page.link} onClick={() => setMobileMenuOpen(false)}>
              {page.name}
            </Link>
          ))}
        </div>
        <div className={styles.hamburger} onClick={toggleMobileMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <div className={styles.shopingbox}>
          <Link to="/cart">
            <Badge badgeContent={totalQuantity} color="secondary" overlap="rectangular">
              <ShoppingCartIcon />
            </Badge>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
