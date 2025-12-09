import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, CardActions, Button, Container } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider';

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
                backgroundColor: darkMode ? '#121212' : '#f8f9fa',
                padding: { xs: '60px 20px', md: '100px 40px' },
                minHeight: '100vh',
                position: 'relative',
            }}
            id="projects"
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
                        My Projects
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

                <Grid container spacing={4} justifyContent="center">
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    backgroundColor: darkMode ? '#1e1e1e' : '#ffffff',
                                    color: darkMode ? '#e0e0e0' : '#333',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    border: `2px solid ${darkMode ? 'rgba(255, 204, 0, 0.1)' : 'rgba(0, 127, 255, 0.1)'}`,
                                    transition: 'all 0.3s ease',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                        boxShadow: darkMode 
                                            ? '0 20px 60px rgba(255, 204, 0, 0.3)' 
                                            : '0 20px 60px rgba(0, 127, 255, 0.3)',
                                        borderColor: darkMode ? '#ffcc00' : '#007fff',
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
                                            fontWeight: 700,
                                            color: darkMode ? '#ffcc00' : '#007fff',
                                            mb: 2,
                                        }}
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: darkMode ? '#e0e0e0' : '#555',
                                            lineHeight: 1.8,
                                            mb: 2,
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
                                                        ? 'rgba(255, 204, 0, 0.1)' 
                                                        : 'rgba(0, 127, 255, 0.1)',
                                                    color: darkMode ? '#ffcc00' : '#007fff',
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
                                                ? 'linear-gradient(135deg, #ffcc00 0%, #ffaa00 100%)'
                                                : 'linear-gradient(135deg, #007fff 0%, #005fbb 100%)',
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
