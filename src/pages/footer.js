import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Stack } from '@mui/material';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaBehance, FaTwitter } from 'react-icons/fa';
import useVisitorCount from '../hooks/useVisitorCount';
import { useThemeToggle } from '../app/ThemeToggleProvider';

const Footer = () => {
    const { visitorCount, loading } = useVisitorCount();
    const { darkMode } = useThemeToggle();

    const socialLinks = [
        { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/shravan-rasamalla/", label: "LinkedIn" },
        { icon: <FaGithub size={20} />, url: "https://github.com/shravanweb", label: "GitHub" },
        { icon: <FaBehance size={20} />, url: "https://www.behance.net/shravanrasamalla", label: "Behance" },
        { icon: <FaTwitter size={20} />, url: "#", label: "Twitter" }
    ];

    const quickLinks = [
        { name: "Home", url: "/" },
        { name: "About Us", url: "/about" },
        { name: "Contact Us", url: "/contact" },
        { name: "Privacy Policy", url: "/privacy" },
        { name: "Terms & Conditions", url: "/terms" }
    ];

    return (
        <Box
            id="footer"
            sx={{
                backgroundColor: darkMode ? 'var(--bg-secondary)' : '#f8fafc',
                color: 'var(--text-color)',
                pt: 10,
                pb: 6,
                borderTop: '1px solid var(--border-color)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={8}>
                    <Grid item xs={12} md={5}>
                        <Typography
                            variant="h4"
                            className="gradient-text"
                            sx={{ fontWeight: 900, mb: 3, fontSize: '1.8rem' }}
                        >
                            Shravan Rasamalla
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'var(--text-muted)',
                                mb: 4,
                                lineHeight: 1.8,
                                maxWidth: '400px',
                                fontSize: '1.05rem'
                            }}
                        >
                            Architecting premium digital experiences through
                            human-centric design and high-performance engineering.
                        </Typography>
                        <Stack direction="row" spacing={1.5}>
                            {socialLinks.map((social, index) => (
                                <IconButton
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    sx={{
                                        color: 'var(--text-muted)',
                                        border: '1px solid var(--border-color)',
                                        transition: 'var(--transition-base)',
                                        '&:hover': {
                                            color: 'var(--accent-color)',
                                            borderColor: 'var(--accent-color)',
                                            transform: 'translateY(-3px)',
                                            bgcolor: 'rgba(56, 189, 248, 0.05)'
                                        }
                                    }}
                                >
                                    {social.icon}
                                </IconButton>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid item xs={6} md={3}>
                        <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 800, mb: 3, color: 'var(--text-color-2)', textTransform: 'uppercase', letterSpacing: '1px' }}
                        >
                            Sitemap
                        </Typography>
                        <Stack spacing={2}>
                            {quickLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url}
                                    sx={{
                                        color: 'var(--text-muted)',
                                        textDecoration: 'none',
                                        fontSize: '0.95rem',
                                        transition: 'var(--transition-base)',
                                        '&:hover': { color: 'var(--accent-color)', pl: 0.5 }
                                    }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid item xs={6} md={4}>
                        <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 800, mb: 3, color: 'var(--text-color-2)', textTransform: 'uppercase', letterSpacing: '1px' }}
                        >
                            Contact
                        </Typography>
                        <Stack spacing={3}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <HiOutlineMail size={24} style={{ color: 'var(--accent-color)' }} />
                                <Link
                                    href="mailto:rsravan40@gmail.com"
                                    sx={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem', '&:hover': { color: 'var(--accent-color)' } }}
                                >
                                    rsravan40@gmail.com
                                </Link>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <HiOutlinePhone size={24} style={{ color: 'var(--accent-color)' }} />
                                <Link
                                    href="tel:+917661824166"
                                    sx={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem', '&:hover': { color: 'var(--accent-color)' } }}
                                >
                                    +91 76618 24166
                                </Link>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <HiOutlineLocationMarker size={24} style={{ color: 'var(--accent-color)' }} />
                                <Typography variant="body2" sx={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                    Hyderabad, India
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        mt: 10,
                        pt: 6,
                        borderTop: '1px solid var(--border-color)',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 4
                    }}
                >
                    <Typography variant="body2" sx={{ color: 'var(--text-muted)', fontWeight: 500 }}>
                        © {new Date().getFullYear()} Shravan Rasamalla.
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        {!loading && visitorCount !== null && (
                            <Box
                                className="glass-effect"
                                sx={{
                                    px: 2,
                                    py: 1,
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5,
                                    border: '1px solid var(--border-color)',
                                    bgcolor: 'rgba(255,255,255,0.02)'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        bgcolor: '#10b981',
                                        boxShadow: '0 0 10px #10b981',
                                        animation: 'pulse 2s infinite'
                                    }}
                                />
                                <Typography variant="caption" sx={{ color: 'var(--text-color-2)', fontWeight: 700, letterSpacing: '0.5px' }}>
                                    {visitorCount.toLocaleString()} VISITORS
                                </Typography>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Container>

            <style>
                {`
                @keyframes pulse {
                    0% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.2); }
                    100% { opacity: 1; transform: scale(1); }
                }
                `}
            </style>
        </Box>
    );
};

export default Footer;
