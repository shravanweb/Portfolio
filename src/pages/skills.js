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
                padding: { xs: '60px 20px', md: '120px 40px' },
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-color)',
                position: 'relative',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 10 }}>
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
                        My Skills
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
                        Proficient technologies and tools
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    {skills.map((skill, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    textAlign: 'center',
                                    backgroundColor: darkMode ? 'var(--bg-secondary)' : 'var(--bg-secondary)',
                                    border: `1px solid var(--border-color)`,
                                    borderRadius: '16px',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'translateY(-12px)',
                                        boxShadow: 'var(--shadow-lg)',
                                        borderColor: darkMode ? 'var(--accent-color)' : 'var(--accent-color)',
                                        backgroundColor: darkMode ? 'var(--bg-tertiary)' : 'var(--bg-tertiary)',
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
                                        filter: darkMode ? 'brightness(1.1)' : 'brightness(0.9)',
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 700,
                                        mb: 1,
                                        color: 'var(--text-color-2)',
                                        fontSize: '1rem',
                                    }}
                                >
                                    {skill.name}
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            flex: 1,
                                            height: '6px',
                                            backgroundColor: darkMode ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 102, 255, 0.2)',
                                            borderRadius: '3px',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                height: '100%',
                                                width: `${skill.level}%`,
                                                background: darkMode 
                                                    ? 'linear-gradient(90deg, #00d4ff, #0066ff)'
                                                    : 'linear-gradient(90deg, #0066ff, #6366f1)',
                                                borderRadius: '3px',
                                                transition: 'width 0.5s ease',
                                            }}
                                        />
                                    </Box>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: 'var(--text-muted)',
                                            fontWeight: 600,
                                            minWidth: '30px',
                                            textAlign: 'right',
                                        }}
                                    >
                                        {skill.level}%
                                    </Typography>
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
