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
                backgroundColor: darkMode ? '#000000' : '#1a1a1a',
                color: darkMode ? '#fff' : '#fff',
                py: 6,
                borderTop: `1px solid ${darkMode ? '#333' : '#2a2a2a'}`,
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
                                    ? 'linear-gradient(135deg, #ffffff 0%, #ffcc00 100%)'
                                    : 'linear-gradient(135deg, #ffffff 0%, #007fff 100%)',
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
                                color: '#aaa',
                                mb: 2,
                            }}
                        >
                            Frontend Developer | UI Designer
                        </Typography>
                        <Typography 
                            variant="body2" 
                            sx={{ 
                                color: '#888',
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
                                color: darkMode ? '#ffcc00' : '#007fff',
                            }}
                        >
                            Quick Links
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            <Link 
                                href="#home" 
                                sx={{ 
                                    color: '#aaa',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s',
                                    '&:hover': {
                                        color: darkMode ? '#ffcc00' : '#007fff',
                                    },
                                }}
                            >
                                Home
                            </Link>
                            <Link 
                                href="#about" 
                                sx={{ 
                                    color: '#aaa',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s',
                                    '&:hover': {
                                        color: darkMode ? '#ffcc00' : '#007fff',
                                    },
                                }}
                            >
                                About
                            </Link>
                            <Link 
                                href="#skills" 
                                sx={{ 
                                    color: '#aaa',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s',
                                    '&:hover': {
                                        color: darkMode ? '#ffcc00' : '#007fff',
                                    },
                                }}
                            >
                                Skills
                            </Link>
                            <Link 
                                href="#projects" 
                                sx={{ 
                                    color: '#aaa',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s',
                                    '&:hover': {
                                        color: darkMode ? '#ffcc00' : '#007fff',
                                    },
                                }}
                            >
                                Projects
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Typography 
                            variant="h6" 
                            sx={{ 
                                fontWeight: 600, 
                                mb: 3,
                                color: darkMode ? '#ffcc00' : '#007fff',
                            }}
                        >
                            Contact Me
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            <Typography 
                                variant="body2" 
                                sx={{ 
                                    color: '#aaa',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                }}
                            >
                                📧 <Link 
                                    href="mailto:rsravan40@gmail.com" 
                                    sx={{ 
                                        color: '#aaa',
                                        textDecoration: 'none',
                                        transition: 'color 0.3s',
                                        '&:hover': {
                                            color: darkMode ? '#ffcc00' : '#007fff',
                                        },
                                    }}
                                >
                                    rsravan40@gmail.com
                                </Link>
                            </Typography>
                            <Typography 
                                variant="body2" 
                                sx={{ 
                                    color: '#aaa',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                }}
                            >
                                📱 <Link 
                                    href="tel:+91-7661824166" 
                                    sx={{ 
                                        color: '#aaa',
                                        textDecoration: 'none',
                                        transition: 'color 0.3s',
                                        '&:hover': {
                                            color: darkMode ? '#ffcc00' : '#007fff',
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
                        borderTop: `1px solid ${darkMode ? '#333' : '#2a2a2a'}`,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#888',
                        }}
                    >
                        © {new Date().getFullYear()} Shravan Rasamalla. All rights reserved.
                    </Typography>
                    {!loading && visitorCount !== null && visitorCount > 0 && (
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#888',
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
