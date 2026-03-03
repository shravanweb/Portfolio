import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, Typography, IconButton, Container, useScrollTrigger } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeToggle } from '../app/ThemeToggleProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ scrollToSection }) => {
    const { toggleTheme, darkMode } = useThemeToggle();
    const navigate = useNavigate();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: scrolled
                    ? (darkMode ? 'rgba(5, 8, 22, 0.8)' : 'rgba(255, 255, 255, 0.8)')
                    : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
                borderBottom: scrolled
                    ? `1px solid var(--border-color)`
                    : '1px solid transparent',
                transition: 'var(--transition-base)',
                backgroundImage: 'none'
            }}
        >
            <Container maxWidth="lg">
                <Toolbar
                    sx={{
                        justifyContent: 'space-between',
                        py: scrolled ? 1 : 2,
                        transition: 'var(--transition-base)'
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 900,
                            fontSize: '1.6rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            letterSpacing: '-1px'
                        }}
                        onClick={handleLogoClick}
                    >
                        <Box component="span" sx={{ color: 'var(--accent-color)' }}>S</Box>
                        <Box component="span" sx={{ color: 'var(--text-color-2)' }}>hravan</Box>
                    </Typography>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
                        <Box
                            className="glass-effect"
                            sx={{
                                display: 'flex',
                                px: 1,
                                py: 0.5,
                                borderRadius: '16px',
                                border: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
                                transition: 'var(--transition-base)'
                            }}
                        >
                            {navItems.map((item) => (
                                <Button
                                    key={item.section}
                                    onClick={() => handleNavigation(item.section)}
                                    sx={{
                                        color: 'var(--text-muted)',
                                        fontWeight: 700,
                                        textTransform: 'none',
                                        fontSize: '0.9rem',
                                        px: 2,
                                        py: 1,
                                        borderRadius: '12px',
                                        transition: 'var(--transition-fast)',
                                        '&:hover': {
                                            color: 'var(--accent-color)',
                                            backgroundColor: 'rgba(56, 189, 248, 0.05)',
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>

                        <IconButton
                            onClick={toggleTheme}
                            sx={{
                                color: 'var(--text-color-2)',
                                ml: 2,
                                border: '1px solid var(--border-color)',
                                borderRadius: '12px',
                                transition: 'var(--transition-base)',
                                '&:hover': {
                                    borderColor: 'var(--accent-color)',
                                    color: 'var(--accent-color)',
                                    transform: 'rotate(45deg)'
                                },
                            }}
                        >
                            {darkMode ? <Brightness7 fontSize="small" /> : <Brightness4 fontSize="small" />}
                        </IconButton>
                    </Box>

                    <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
                        <IconButton onClick={toggleTheme} sx={{ color: 'var(--text-color-2)' }}>
                            {darkMode ? <Brightness7 /> : <Brightness4 />}
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
