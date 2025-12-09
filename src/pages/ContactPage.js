import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider';
import Contact from './footer';

const ContactPage = () => {
    const { darkMode } = useThemeToggle();

    return (
        <Box
            sx={{
                padding: { xs: '60px 20px', md: '100px 40px' },
                backgroundColor: darkMode ? '#0a0a0a' : '#ffffff',
                color: darkMode ? '#fff' : '#333',
                minHeight: '100vh',
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: '2rem', md: '3rem' },
                        mb: 4,
                        textAlign: 'center',
                        background: darkMode 
                            ? 'linear-gradient(135deg, #ffffff 0%, #ffcc00 100%)'
                            : 'linear-gradient(135deg, #007fff 0%, #005fbb 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    Contact Us
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                p: 4,
                                borderRadius: '20px',
                                backgroundColor: darkMode ? '#1e1e1e' : '#f8f9fa',
                                border: `2px solid ${darkMode ? 'rgba(255, 204, 0, 0.1)' : 'rgba(0, 127, 255, 0.1)'}`,
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 3, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                                Get in Touch
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                                <strong>Email:</strong>{' '}
                                <Link href="mailto:rsravan40@gmail.com" sx={{ color: darkMode ? '#ffcc00' : '#007fff' }}>
                                    rsravan40@gmail.com
                                </Link>
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                                <strong>Phone:</strong>{' '}
                                <Link href="tel:+91-7661824166" sx={{ color: darkMode ? '#ffcc00' : '#007fff' }}>
                                    +91-7661824166
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Contact />
        </Box>
    );
};

export default ContactPage;

