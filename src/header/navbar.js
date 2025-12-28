import React from 'react';
import { AppBar, Toolbar, Button, Box, Typography, IconButton, Container } from '@mui/material';
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
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: section }, replace: false });
        } else {
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
                backgroundColor: darkMode 
                    ? 'rgba(10, 14, 39, 0.98)' 
                    : 'rgba(248, 249, 255, 0.98)',
                backdropFilter: 'blur(20px)',
                boxShadow: 'var(--shadow-md)',
                borderBottom: `1px solid ${darkMode ? 'rgba(0, 212, 255, 0.1)' : 'rgba(0, 102, 255, 0.1)'}`,
                transition: 'all 0.3s ease',
            }}
        >
            <Container maxWidth="lg">
                <Toolbar 
                    sx={{ 
                        justifyContent: 'space-between', 
                        py: 1.5,
                        px: { xs: 0, sm: 2 }
                    }}
                >
                    {/* Logo */}
                    <Typography 
                        variant="h6" 
                        sx={{ 
                            fontWeight: 800,
                            fontSize: '1.4rem',
                            background: darkMode 
                                ? 'linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)'
                                : 'linear-gradient(135deg, #0066ff 0%, #6366f1 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            cursor: 'pointer',
                            letterSpacing: '-0.5px',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.05)',
                            },
                        }}
                        onClick={handleLogoClick}
                    >
                        Shravan
                    </Typography>

                    {/* Desktop Navigation */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.section}
                                onClick={() => handleNavigation(item.section)}
                                sx={{
                                    color: darkMode ? '#e0e0e0' : '#333',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    fontSize: '0.95rem',
                                    px: 2.5,
                                    py: 1,
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    borderRadius: '8px',
                                    position: 'relative',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: '8px',
                                        left: '50%',
                                        width: '0',
                                        height: '2px',
                                        background: darkMode ? '#00d4ff' : '#0066ff',
                                        transform: 'translateX(-50%)',
                                        transition: 'width 0.3s ease',
                                    },
                                    '&:hover': {
                                        color: darkMode ? '#00d4ff' : '#0066ff',
                                        backgroundColor: darkMode 
                                            ? 'rgba(0, 212, 255, 0.08)' 
                                            : 'rgba(0, 102, 255, 0.08)',
                                        '&::after': {
                                            width: '80%',
                                        },
                                    },
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}

                        {/* Theme Toggle */}
                        <IconButton 
                            onClick={toggleTheme} 
                            sx={{
                                color: darkMode ? '#00d4ff' : '#0066ff',
                                ml: 2,
                                transition: 'all 0.3s ease',
                                borderRadius: '8px',
                                padding: '10px',
                                '&:hover': {
                                    transform: 'rotate(180deg)',
                                    backgroundColor: darkMode 
                                        ? 'rgba(0, 212, 255, 0.1)' 
                                        : 'rgba(0, 102, 255, 0.1)',
                                },
                            }}
                            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {darkMode ? <Brightness7 /> : <Brightness4 />}
                        </IconButton>
                    </Box>

                    {/* Mobile Theme Toggle */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton 
                            onClick={toggleTheme} 
                            sx={{
                                color: darkMode ? '#00d4ff' : '#0066ff',
                            }}
                        >
                            {darkMode ? <Brightness7 /> : <Brightness4 />}
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
