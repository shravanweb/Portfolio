import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, CardActions, Button, Container } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider';
import AdSense from '../components/AdSense';

const projects = [
    {
        title: 'Virtual IT Job Fair',
        description: 'A creative and modern web application designed to provide an interactive user experience with cutting-edge design and seamless functionality.',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
        link: 'https://jobfair.jobsnprofiles.com/',
        tech: ['React', 'Material-UI',  'Node.js', 'MongoDB'],
    },
    {
        title: 'Content Management System',
        description: 'An advanced e-commerce solution with integrated payment gateways and product management system for modern businesses.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
        link: 'https://contracts.jobsnprofiles.com/login',
        tech: ['React', 'Node.js', 'MySQL',],
    },
    {
        title: 'Jobsnprofiles',
        description: 'A sleek portfolio website to showcase skills, projects, and contact information with modern design principles.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        link: 'https://jobsnprofiles.com/',
        tech: ['React',  'Material-UI', 'Node.js', 'MySQL'],
    },
];

const Projects = () => {
    const { darkMode } = useThemeToggle();

    return (
        <Box
            sx={{
                backgroundColor: 'var(--bg-primary)',
                padding: { xs: '60px 20px', md: '120px 40px' },
                minHeight: '100vh',
                position: 'relative',
            }}
            id="projects"
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
                        Featured Projects
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
                            mb: 6,
                        }}
                    >
                        Explore my portfolio of carefully crafted projects that demonstrate expertise in modern web development, user experience design, and innovative solutions.
                    </Typography>
                </Box>

                {/* AdSense Ad Unit */}
                <Box sx={{ mb: 4, mt: 2 }}>
                    <AdSense adFormat="auto" requireMinContent={true} />
                </Box>

                <Grid container spacing={4} justifyContent="center">
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    backgroundColor: darkMode ? 'var(--bg-secondary)' : 'var(--bg-secondary)',
                                    color: 'var(--text-color)',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    border: `1px solid var(--border-color)`,
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    '&:hover': {
                                        transform: 'translateY(-12px)',
                                        boxShadow: 'var(--shadow-lg)',
                                        borderColor: darkMode ? 'var(--accent-color)' : 'var(--accent-color)',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={project.image}
                                    alt={project.title}
                                    sx={{
                                        objectFit: 'cover',
                                        filter: darkMode ? 'brightness(0.7)' : 'brightness(0.95)',
                                    }}
                                />
                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                    <Typography
                                        variant="h5"
                                        component="div"
                                        sx={{
                                            fontWeight: 800,
                                            color: darkMode ? 'var(--accent-color)' : 'var(--accent-color)',
                                            mb: 2,
                                            fontSize: '1.2rem',
                                        }}
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'var(--text-color)',
                                            lineHeight: 1.8,
                                            mb: 2,
                                            fontWeight: 500,
                                        }}
                                    >
                                        {project.description}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
                                        {project.tech.map((tech, i) => (
                                            <Box
                                                key={i}
                                                sx={{
                                                    px: 1.5,
                                                    py: 0.5,
                                                    borderRadius: '12px',
                                                    backgroundColor: darkMode 
                                                        ? 'rgba(0, 212, 255, 0.1)' 
                                                        : 'rgba(0, 212, 255, 0.15)',
                                                    color: darkMode ? 'var(--accent-color)' : '#00d4ff',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 600,
                                                }}
                                            >
                                                {tech}
                                            </Box>
                                        ))}
                                    </Box>
                                </CardContent>
                                <CardActions sx={{ p: 3, pt: 0 }}>
                                    <Button
                                        variant="contained"
                                        href={project.link}
                                        fullWidth
                                        sx={{
                                            borderRadius: '12px',
                                            padding: '12px',
                                            fontWeight: 600,
                                            textTransform: 'none',
                                            background: darkMode 
                                                ? 'linear-gradient(135deg, var(--accent-color) 0%, #00a8cc 100%)'
                                                : 'linear-gradient(135deg, var(--accent-color) 0%, #00b8d4 100%)',
                                            color: darkMode ? '#000' : '#fff',
                                            '&:hover': {
                                                transform: 'scale(1.02)',
                                            },
                                        }}
                                    >
                                        View Project
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;
