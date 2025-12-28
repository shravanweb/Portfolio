import React from 'react';
import { Box, Container, Typography, Grid, Link, Divider } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider';
import Contact from './footer';

const ContactPage = () => {
    const { darkMode } = useThemeToggle();

    return (
        <Box
            sx={{
                padding: { xs: '60px 20px', md: '120px 40px' },
                backgroundColor: darkMode ? 'var(--bg-primary)' : 'var(--bg-secondary)',
                color: 'var(--text-color)',
                minHeight: '100vh',
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        fontWeight: 900,
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                        mb: 2,
                        textAlign: 'center',
                        background: darkMode 
                            ? 'linear-gradient(135deg, var(--accent-color) 0%, #6366f1 100%)'
                            : 'linear-gradient(135deg, var(--accent-color) 0%, #6366f1 100%)',
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
                        color: 'var(--muted-text)', 
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
                                backgroundColor: darkMode ? 'var(--bg-secondary)' : 'var(--bg-secondary)',
                                border: `1px solid var(--border-color)`,
                                height: '100%',
                                boxShadow: 'var(--shadow-lg)',
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 3, color: 'var(--accent-color)', fontWeight: 600 }}>
                                Contact Information
                            </Typography>
                            
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="body2" sx={{ mb: 1, color: 'var(--muted-text)', fontWeight: 600 }}>
                                    Email Address
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    <Link 
                                        href="mailto:rsravan40@gmail.com" 
                                        sx={{ 
                                            color: 'var(--accent-color)',
                                            textDecoration: 'none',
                                            fontSize: '1.1rem',
                                            transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            '&:hover': {
                                                color: '#6366f1',
                                            },
                                        }}
                                    >
                                        rsravan40@gmail.com
                                    </Link>
                                </Typography>
                            </Box>

                            <Divider sx={{ my: 3, borderColor: 'var(--border-color)' }} />

                            <Box sx={{ mb: 3 }}>
                                <Typography variant="body2" sx={{ mb: 1, color: 'var(--muted-text)', fontWeight: 600 }}>
                                    Phone Number
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    <Link 
                                        href="tel:+91-7661824166" 
                                        sx={{ 
                                            color: 'var(--accent-color)',
                                            textDecoration: 'none',
                                            fontSize: '1.1rem',
                                            transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            '&:hover': {
                                                color: '#6366f1',
                                            },
                                        }}
                                    >
                                        +91-7661824166
                                    </Link>
                                </Typography>
                            </Box>

                            <Divider sx={{ my: 3, borderColor: 'var(--border-color)' }} />

                            <Box sx={{ mb: 3 }}>
                                <Typography variant="body2" sx={{ mb: 1, color: 'var(--muted-text)', fontWeight: 600 }}>
                                    Location
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'var(--text-color)', fontSize: '1.1rem' }}>
                                    India
                                </Typography>
                            </Box>

                            <Divider sx={{ my: 3, borderColor: 'var(--border-color)' }} />

                            <Box>
                                <Typography variant="body2" sx={{ mb: 2, color: 'var(--muted-text)', fontWeight: 600 }}>
                                    Social Media
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                    <Link 
                                        href="https://www.linkedin.com/in/shravan-rasamalla/" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ 
                                            color: 'var(--accent-color)',
                                            textDecoration: 'none',
                                            transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            '&:hover': {
                                                color: '#6366f1',
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
                                            color: 'var(--accent-color)',
                                            textDecoration: 'none',
                                            transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            '&:hover': {
                                                color: '#6366f1',
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
                                            color: 'var(--accent-color)',
                                            textDecoration: 'none',
                                            transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            '&:hover': {
                                                color: '#6366f1',
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
                                backgroundColor: darkMode ? 'var(--bg-secondary)' : 'var(--bg-secondary)',
                                border: `1px solid var(--border-color)`,
                                height: '100%',
                                boxShadow: 'var(--shadow-lg)',
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 3, color: 'var(--accent-color)', fontWeight: 600 }}>
                                Get in Touch
                            </Typography>
                            
                            <Typography variant="body1" sx={{ mb: 3, color: 'var(--text-color)', lineHeight: 1.9 }}>
                                I'm available for freelance projects, full-time opportunities, and collaborations. Feel free to reach out through any of the contact methods listed.
                            </Typography>

                            <Box sx={{ mb: 3 }}>
                                <Typography variant="body2" sx={{ mb: 1, color: 'var(--muted-text)', fontWeight: 600 }}>
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
