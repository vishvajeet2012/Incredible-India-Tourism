import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const pages = [
  { name: 'Home', link: '/' }, 
  { name: 'Product', link: '/ImmersiveExperience' },
  { name: 'City', link: '/city' },
  { name: 'Food', link: '/Food' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/Contact' }
];

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static"
      sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' ,fontFamily: "fantasy" }}>
            India Tourism
          </Link>
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button key={page.name} color="inherit" component={Link}   sx={{ color: 'black' }} to={page.link}>
              {page.name}
            </Button>
          ))}
        </Box>
        <IconButton 
          size="large" 
          edge="start" 
          color="inherit" 
          aria-label="menu" 
          sx={{ display: { xs: 'block', md: 'none' } }} 
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          {pages.map((page) => (
            <MenuItem key={page.name} onClick={handleMenuClose} component={Link} to={page.link}>
              {page.name}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
