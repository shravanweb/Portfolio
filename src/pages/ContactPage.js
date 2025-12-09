import React from 'react';
import { Box, Container, Typography, Grid, Link, Divider } from '@mui/material';
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

                <Typography 
                    variant="body1" 
                    sx={{ 
                        mb: 6, 
                        textAlign: 'center',
                        color: darkMode ? '#e0e0e0' : '#555', 
                        lineHeight: 1.9,
                        fontSize: '1.1rem',
                    }}
                >
                    Get in touch with us. We'd love to hear from you and answer any questions you may have.
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {/* Contact Information */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                p: 4,
                                borderRadius: '20px',
                                backgroundColor: darkMode ? '#1e1e1e' : '#f8f9fa',
                                border: `2px solid ${darkMode ? 'rgba(255, 204, 0, 0.1)' : 'rgba(0, 127, 255, 0.1)'}`,
                                height: '100%',
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 3, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                                Contact Information
                            </Typography>
                            
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="body2" sx={{ mb: 1, color: darkMode ? '#888' : '#666', fontWeight: 600 }}>
                                    Email Address
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    <Link 
                                        href="mailto:rsravan40@gmail.com" 
                                        sx={{ 
                                            color: darkMode ? '#ffcc00' : '#007fff',
                                            textDecoration: 'none',
                                            fontSize: '1.1rem',
                                            '&:hover': {
                                                textDecoration: 'underline',
                                            },
                                        }}
                                    >
                                        rsravan40@gmail.com
                                    </Link>
                                </Typography>
                            </Box>

                            <Divider sx={{ my: 3, borderColor: darkMode ? '#333' : '#e0e0e0' }} />

                            <Box sx={{ mb: 3 }}>
                                <Typography variant="body2" sx={{ mb: 1, color: darkMode ? '#888' : '#666', fontWeight: 600 }}>
                                    Phone Number
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    <Link 
                                        href="tel:+91-7661824166" 
                                        sx={{ 
                                            color: darkMode ? '#ffcc00' : '#007fff',
                                            textDecoration: 'none',
                                            fontSize: '1.1rem',
                                            '&:hover': {
                                                textDecoration: 'underline',
                                            },
                                        }}
                                    >
                                        +91-7661824166
                                    </Link>
                                </Typography>
                            </Box>

                            <Divider sx={{ my: 3, borderColor: darkMode ? '#333' : '#e0e0e0' }} />

                            <Box sx={{ mb: 3 }}>
                                <Typography variant="body2" sx={{ mb: 1, color: darkMode ? '#888' : '#666', fontWeight: 600 }}>
                                    Location
                                </Typography>
                                <Typography variant="body1" sx={{ color: darkMode ? '#e0e0e0' : '#555', fontSize: '1.1rem' }}>
                                    India
                                </Typography>
                            </Box>

                            <Divider sx={{ my: 3, borderColor: darkMode ? '#333' : '#e0e0e0' }} />

                            <Box>
                                <Typography variant="body2" sx={{ mb: 2, color: darkMode ? '#888' : '#666', fontWeight: 600 }}>
                                    Social Media
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                    <Link 
                                        href="https://www.linkedin.com/in/shravan-rasamalla/" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ 
                                            color: darkMode ? '#ffcc00' : '#007fff',
                                            textDecoration: 'none',
                                            '&:hover': {
                                                textDecoration: 'underline',
                                            },
                                        }}
                                    >
                                        LinkedIn Profile
                                    </Link>
                                    <Link 
                                        href="https://github.com/shravanweb" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ 
                                            color: darkMode ? '#ffcc00' : '#007fff',
                                            textDecoration: 'none',
                                            '&:hover': {
                                                textDecoration: 'underline',
                                            },
                                        }}
                                    >
                                        GitHub Profile
                                    </Link>
                                    <Link 
                                        href="https://www.behance.net/sravankumar9" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ 
                                            color: darkMode ? '#ffcc00' : '#007fff',
                                            textDecoration: 'none',
                                            '&:hover': {
                                                textDecoration: 'underline',
                                            },
                                        }}
                                    >
                                        Behance Portfolio
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Business Hours / Additional Info */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                p: 4,
                                borderRadius: '20px',
                                backgroundColor: darkMode ? '#1e1e1e' : '#f8f9fa',
                                border: `2px solid ${darkMode ? 'rgba(255, 204, 0, 0.1)' : 'rgba(0, 127, 255, 0.1)'}`,
                                height: '100%',
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 3, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                                Get in Touch
                            </Typography>
                            
                            <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                                I'm available for freelance projects, full-time opportunities, and collaborations. Feel free to reach out through any of the contact methods listed.
                            </Typography>

                            <Box sx={{ mb: 3 }}>
                                <Typography variant="body2" sx={{ mb: 1, color: darkMode ? '#888' : '#666', fontWeight: 600 }}>
                                    Response Time
                                </Typography>
                                <Typography variant="body1" sx={{ color: darkMode ? '#e0e0e0' : '#555' }}>
                                    I typically respond within 24-48 hours
                                </Typography>
                            </Box>

                            <Divider sx={{ my: 3, borderColor: darkMode ? '#333' : '#e0e0e0' }} />

                            <Box>
                                <Typography variant="body2" sx={{ mb: 2, color: darkMode ? '#888' : '#666', fontWeight: 600 }}>
                                    Services Offered
                                </Typography>
                                <Box component="ul" sx={{ pl: 2, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                                    <li>Website Design & Development</li>
                                    <li>UI/UX Design</li>
                                    <li>Logo Design</li>
                                    <li>Video Design & Editing</li>
                                    <li>Frontend Development</li>
                                    <li>Consulting Services</li>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 6, textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ color: darkMode ? '#888' : '#666' }}>
                        For business inquiries, project proposals, or general questions, please use the contact information above.
                    </Typography>
                </Box>
            </Container>
            <Contact />
        </Box>
    );
};

export default ContactPage;
