import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "../css/Navbar.module.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const pages = [
  { name: 'Home', link: '/' }, 
  { name: 'City', link: '/viewallcard' },
  { name: 'Food', link: '/ImmersiveExperience' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/Contact' }
];



function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                <ShoppingCartIcon />
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
                <ShoppingCartIcon />
            </Link>

       </div>
      </div>
    </nav>
  );
}

export default Navbar;