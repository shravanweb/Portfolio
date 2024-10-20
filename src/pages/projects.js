import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider'; // Import useThemeToggle hook

const projects = [
    {
        title: 'Creative Web Application',
        description: 'A creative and modern web application designed to provide an interactive user experience.',
        image: 'https://via.placeholder.com/400',
        link: '#',
    },
    {
        title: 'E-commerce Platform',
        description: 'An advanced e-commerce solution with integrated payment gateways and product management.',
        image: 'https://via.placeholder.com/400',
        link: '#',
    },
    {
        title: 'Portfolio Showcase',
        description: 'A sleek portfolio website to showcase skills, projects, and contact information.',
        image: 'https://via.placeholder.com/400',
        link: '#',
    },
];

const Projects = () => {
    const { darkMode } = useThemeToggle(); // Use darkMode from ThemeToggleProvider

    return (
        <Box
            sx={{
                backgroundColor: darkMode ? '#121212' : '#f3f4f6', // Dark mode background color
                padding: '80px 40px',
                minHeight: '100vh',
                transition: 'background-color 0.5s ease',
            }}
            id="projects" // For section navigation
        >
            <Typography
                variant="h3"
                component="h2"
                align="center"
                sx={{
                    fontWeight: 'bold',
                    mb: 6,
                    color: darkMode ? '#e0e0e0' : '#333',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    position: 'relative',
                }}
            >
                My Projects
                <span style={{
                    content: '""',
                    position: 'absolute',
                    width: '50px',
                    height: '4px',
                    backgroundColor: darkMode ? '#ffcc00' : '#007fff',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}></span>
            </Typography>

            <Grid container spacing={6} justifyContent="center">
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card
                            sx={{
                                backgroundColor: darkMode ? '#1f1f1f' : '#ffffff',
                                color: darkMode ? '#e0e0e0' : '#333',
                                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                                borderRadius: '15px',
                                overflow: 'hidden',
                                transition: 'transform 0.4s, box-shadow 0.4s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 20px 30px rgba(0, 0, 0, 0.4)',
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image={project.image}
                                alt={project.title}
                                sx={{
                                    filter: darkMode ? 'brightness(0.7)' : 'brightness(1)',
                                    transition: 'filter 0.4s ease',
                                }}
                            />
                            <CardContent
                                sx={{
                                    padding: '24px',
                                    minHeight: '200px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        fontWeight: 'bold',
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
                                        mb: 3,
                                    }}
                                >
                                    {project.description}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center', paddingBottom: '20px' }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    href={project.link}
                                    sx={{
                                        borderRadius: '30px',
                                        padding: '10px 30px',
                                        fontWeight: 'bold',
                                        textTransform: 'none',
                                        transition: 'background-color 0.4s',
                                        backgroundColor: darkMode ? '#ffcc00' : '#007fff',
                                        '&:hover': {
                                            backgroundColor: darkMode ? '#ffdd44' : '#005fbb',
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
        </Box>
    );
};

export default Projects;
