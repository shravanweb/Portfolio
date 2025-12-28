import { Box, Grid, Typography, Container } from '@mui/material';
import React from 'react';
import { useThemeToggle } from '../app/ThemeToggleProvider';
import Pic from "../assets/images/pic.png";
import AdSense from '../components/AdSense';

const Aboutus = () => {
    const { darkMode } = useThemeToggle();

    return (
        <Box
            sx={{
                padding: { xs: '60px 20px', md: '120px 40px' },
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-color)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        textAlign: 'center',
                        mb: 10,
                    }}
                >
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            fontWeight: 900,
                            fontSize: { xs: '2rem', md: '3.5rem' },
                            mb: 2,
                            background: darkMode 
                                ? 'linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)'
                                : 'linear-gradient(135deg, #0066ff 0%, #6366f1 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            letterSpacing: '-1px',
                        }}
                    >
                        About Me
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
                        variant="h6"
                        sx={{
                            color: 'var(--text-muted)',
                            fontWeight: 400,
                            fontSize: '1.1rem',
                        }}
                    >
                        Learn more about my journey and expertise
                    </Typography>
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
                                boxShadow: 'var(--shadow-lg)',
                                transition: 'transform 0.3s ease',
                                border: `1px solid var(--border-color)`,
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
                                fontWeight: 800,
                                mb: 3,
                                color: darkMode ? 'var(--accent-color)' : 'var(--accent-color)',
                                fontSize: '1.8rem',
                            }}
                        >
                            Hello! I'm Rasamalla Shravan
                        </Typography>
                        <Typography 
                            variant="body1" 
                            sx={{ 
                                lineHeight: 2, 
                                color: 'var(--text-color)',
                                mb: 3,
                                fontSize: '1.05rem',
                                fontWeight: 500,
                            }}
                        >
                            A passionate <strong>UI Designer</strong> and <strong>Frontend Developer</strong> with over <strong>7 years of experience</strong> in creating visually stunning and user-friendly web applications. My journey in technology has equipped me with a robust skill set in JavaScript and its frameworks, enabling me to transform ideas into engaging digital experiences.
                        </Typography>
                        <Typography 
                            variant="body1" 
                            sx={{ 
                                lineHeight: 2, 
                                color: 'var(--text-color)',
                                mb: 3,
                                fontSize: '1.05rem',
                            }}
                        >
                            I thrive in environments that challenge my problem-solving abilities and push me to learn and explore the latest technologies. My mission is to make the web more accessible and inclusive for everyone. I'm eager to embrace opportunities that align with my skills and passion for design and development.
                        </Typography>
                        <Typography 
                            variant="body1" 
                            sx={{ 
                                lineHeight: 2, 
                                color: 'var(--text-color)',
                                mb: 3,
                                fontSize: '1.05rem',
                            }}
                        >
                            Throughout my career, I've had the privilege of working with diverse teams and companies, delivering solutions that not only meet technical requirements but exceed user expectations. My expertise spans across modern web technologies including <strong>React</strong>, <strong>JavaScript</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, and various design tools.
                        </Typography>
                        <Typography 
                            variant="body1" 
                            sx={{ 
                                lineHeight: 2, 
                                color: 'var(--text-color)',
                                mb: 3,
                                fontSize: '1.05rem',
                            }}
                        >
                            Beyond coding, I'm passionate about UI/UX design and believe that great products are built at the intersection of beautiful design and seamless functionality.
                        </Typography>
                    </Grid>
                </Grid>

                {/* AdSense Ad Unit */}
                <Box sx={{ mt: 6 }}>
                    <AdSense adFormat="auto" requireMinContent={true} />
                </Box>
            </Container>
        </Box>
    );
};

export default Aboutus;
