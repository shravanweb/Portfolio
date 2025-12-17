import React from 'react';
import { AppBar, Toolbar, Button, Box, Typography, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeToggle } from '../app/ThemeToggleProvider';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ scrollToSection }) => {
    const { toggleTheme, darkMode } = useThemeToggle();
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { label: 'Home', section: 'home' },
        { label: 'About', section: 'about' },
        { label: 'Skills', section: 'skills' },
        { label: 'Services', section: 'services' },
        { label: 'Projects', section: 'projects' },
        { label: 'Contact', section: 'contact' },
    ];

    const handleNavigation = (section) => {
        // If we're not on the homepage, navigate there with state
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: section }, replace: false });
        } else {
            // We're already on homepage, just scroll
            scrollToSection(section);
        }
    };

    const handleLogoClick = () => {
        if (location.pathname !== '/') {
            navigate('/');
        } else {
            scrollToSection('home');
        }
    };

    return (
        <AppBar 
            position="sticky"
            sx={{
                backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                boxShadow: darkMode 
                    ? '0 2px 20px rgba(255, 204, 0, 0.1)' 
                    : '0 2px 20px rgba(0, 127, 255, 0.1)',
                borderBottom: `1px solid ${darkMode ? 'rgba(255, 204, 0, 0.1)' : 'rgba(0, 127, 255, 0.1)'}`,
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
                <Typography 
                    variant="h6" 
                    sx={{ 
                        fontWeight: 700,
                        background: darkMode 
                            ? 'linear-gradient(135deg, #ffffff 0%, #ffcc00 100%)'
                            : 'linear-gradient(135deg, #007fff 0%, #005fbb 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        cursor: 'pointer',
                    }}
                    onClick={handleLogoClick}
                >
                    Shravan Rasamalla
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
                    {navItems.map((item) => (
                        <Button
                            key={item.section}
                            onClick={() => handleNavigation(item.section)}
                            sx={{
                                color: darkMode ? '#fff' : '#333',
                                fontWeight: 500,
                                textTransform: 'none',
                                fontSize: '0.95rem',
                                px: 2,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    color: darkMode ? '#ffcc00' : '#007fff',
                                    backgroundColor: darkMode 
                                        ? 'rgba(255, 204, 0, 0.1)' 
                                        : 'rgba(0, 127, 255, 0.1)',
                                },
                            }}
                        >
                            {item.label}
                        </Button>
                    ))}
                    <IconButton 
                        onClick={toggleTheme} 
                        sx={{
                            color: darkMode ? '#ffcc00' : '#007fff',
                            ml: 2,
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'rotate(180deg)',
                                backgroundColor: darkMode 
                                    ? 'rgba(255, 204, 0, 0.1)' 
                                    : 'rgba(0, 127, 255, 0.1)',
                            },
                        }}
                    >
                        {darkMode ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
