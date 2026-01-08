import React from 'react';
import { Box, Container, Typography, Grid, Link, Divider } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider';
import Contact from './footer';
import { motion } from 'framer-motion';

const ContactPage = () => {
    const { darkMode } = useThemeToggle();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <Box
            sx={{
                paddingTop: { xs: '100px', md: '140px' },
                paddingBottom: '0',
                backgroundColor: darkMode ? 'var(--bg-primary)' : 'var(--bg-secondary)',
                color: 'var(--text-color)',
                minHeight: '100vh',
                position: 'relative',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    sx={{ textAlign: 'center', mb: 10 }}
                >
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontWeight: 900,
                            fontSize: { xs: '2.5rem', md: '4rem' },
                            mb: 2,
                            background: darkMode
                                ? 'linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)'
                                : 'linear-gradient(135deg, #0066ff 0%, #6366f1 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            letterSpacing: '-1.5px',
                        }}
                    >
                        Contact Us
                    </Typography>

                    <Box
                        sx={{
                            width: '80px',
                            height: '4px',
                            background: darkMode
                                ? 'linear-gradient(90deg, #00d4ff, #0066ff)'
                                : 'linear-gradient(90deg, #0066ff, #6366f1)',
                            margin: '0 auto',
                            borderRadius: '2px',
                            mb: 3,
                        }}
                    />

                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: '700px',
                            margin: '0 auto',
                            color: 'var(--text-muted)',
                            lineHeight: 1.8,
                            fontSize: '1.2rem',
                        }}
                    >
                        Get in touch with us. We'd love to hear from you and answer any questions you may have.
                    </Typography>
                </Box>

                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    component={motion.div}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Contact Information */}
                    <Grid item xs={12} md={6} component={motion.div} variants={itemVariants}>
                        <Box
                            sx={{
                                p: 5,
                                borderRadius: '24px',
                                backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.03)' : '#ffffff',
                                backdropFilter: 'blur(10px)',
                                border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
                                height: '100%',
                                boxShadow: darkMode ? 'none' : '0 10px 40px rgba(0,0,0,0.05)',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                }
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 4, color: darkMode ? '#fff' : '#1a1a1a', fontWeight: 700 }}>
                                Contact Information
                            </Typography>

                            <Box sx={{ mb: 4 }}>
                                <Typography variant="caption" sx={{ display: 'block', mb: 1, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                                    Email Address
                                </Typography>
                                <Typography variant="body1">
                                    <Link
                                        href="mailto:rsravan40@gmail.com"
                                        sx={{
                                            color: darkMode ? '#00d4ff' : '#0066ff',
                                            textDecoration: 'none',
                                            fontSize: '1.2rem',
                                            fontWeight: 500,
                                            transition: 'color 0.3s ease',
                                            '&:hover': { color: '#6366f1' },
                                        }}
                                    >
                                        rsravan40@gmail.com
                                    </Link>
                                </Typography>
                            </Box>

                            <Divider sx={{ my: 3, borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />

                            <Box sx={{ mb: 4 }}>
                                <Typography variant="caption" sx={{ display: 'block', mb: 1, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                                    Phone Number
                                </Typography>
                                <Typography variant="body1">
                                    <Link
                                        href="tel:+91-7661824166"
                                        sx={{
                                            color: darkMode ? '#00d4ff' : '#0066ff',
                                            textDecoration: 'none',
                                            fontSize: '1.2rem',
                                            fontWeight: 500,
                                            transition: 'color 0.3s ease',
                                            '&:hover': { color: '#6366f1' },
                                        }}
                                    >
                                        +91-7661824166
                                    </Link>
                                </Typography>
                            </Box>

                            <Divider sx={{ my: 3, borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />

                            <Box sx={{ mb: 4 }}>
                                <Typography variant="caption" sx={{ display: 'block', mb: 1, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                                    Location
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                                    India
                                </Typography>
                            </Box>

                            <Divider sx={{ my: 3, borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />

                            <Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 2, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                                    Social Media
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 3 }}>
                                    {[
                                        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shravan-rasamalla/' },
                                        { name: 'GitHub', url: 'https://github.com/shravanweb' },
                                        { name: 'Behance', url: 'https://www.behance.net/sravankumar9' }
                                    ].map((social) => (
                                        <Link
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                color: darkMode ? '#e0e0e0' : '#555',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease',
                                                '&:hover': { color: darkMode ? '#00d4ff' : '#0066ff', transform: 'translateY(-2px)' },
                                            }}
                                        >
                                            {social.name}
                                        </Link>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Business Hours / Additional Info */}
                    <Grid item xs={12} md={6} component={motion.div} variants={itemVariants}>
                        <Box
                            sx={{
                                p: 5,
                                borderRadius: '24px',
                                backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.03)' : '#ffffff',
                                backdropFilter: 'blur(10px)',
                                border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
                                height: '100%',
                                boxShadow: darkMode ? 'none' : '0 10px 40px rgba(0,0,0,0.05)',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                }
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 3, color: darkMode ? '#fff' : '#1a1a1a', fontWeight: 700 }}>
                                Get in Touch
                            </Typography>

                            <Typography variant="body1" sx={{ mb: 4, color: 'var(--text-color)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                                I'm available for freelance projects, full-time opportunities, and collaborations. Feel free to reach out through any of the contact methods listed.
                            </Typography>

                            <Box sx={{ mb: 4 }}>
                                <Typography variant="caption" sx={{ display: 'block', mb: 1, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                                    Response Time
                                </Typography>
                                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <span style={{ color: '#4caf50' }}>●</span> I typically respond within 24-48 hours
                                </Typography>
                            </Box>

                            <Divider sx={{ my: 3, borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />

                            <Box>
                                <Typography variant="caption" sx={{ display: 'block', mb: 2, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                                    Services Offered
                                </Typography>
                                <Box component="ul" sx={{
                                    pl: 2,
                                    color: 'var(--text-color)',
                                    lineHeight: 2,
                                    '& li': {
                                        marginBottom: '8px',
                                    }
                                }}>
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

                <Box sx={{ mt: 8, textAlign: 'center', mb: 4 }}>
                    <Typography variant="body2" sx={{ color: 'var(--text-muted)' }}>
                        For business inquiries, project proposals, or general questions, please use the contact information above.
                    </Typography>
                </Box>
            </Container>
            <Contact />
        </Box>
    );
};

export default ContactPage;
