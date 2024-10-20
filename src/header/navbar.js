import React from 'react';
import { AppBar, Toolbar, Button, Box, Typography, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material'; // Import the icons
import { useThemeToggle } from '../app/ThemeToggleProvider';

const Navbar = ({ scrollToSection }) => {
    const { toggleTheme, darkMode } = useThemeToggle(); // Access the toggle function and current theme mode

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Shravan Rasamalla
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button color="inherit" onClick={() => scrollToSection('home')}>Home</Button>
                    <Button color="inherit" onClick={() => scrollToSection('about')}>About</Button>
                    <Button color="inherit" onClick={() => scrollToSection('skills')}>Skills</Button>
                    <Button color="inherit" onClick={() => scrollToSection('services')}>Services</Button>
                    <Button color="inherit" onClick={() => scrollToSection('contact')}>Contact</Button>

                    {/* Dark/Light Mode Toggle Button */}
                    <IconButton onClick={toggleTheme} color="inherit">
                        {darkMode ? <Brightness7 /> : <Brightness4 />} {/* Change icon based on the current theme */}
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
