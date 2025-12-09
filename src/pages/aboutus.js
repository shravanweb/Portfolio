import { Box, Grid, Typography, Container } from '@mui/material';
import React from 'react';
import { useThemeToggle } from '../app/ThemeToggleProvider';
import Pic from "../assets/images/pic.png";
import AdSense from '../components/AdSense';
import AdSense from '../components/AdSense';

const Aboutus = () => {
    const { darkMode } = useThemeToggle();

    return (
        <Box
            sx={{
                padding: { xs: '60px 20px', md: '100px 40px' },
                backgroundColor: darkMode ? '#0a0a0a' : '#ffffff',
                color: darkMode ? '#fff' : '#333',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        textAlign: 'center',
                        mb: 6,
                    }}
                >
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '2rem', md: '3rem' },
                            mb: 2,
                            background: darkMode 
                                ? 'linear-gradient(135deg, #ffffff 0%, #ffcc00 100%)'
                                : 'linear-gradient(135deg, #007fff 0%, #005fbb 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        About Me
                    </Typography>
                    <Box
                        sx={{
                            width: '80px',
                            height: '4px',
                            background: darkMode 
                                ? 'linear-gradient(90deg, #ffcc00, #ffaa00)'
                                : 'linear-gradient(90deg, #007fff, #005fbb)',
                            margin: '0 auto',
                            borderRadius: '2px',
                        }}
                    />
                </Box>

                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={Pic}
                            alt="Rasamalla Shravan"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '20px',
                                boxShadow: darkMode 
                                    ? '0 20px 60px rgba(255, 204, 0, 0.2)' 
                                    : '0 20px 60px rgba(0, 127, 255, 0.2)',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.02)',
                                },
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography 
                            variant="h5" 
                            sx={{ 
                                fontWeight: 600,
                                mb: 3,
                                color: darkMode ? '#ffcc00' : '#007fff',
                            }}
                        >
                            Hello! I'm Rasamalla Shravan
                        </Typography>
                        <Typography 
                            variant="body1" 
                            sx={{ 
                                lineHeight: 1.9, 
                                color: darkMode ? '#e0e0e0' : '#555',
                                mb: 3,
                                fontSize: '1.1rem',
                            }}
                        >
                            A passionate <strong>UI Designer</strong> and <strong>Frontend Developer</strong> with over <strong>7 years of experience</strong> in creating visually stunning and user-friendly web applications. My journey in technology has equipped me with a robust skill set in JavaScript and its frameworks, enabling me to transform ideas into engaging digital experiences.
                        </Typography>
                        <Typography 
                            variant="body1" 
                            sx={{ 
                                lineHeight: 1.9, 
                                color: darkMode ? '#e0e0e0' : '#555',
                                fontSize: '1.1rem',
                            }}
                        >
                            I thrive in environments that challenge my problem-solving abilities and push me to learn and explore the latest technologies. My mission is to make the web more accessible and inclusive for everyone. I'm eager to embrace opportunities that align with my skills and passion for design and development.
                        </Typography>
                    </Grid>
                </Grid>

                {/* AdSense Ad Unit */}
                <Box sx={{ mt: 6 }}>
                    <AdSense adFormat="auto" />
                </Box>
            </Container>
        </Box>
    );
};

export default Aboutus;
