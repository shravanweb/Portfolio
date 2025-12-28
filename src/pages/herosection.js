import React from 'react';
import { Grid, Typography, Button, Box, IconButton } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider';
import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa';
import DownloadIcon from '@mui/icons-material/Download';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { TypeAnimation } from 'react-type-animation';
import Pic from "../assets/images/pic.png";
import Download from "../assets/Shravan_Rasamalla-Ui Developer.doc";
import HeroBackground3D from '../components/HeroBackground3D';

const Herosection = () => {
    const { darkMode } = useThemeToggle(); // Access darkMode state

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: darkMode ? 'var(--bg-primary)' : 'var(--bg-primary)',
                color: darkMode ? 'var(--text-color)' : 'var(--text-color)',
                textAlign: 'center',
                padding: '0 20px',
                overflow: 'hidden',
            }}
        >
            {/* Beautiful 3D Animated Background */}
            <HeroBackground3D />
            
            {/* Content with z-index to appear above 3D background */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    width: '100%',
                }}
            >
            <Grid container alignItems="center" justifyContent="center">
                {/* Content Section */}
                <Grid item xs={12} md={8}>
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontWeight: 900,
                            mb: 2,
                            fontSize: { xs: '2.5rem', md: '4rem' },
                            background: darkMode 
                                ? 'linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)'
                                : 'linear-gradient(135deg, #0066ff 0%, #6366f1 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            letterSpacing: '-1px',
                            lineHeight: '1.2',
                        }}
                    >
                        Hello, I'm Shravan<br />
                    </Typography>
                    <Box
                        sx={{
                            mb: 4,
                            minHeight: '100px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <TypeAnimation
                            sequence={[
                                'Front End Developer',
                                1000,
                                'UI/UX Designer',
                                1000,
                                'Creative Developer',
                                1000,
                            ]}
                            speed={50}
                            style={{ 
                                fontSize: '2.5rem',
                                fontWeight: '800',
                                background: darkMode 
                                    ? 'linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)'
                                    : 'linear-gradient(135deg, #0066ff 0%, #6366f1 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                            repeat={Infinity}
                        />
                    </Box>
                    <Typography 
                        variant="h6" 
                        sx={{ 
                            mb: 6,
                            color: 'var(--text-muted)',
                            fontWeight: 400,
                            fontSize: '1.1rem',
                            maxWidth: '600px',
                            margin: '0 auto 2rem',
                            lineHeight: 1.8,
                        }}
                    >
                        Crafting beautiful, functional, and user-centered digital experiences. Specializing in modern frontend development and innovative design solutions.
                    </Typography>

                    {/* Buttons Section */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 6, flexWrap: 'wrap' }}>
                        <Button
                            variant="contained"
                            startIcon={<ContactMailIcon />}
                            sx={{
                                padding: '14px 40px',
                                fontSize: '1rem',
                                fontWeight: 700,
                                borderRadius: '12px',
                                background: darkMode 
                                    ? 'linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)'
                                    : 'linear-gradient(135deg, #0066ff 0%, #6366f1 100%)',
                                color: '#fff',
                                textTransform: 'none',
                                boxShadow: 'var(--shadow-md)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: 'var(--shadow-lg)',
                                },
                            }}
                        >
                            Get In Touch
                        </Button>
                        <Button
                            variant="outlined"
                            href={Download}
                            download="Shravan_Rasamalla-Ui Developer.doc"
                            startIcon={<DownloadIcon />}
                            sx={{
                                padding: '14px 40px',
                                fontSize: '1rem',
                                fontWeight: 700,
                                borderRadius: '12px',
                                borderWidth: '2px',
                                borderColor: darkMode ? 'var(--accent-color)' : 'var(--accent-color)',
                                color: darkMode ? 'var(--accent-color)' : 'var(--accent-color)',
                                textTransform: 'none',
                                backdropFilter: 'blur(10px)',
                                backgroundColor: darkMode 
                                    ? 'rgba(0, 212, 255, 0.1)' 
                                    : 'rgba(0, 102, 255, 0.1)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    backgroundColor: darkMode 
                                        ? 'rgba(0, 212, 255, 0.2)' 
                                        : 'rgba(0, 102, 255, 0.2)',
                                    borderColor: darkMode ? 'var(--accent-color)' : 'var(--accent-color)',
                                },
                            }}
                        >
                            Download Resume
                        </Button>
                    </Box>

                    {/* Social Icons Section */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, marginTop: '40px' }}>
                        <IconButton
                            href="https://www.linkedin.com/in/shravan-rasamalla/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: darkMode ? 'var(--accent-color)' : 'var(--accent-color)',
                                backgroundColor: darkMode 
                                    ? 'rgba(0, 212, 255, 0.1)' 
                                    : 'rgba(0, 102, 255, 0.1)',
                                padding: '12px',
                                borderRadius: '12px',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: darkMode 
                                        ? 'rgba(0, 212, 255, 0.2)' 
                                        : 'rgba(0, 102, 255, 0.2)',
                                    transform: 'translateY(-4px)',
                                },
                            }}
                            title="LinkedIn Profile"
                        >
                            <FaLinkedin size={24} />
                        </IconButton>
                        <IconButton
                            href="https://github.com/shravanweb"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: darkMode ? 'var(--accent-color)' : 'var(--accent-color)',
                                backgroundColor: darkMode 
                                    ? 'rgba(0, 212, 255, 0.1)' 
                                    : 'rgba(0, 102, 255, 0.1)',
                                padding: '12px',
                                borderRadius: '12px',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: darkMode 
                                        ? 'rgba(0, 212, 255, 0.2)' 
                                        : 'rgba(0, 102, 255, 0.2)',
                                    transform: 'translateY(-4px)',
                                },
                            }}
                            title="GitHub Profile"
                        >
                            <FaGithub size={24} />
                        </IconButton>
                        <IconButton
                            href="https://www.behance.net/shravanrasamalla"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: darkMode ? 'var(--accent-color)' : 'var(--accent-color)',
                                backgroundColor: darkMode 
                                    ? 'rgba(0, 212, 255, 0.1)' 
                                    : 'rgba(0, 102, 255, 0.1)',
                                padding: '12px',
                                borderRadius: '12px',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: darkMode 
                                        ? 'rgba(0, 212, 255, 0.2)' 
                                        : 'rgba(0, 102, 255, 0.2)',
                                    transform: 'translateY(-4px)',
                                },
                            }}
                            title="Behance Portfolio"
                        >
                            <FaBehance size={24} />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
            </Box>
        </Box>
    );
};

export default Herosection;
