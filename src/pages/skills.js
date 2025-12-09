import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider';

const SkillsSection = () => {
    const { darkMode } = useThemeToggle();

    const skills = [
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 90 },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 85 },
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 95 },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 90 },
        { name: 'Material-UI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg', level: 80 },
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 85 },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', level: 85 },
        { name: 'Adobe XD', logo: 'https://www.logo.wine/a/logo/Adobe_XD/Adobe_XD-Logo.wine.svg', level: 80 },
        { name: 'Photoshop', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg', level: 75 },
        { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg', level: 70 },
    ];

    return (
        <Box
            sx={{
                padding: { xs: '60px 20px', md: '100px 40px' },
                backgroundColor: darkMode ? '#121212' : '#f8f9fa',
                color: darkMode ? '#fff' : '#333',
                position: 'relative',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
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
                        My Skills
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

                <Grid container spacing={4}>
                    {skills.map((skill, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    textAlign: 'center',
                                    backgroundColor: darkMode ? '#1e1e1e' : '#ffffff',
                                    border: `2px solid ${darkMode ? 'rgba(255, 204, 0, 0.1)' : 'rgba(0, 127, 255, 0.1)'}`,
                                    borderRadius: '16px',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: darkMode 
                                            ? '0 12px 40px rgba(255, 204, 0, 0.2)' 
                                            : '0 12px 40px rgba(0, 127, 255, 0.2)',
                                        borderColor: darkMode ? '#ffcc00' : '#007fff',
                                    },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={skill.logo}
                                    alt={`${skill.name} logo`}
                                    sx={{
                                        width: '64px',
                                        height: '64px',
                                        objectFit: 'contain',
                                        mb: 2,
                                        filter: darkMode ? 'brightness(1.2)' : 'none',
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 600,
                                        mb: 1,
                                        color: darkMode ? '#fff' : '#333',
                                        fontSize: '1rem',
                                    }}
                                >
                                    {skill.name}
                                </Typography>
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '4px',
                                        backgroundColor: darkMode ? '#333' : '#e0e0e0',
                                        borderRadius: '2px',
                                        overflow: 'hidden',
                                        mt: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: `${skill.level}%`,
                                            height: '100%',
                                            background: darkMode 
                                                ? 'linear-gradient(90deg, #ffcc00, #ffaa00)'
                                                : 'linear-gradient(90deg, #007fff, #005fbb)',
                                            transition: 'width 0.5s ease',
                                        }}
                                    />
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default SkillsSection;
