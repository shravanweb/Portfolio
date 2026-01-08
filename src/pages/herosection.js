import React from 'react';
import { Grid, Typography, Button, Box, IconButton, Container } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider';
import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa';
import DownloadIcon from '@mui/icons-material/Download';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Pic from "../assets/images/pic.png";
import Download from "../assets/Shravan_Rasamalla-Ui Developer.doc";
import HeroBackground3D from '../components/HeroBackground3D';

const Herosection = () => {
    const { darkMode } = useThemeToggle();

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
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
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundColor: darkMode ? 'var(--bg-primary)' : 'var(--bg-primary)',
                color: darkMode ? 'var(--text-color)' : 'var(--text-color)',
                textAlign: 'center',
                overflow: 'hidden',
                pt: { xs: 10, md: 0 }, // Add padding top on mobile to account for navbar
            }}
        >
            {/* Beautiful 3D Animated Background */}
            <HeroBackground3D />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={12} md={10}>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div variants={itemVariants}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: darkMode ? 'var(--accent-color)' : 'var(--accent-color)',
                                        fontWeight: 600,
                                        letterSpacing: '2px',
                                        mb: 2,
                                        textTransform: 'uppercase',
                                        fontSize: '0.9rem',
                                    }}
                                >
                                    Welcome to my portfolio
                                </Typography>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Typography
                                    variant="h1"
                                    component="h1"
                                    sx={{
                                        fontWeight: 900,
                                        mb: 2,
                                        fontSize: { xs: '3rem', sm: '4rem', md: '5.5rem' },
                                        background: darkMode
                                            ? 'linear-gradient(135deg, #fff 0%, #b3b3b3 100%)'
                                            : 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        letterSpacing: '-2px',
                                        lineHeight: '1.1',
                                    }}
                                >
                                    Hi, I'm Shravan
                                </Typography>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Box
                                    sx={{
                                        mb: 4,
                                        minHeight: '60px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Typography
                                        variant="h2"
                                        component="div"
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                                            background: darkMode
                                                ? 'linear-gradient(135deg, #00d4ff 0%, #6366f1 100%)'
                                                : 'linear-gradient(135deg, #0066ff 0%, #6366f1 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                            letterSpacing: '-0.5px',
                                        }}
                                    >
                                        <TypeAnimation
                                            sequence={[
                                                'Front End Developer',
                                                2000,
                                                'UI/UX Designer',
                                                2000,
                                                'Creative Creator',
                                                2000,
                                            ]}
                                            speed={50}
                                            repeat={Infinity}
                                            cursor={true}
                                        />
                                    </Typography>
                                </Box>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        mb: 6,
                                        color: 'var(--text-muted)',
                                        fontWeight: 400,
                                        fontSize: { xs: '1rem', md: '1.25rem' },
                                        maxWidth: '700px',
                                        margin: '0 auto 3rem',
                                        lineHeight: 1.8,
                                    }}
                                >
                                    Crafting beautiful, functional, and user-centered digital experiences.
                                    Specializing in modern frontend development and interactive design solutions
                                    that leave a lasting impression.
                                </Typography>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 6, flexWrap: 'wrap' }}>
                                    <Button
                                        variant="contained"
                                        startIcon={<ContactMailIcon />}
                                        href="/contact"
                                        sx={{
                                            padding: '16px 48px',
                                            fontSize: '1rem',
                                            fontWeight: 700,
                                            borderRadius: '50px',
                                            background: darkMode
                                                ? 'linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)'
                                                : 'linear-gradient(135deg, #0066ff 0%, #6366f1 100%)',
                                            color: '#fff',
                                            textTransform: 'none',
                                            boxShadow: '0 10px 30px rgba(0, 102, 255, 0.3)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 20px 40px rgba(0, 102, 255, 0.4)',
                                                background: darkMode
                                                    ? 'linear-gradient(135deg, #0066ff 0%, #00d4ff 100%)'
                                                    : 'linear-gradient(135deg, #6366f1 0%, #0066ff 100%)',
                                            },
                                        }}
                                    >
                                        Hire Me
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        href={Download}
                                        download="Shravan_Rasamalla-Ui Developer.doc"
                                        startIcon={<DownloadIcon />}
                                        sx={{
                                            padding: '16px 48px',
                                            fontSize: '1rem',
                                            fontWeight: 700,
                                            borderRadius: '50px',
                                            borderWidth: '2px',
                                            borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                                            color: darkMode ? '#fff' : '#333',
                                            textTransform: 'none',
                                            backdropFilter: 'blur(10px)',
                                            backgroundColor: darkMode
                                                ? 'rgba(255, 255, 255, 0.05)'
                                                : 'rgba(0, 0, 0, 0.05)',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                backgroundColor: darkMode
                                                    ? 'rgba(255, 255, 255, 0.1)'
                                                    : 'rgba(0, 0, 0, 0.1)',
                                                borderColor: darkMode ? '#fff' : '#333',
                                                borderWidth: '2px', // Prevent border width change on hover
                                            },
                                        }}
                                    >
                                        Download CV
                                    </Button>
                                </Box>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                                    {[
                                        { icon: <FaLinkedin size={24} />, url: "https://www.linkedin.com/in/shravan-rasamalla/", label: "LinkedIn" },
                                        { icon: <FaGithub size={24} />, url: "https://github.com/shravanweb", label: "GitHub" },
                                        { icon: <FaBehance size={24} />, url: "https://www.behance.net/shravanrasamalla", label: "Behance" }
                                    ].map((social, index) => (
                                        <IconButton
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            sx={{
                                                color: darkMode ? '#fff' : '#333',
                                                backgroundColor: darkMode
                                                    ? 'rgba(255, 255, 255, 0.05)'
                                                    : 'rgba(0, 0, 0, 0.05)',
                                                padding: '16px',
                                                borderRadius: '50%',
                                                transition: 'all 0.3s ease',
                                                border: '1px solid transparent',
                                                '&:hover': {
                                                    backgroundColor: darkMode
                                                        ? 'rgba(0, 212, 255, 0.2)'
                                                        : 'rgba(0, 102, 255, 0.2)',
                                                    transform: 'translateY(-4px)',
                                                    color: 'var(--accent-color)',
                                                    border: '1px solid var(--accent-color)',
                                                },
                                            }}
                                        >
                                            {social.icon}
                                        </IconButton>
                                    ))}
                                </Box>
                            </motion.div>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Herosection;
