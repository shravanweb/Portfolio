import React from 'react';
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useThemeToggle } from '../app/ThemeToggleProvider'; // Adjust the path as necessary

const Navbar = () => {
    const { toggleTheme, darkMode } = useThemeToggle(); // Access the toggle function and current theme mode

    return (
        <AppBar position="fixed" sx={{ zIndex: 1201 }}> {/* Ensure it stays above other content */}
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Portfolio
                    </Link>
                </Typography>

                <Box sx={{ display: 'flex' }}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/about">About</Button>
                    <Button color="inherit" component={Link} to="/services">Services</Button>
                    <Button color="inherit" component={Link} to="/projects">Projects</Button>
                    <Button color="inherit" component={Link} to="/contact">Contact</Button>
                    <Button color="inherit" onClick={toggleTheme}>
                        {darkMode ? 'Light Mode' : 'Dark Mode'} {/* Change text based on theme */}
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
