import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider';
import useVisitorCount from '../hooks/useVisitorCount';

const Footer = () => {
    const { darkMode } = useThemeToggle();
    const { visitorCount, loading } = useVisitorCount();

    return (
        <Box
            sx={{
                backgroundColor: darkMode ? 'var(--bg-primary)' : 'var(--bg-secondary)',
                color: 'var(--text-color)',
                py: 8,
                borderTop: `1px solid var(--border-color)`,
                position: 'relative',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography 
                            variant="h5" 
                            sx={{ 
                                fontWeight: 700,
                                mb: 2,
                                background: darkMode 
                                    ? 'linear-gradient(135deg, var(--accent-color) 0%, #6366f1 100%)'
                                    : 'linear-gradient(135deg, var(--accent-color) 0%, #6366f1 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Shravan Rasamalla
                        </Typography>
                        <Typography 
                            variant="body2" 
                            sx={{ 
                                color: 'var(--muted-text)',
                                mb: 2,
                            }}
                        >
                            Frontend Developer | UI Designer
                        </Typography>
                        <Typography 
                            variant="body2" 
                            sx={{ 
                                color: 'var(--muted-text)',
                                lineHeight: 1.8,
                            }}
                        >
                            Creating beautiful and functional web experiences with modern technologies and creative design.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Typography 
                            variant="h6" 
                            sx={{ 
                                fontWeight: 600, 
                                mb: 3,
                                color: 'var(--accent-color)',
                            }}
                        >
                            Quick Links
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            <Link 
                                href="/" 
                                sx={{ 
                                    color: 'var(--muted-text)',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        color: 'var(--accent-color)',
                                    },
                                }}
                            >
                                Home
                            </Link>
                            <Link 
                                href="/about" 
                                sx={{ 
                                    color: 'var(--muted-text)',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        color: 'var(--accent-color)',
                                    },
                                }}
                            >
                                About Us
                            </Link>
                            <Link 
                                href="/contact" 
                                sx={{ 
                                    color: 'var(--muted-text)',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        color: 'var(--accent-color)',
                                    },
                                }}
                            >
                                Contact Us
                            </Link>
                            <Link 
                                href="/terms" 
                                sx={{ 
                                    color: 'var(--muted-text)',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        color: 'var(--accent-color)',
                                    },
                                }}
                            >
                                Terms & Conditions
                            </Link>
                            <Link 
                                href="/privacy" 
                                sx={{ 
                                    color: 'var(--muted-text)',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        color: 'var(--accent-color)',
                                    },
                                }}
                            >
                                Privacy Policy
                            </Link>
                            <Link 
                                href="/disclaimer" 
                                sx={{ 
                                    color: 'var(--muted-text)',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        color: 'var(--accent-color)',
                                    },
                                }}
                            >
                                Disclaimer
                            </Link>
                            <Link 
                                href="/cookie-policy" 
                                sx={{ 
                                    color: 'var(--muted-text)',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        color: 'var(--accent-color)',
                                    },
                                }}
                            >
                                Cookie Policy
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Typography 
                            variant="h6" 
                            sx={{ 
                                fontWeight: 600, 
                                mb: 3,
                                color: 'var(--accent-color)',
                            }}
                        >
                            Contact Me
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            <Typography 
                                variant="body2" 
                                sx={{ 
                                    color: 'var(--muted-text)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                }}
                            >
                                📧 <Link 
                                    href="mailto:rsravan40@gmail.com" 
                                    sx={{ 
                                        color: 'var(--muted-text)',
                                        textDecoration: 'none',
                                        transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            color: 'var(--accent-color)',
                                        },
                                    }}
                                >
                                    rsravan40@gmail.com
                                </Link>
                            </Typography>
                            <Typography 
                                variant="body2" 
                                sx={{ 
                                    color: 'var(--muted-text)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                }}
                            >
                                📱 <Link 
                                    href="tel:+91-7661824166" 
                                    sx={{ 
                                        color: 'var(--muted-text)',
                                        textDecoration: 'none',
                                        transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            color: 'var(--accent-color)',
                                        },
                                    }}
                                >
                                    +91-7661824166
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        textAlign: 'center',
                        mt: 6,
                        pt: 4,
                        borderTop: `1px solid var(--border-color)`,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'var(--muted-text)',
                        }}
                    >
                        © {new Date().getFullYear()} Shravan Rasamalla. All rights reserved.
                    </Typography>
                    {!loading && visitorCount !== null && visitorCount > 0 && (
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'var(--muted-text)',
                                fontSize: '0.875rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            <Box
                                component="span"
                                sx={{
                                    display: 'inline-block',
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: darkMode ? '#4caf50' : '#66bb6a',
                                    animation: 'pulse 2s infinite',
                                    '@keyframes pulse': {
                                        '0%': { opacity: 1 },
                                        '50%': { opacity: 0.5 },
                                        '100%': { opacity: 1 },
                                    },
                                }}
                            />
                            Total Visitors: <strong style={{ color: darkMode ? '#ffcc00' : '#007fff' }}>{visitorCount.toLocaleString()}</strong>
                        </Typography>
                    )}
                    {!loading && visitorCount === null && (
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#888',
                                fontSize: '0.875rem',
                            }}
                        >
                            Loading visitor count...
                        </Typography>
                    )}
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
