import React from 'react';
import { Box, Container, Typography, Grid, Link, Stack, IconButton } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider';
import Contact from './footer';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineGlobeAlt } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaBehance, FaTwitter } from 'react-icons/fa';

const ContactPage = () => {
    const { darkMode } = useThemeToggle();

    const contactInfo = [
        {
            title: 'Email Address',
            value: 'rsravan40@gmail.com',
            link: 'mailto:rsravan40@gmail.com',
            icon: <HiOutlineMail size={28} />,
            subtitle: 'Direct line for inquiries'
        },
        {
            title: 'Phone Number',
            value: '+91 76618 24166',
            link: 'tel:+917661824166',
            icon: <HiOutlinePhone size={28} />,
            subtitle: 'Mon-Fri from 9am to 6pm'
        },
        {
            title: 'Office Location',
            value: 'Hyderabad, India',
            link: '#',
            icon: <HiOutlineLocationMarker size={28} />,
            subtitle: 'Working remotely worldwide'
        }
    ];

    const socialLinks = [
        { icon: <FaLinkedin size={22} />, url: "https://www.linkedin.com/in/shravan-rasamalla/", label: "LinkedIn" },
        { icon: <FaGithub size={22} />, url: "https://github.com/shravanweb", label: "GitHub" },
        { icon: <FaBehance size={22} />, url: "https://www.behance.net/shravanrasamalla", label: "Behance" },
        { icon: <FaTwitter size={22} />, url: "#", label: "Twitter" }
    ];

    return (
        <Box
            sx={{
                paddingTop: { xs: '120px', md: '180px' },
                backgroundColor: 'transparent',
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
                    transition={{ duration: 0.8 }}
                    sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}
                >
                    <Typography
                        variant="overline"
                        sx={{
                            color: 'var(--accent-color)',
                            fontWeight: 800,
                            letterSpacing: '3px',
                            mb: 2,
                            display: 'block'
                        }}
                    >
                        Get in Touch
                    </Typography>

                    <Typography
                        variant="h2"
                        className="section-title gradient-text"
                        sx={{ mb: 3 }}
                    >
                        Let's Engineer Something Extraordinary
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: '700px',
                            margin: '0 auto',
                            color: 'var(--text-muted)',
                            lineHeight: 1.8,
                            fontSize: '1.2rem',
                            fontWeight: 300
                        }}
                    >
                        Whether you have a groundbreaking idea or a complex engineering challenge,
                        I'm here to translate your vision into digital excellence.
                    </Typography>
                </Box>

                <Grid container spacing={4} sx={{ mb: 12 }}>
                    {contactInfo.map((info, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Box
                                    className="glass-effect"
                                    sx={{
                                        p: 4,
                                        height: '100%',
                                        borderRadius: '24px',
                                        border: '1px solid var(--border-color)',
                                        textAlign: 'center',
                                        transition: 'var(--transition-base)',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            borderColor: 'var(--accent-color)',
                                            boxShadow: 'var(--shadow-xl)'
                                        }
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '64px',
                                            height: '64px',
                                            borderRadius: '16px',
                                            bgcolor: 'rgba(56, 189, 248, 0.05)',
                                            color: 'var(--accent-color)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 24px',
                                            border: '1px solid rgba(56, 189, 248, 0.1)'
                                        }}
                                    >
                                        {info.icon}
                                    </Box>

                                    <Typography variant="h6" sx={{ fontWeight: 800, color: 'var(--text-color-2)', mb: 1 }}>
                                        {info.title}
                                    </Typography>

                                    <Typography variant="caption" sx={{ color: 'var(--text-muted)', fontWeight: 600, display: 'block', mb: 2 }}>
                                        {info.subtitle}
                                    </Typography>

                                    <Link
                                        href={info.link}
                                        sx={{
                                            color: 'var(--text-color)',
                                            textDecoration: 'none',
                                            fontWeight: 700,
                                            fontSize: '1.05rem',
                                            '&:hover': { color: 'var(--accent-color)' }
                                        }}
                                    >
                                        {info.value}
                                    </Link>
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                <Grid container spacing={8} sx={{ mb: 12 }}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ p: { md: 4 } }}>
                            <Typography variant="h4" sx={{ fontWeight: 900, color: 'var(--text-color-2)', mb: 3 }}>
                                Connect Globally
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'var(--text-muted)', lineHeight: 1.8, mb: 4, fontWeight: 300 }}>
                                Digital boundaries don't exist in my workspace. I collaborate with teams
                                and visionaries across all time zones, ensuring seamless delivery through
                                robust communication and agile workflows.
                            </Typography>

                            <Stack direction="row" spacing={2}>
                                {socialLinks.map((social, index) => (
                                    <IconButton
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        sx={{
                                            color: 'var(--text-muted)',
                                            border: '1px solid var(--border-color)',
                                            borderRadius: '12px',
                                            width: '50px',
                                            height: '50px',
                                            transition: 'var(--transition-base)',
                                            '&:hover': {
                                                color: 'var(--accent-color)',
                                                borderColor: 'var(--accent-color)',
                                                bgcolor: 'rgba(56, 189, 248, 0.05)',
                                                transform: 'translateY(-3px)'
                                            }
                                        }}
                                    >
                                        {social.icon}
                                    </IconButton>
                                ))}
                            </Stack>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box
                            className="glass-effect"
                            sx={{
                                p: 5,
                                borderRadius: '32px',
                                border: '1px solid var(--border-color)',
                                bgcolor: 'rgba(255,255,255,0.01)'
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                <HiOutlineGlobeAlt size={24} style={{ color: 'var(--accent-color)' }} />
                                <Typography variant="h6" sx={{ fontWeight: 800, color: 'var(--text-color-2)' }}>
                                    Current Availability
                                </Typography>
                            </Box>

                            <Typography variant="body2" sx={{ color: 'var(--text-muted)', lineHeight: 1.8, mb: 4 }}>
                                I am currently accepting select freelance projects and strategic partnerships.
                                My typical response time is within 24 hours.
                            </Typography>

                            <Box
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 1.5,
                                    px: 2,
                                    py: 1,
                                    borderRadius: '12px',
                                    bgcolor: 'rgba(16, 185, 129, 0.1)',
                                    border: '1px solid rgba(16, 185, 129, 0.2)'
                                }}
                            >
                                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#10b981' }} />
                                <Typography variant="caption" sx={{ color: '#10b981', fontWeight: 800, letterSpacing: '0.5px' }}>
                                    AVAILABLE FOR NEW PROJECTS
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Contact />
        </Box>
    );
};

export default ContactPage;
