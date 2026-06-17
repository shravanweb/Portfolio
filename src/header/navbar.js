import React, { useState, useEffect } from 'react';
import {
    AppBar, Toolbar, Button, Box, Typography, IconButton,
    Container, Drawer, List, ListItem, ListItemButton, ListItemText, Divider
} from '@mui/material';
import { Brightness4, Brightness7, Menu, Close } from '@mui/icons-material';
import { useThemeToggle } from '../app/ThemeToggleProvider';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ scrollToSection }) => {
    const { toggleTheme, darkMode } = useThemeToggle();
    const navigate = useNavigate();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
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
        setMobileOpen(false);
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: section }, replace: false });
        } else {
            scrollToSection(section);
        }
    };

    const handleLogoClick = () => {
        setMobileOpen(false);
        if (location.pathname !== '/') {
            navigate('/');
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(20px)' : 'none',
                    WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
                    boxShadow: scrolled
                        ? (darkMode
                            ? '0 1px 0 rgba(56, 189, 248, 0.1), 0 4px 20px rgba(0,0,0,0.3)'
                            : '0 1px 0 rgba(0,0,0,0.08), 0 4px 20px rgba(0,0,0,0.06)')
                        : 'none',
                    borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
                    transition: 'var(--transition-base)',
                    backgroundImage: 'none',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        disableGutters
                        sx={{
                            justifyContent: 'space-between',
                            py: scrolled ? 0.75 : 1.5,
                            transition: 'var(--transition-base)',
                        }}
                    >
                        {/* Logo */}
                        <Typography
                            variant="h5"
                            onClick={handleLogoClick}
                            sx={{
                                fontWeight: 900,
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                letterSpacing: '-1.5px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 0,
                                userSelect: 'none',
                            }}
                        >
                            <Box component="span" sx={{
                                color: 'var(--accent-color)',
                                fontSize: '1.7rem',
                                lineHeight: 1,
                            }}>S</Box>
                            <Box component="span" sx={{ color: 'var(--text-color-2)', opacity: 0.9 }}>hravan</Box>
                        </Typography>

                        {/* Desktop Nav */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.section}
                                    onClick={() => handleNavigation(item.section)}
                                    sx={{
                                        color: 'var(--text-muted)',
                                        fontWeight: 600,
                                        textTransform: 'none',
                                        fontSize: '0.9rem',
                                        px: 1.75,
                                        py: 0.875,
                                        borderRadius: '10px',
                                        transition: 'var(--transition-fast)',
                                        '&:hover': {
                                            color: 'var(--accent-color)',
                                            backgroundColor: 'rgba(37, 99, 235, 0.06)',
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}

                            {/* Theme Toggle */}
                            <IconButton
                                onClick={toggleTheme}
                                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                                sx={{
                                    ml: 1.5,
                                    color: 'var(--text-color-2)',
                                    border: '1.5px solid var(--border-color)',
                                    borderRadius: '10px',
                                    p: 0.875,
                                    transition: 'var(--transition-base)',
                                    '&:hover': {
                                        borderColor: 'var(--accent-color)',
                                        color: 'var(--accent-color)',
                                        backgroundColor: 'rgba(37, 99, 235, 0.06)',
                                        transform: 'rotate(20deg)',
                                    },
                                }}
                            >
                                {darkMode
                                    ? <Brightness7 sx={{ fontSize: '1.1rem' }} />
                                    : <Brightness4 sx={{ fontSize: '1.1rem' }} />}
                            </IconButton>
                        </Box>

                        {/* Mobile controls */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
                            <IconButton
                                onClick={toggleTheme}
                                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                                sx={{
                                    color: 'var(--text-color-2)',
                                    border: '1.5px solid var(--border-color)',
                                    borderRadius: '10px',
                                    p: 0.75,
                                }}
                            >
                                {darkMode ? <Brightness7 fontSize="small" /> : <Brightness4 fontSize="small" />}
                            </IconButton>
                            <IconButton
                                onClick={() => setMobileOpen(true)}
                                aria-label="Open menu"
                                sx={{
                                    color: 'var(--text-color-2)',
                                    border: '1.5px solid var(--border-color)',
                                    borderRadius: '10px',
                                    p: 0.75,
                                }}
                            >
                                <Menu fontSize="small" />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                PaperProps={{
                    sx: {
                        width: 280,
                        backgroundColor: darkMode ? '#0c1628' : '#ffffff',
                        borderLeft: '1px solid var(--border-color)',
                        px: 2,
                        py: 3,
                    }
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, px: 1 }}>
                    <Typography sx={{ fontWeight: 900, fontSize: '1.3rem', letterSpacing: '-1px' }}>
                        <Box component="span" sx={{ color: 'var(--accent-color)' }}>S</Box>
                        <Box component="span" sx={{ color: 'var(--text-color-2)' }}>hravan</Box>
                    </Typography>
                    <IconButton
                        onClick={() => setMobileOpen(false)}
                        sx={{ color: 'var(--text-muted)', border: '1px solid var(--border-color)', borderRadius: '8px', p: 0.5 }}
                    >
                        <Close fontSize="small" />
                    </IconButton>
                </Box>

                <Divider sx={{ borderColor: 'var(--border-color)', mb: 2 }} />

                <List disablePadding>
                    {navItems.map((item) => (
                        <ListItem key={item.section} disablePadding>
                            <ListItemButton
                                onClick={() => handleNavigation(item.section)}
                                sx={{
                                    borderRadius: '10px',
                                    mb: 0.5,
                                    py: 1.25,
                                    color: 'var(--text-muted)',
                                    '&:hover': {
                                        backgroundColor: darkMode
                                            ? 'rgba(56, 189, 248, 0.06)'
                                            : 'rgba(3, 105, 161, 0.06)',
                                        color: 'var(--accent-color)',
                                    },
                                }}
                            >
                                <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{ fontWeight: 600, fontSize: '1rem' }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;
