import React, { useState } from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, CardActions, Button, Container } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider';
import AdSense from '../components/AdSense';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Virtual IT Job Fair',
        description: 'A creative and modern web application designed to provide an interactive user experience with cutting-edge design and seamless functionality.',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
        link: 'https://jobfair.jobsnprofiles.com/',
        tech: ['React', 'Material-UI', 'Node.js', 'MongoDB'],
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
        tech: ['React', 'Material-UI', 'Node.js', 'MySQL'],
    },
];

const Projects = () => {
    const { darkMode } = useThemeToggle();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <Box
            sx={{
                backgroundColor: darkMode ? 'var(--bg-secondary)' : '#f9fafb',
                padding: { xs: '80px 20px', md: '140px 40px' },
                minHeight: '100vh',
                position: 'relative',
            }}
            id="projects"
        >
            <Container maxWidth="lg">
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    sx={{ textAlign: 'center', mb: 12 }}
                >
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            fontWeight: 900,
                            fontSize: { xs: '2.5rem', md: '4rem' },
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
                            fontSize: '1.2rem',
                            mb: 6,
                            maxWidth: '700px',
                            margin: '0 auto',
                        }}
                    >
                        Explore my portfolio of carefully crafted projects that demonstrate expertise in modern web development, user experience design, and innovative solutions.
                    </Typography>
                </Box>

                {/* AdSense Ad Unit */}
                <Box sx={{ mb: 6 }}>
                    <AdSense adFormat="auto" requireMinContent={true} />
                </Box>

                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    component={motion.div}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {projects.map((project, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={index}
                            component={motion.div}
                            variants={cardVariants}
                        >
                            <Card
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                sx={{
                                    backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.03)' : '#ffffff',
                                    backdropFilter: 'blur(10px)',
                                    color: 'var(--text-color)',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative',
                                    boxShadow: darkMode ? 'none' : '0 10px 40px rgba(0,0,0,0.05)',
                                    '&:hover': {
                                        transform: 'translateY(-12px)',
                                        boxShadow: darkMode
                                            ? '0 20px 40px rgba(0,0,0,0.4)'
                                            : '0 30px 60px rgba(0,0,0,0.12)',
                                        borderColor: darkMode ? 'rgba(0, 212, 255, 0.3)' : 'rgba(0, 102, 255, 0.3)',
                                    },
                                }}
                            >
                                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                                    <CardMedia
                                        component="img"
                                        height="220"
                                        image={project.image}
                                        alt={project.title}
                                        sx={{
                                            objectFit: 'cover',
                                            transition: 'transform 0.6s ease',
                                            transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                                            filter: darkMode ? 'brightness(0.85)' : 'brightness(0.95)',
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            background: `linear-gradient(to top, ${darkMode ? '#0a0e27' : '#ffffff'} 0%, transparent 100%)`,
                                            opacity: 0.6,
                                        }}
                                    />
                                </Box>
                                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                                    <Typography
                                        variant="h5"
                                        component="div"
                                        sx={{
                                            fontWeight: 700,
                                            color: darkMode ? '#fff' : '#1a1a1a',
                                            mb: 1.5,
                                            fontSize: '1.4rem',
                                            transition: 'color 0.3s ease',
                                            ...(hoveredIndex === index && {
                                                color: 'var(--accent-color)',
                                            }),
                                        }}
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'var(--text-muted)',
                                            lineHeight: 1.7,
                                            mb: 3,
                                            fontWeight: 400,
                                            fontSize: '0.95rem',
                                        }}
                                    >
                                        {project.description}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 'auto' }}>
                                        {project.tech.map((tech, i) => (
                                            <Box
                                                key={i}
                                                sx={{
                                                    px: 1.5,
                                                    py: 0.5,
                                                    borderRadius: '8px',
                                                    backgroundColor: darkMode
                                                        ? 'rgba(255, 255, 255, 0.05)'
                                                        : 'rgba(0, 0, 0, 0.05)',
                                                    color: darkMode ? '#e0e0e0' : '#555',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 600,
                                                    border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
                                                }}
                                            >
                                                {tech}
                                            </Box>
                                        ))}
                                    </Box>
                                </CardContent>
                                <CardActions sx={{ p: 4, pt: 0 }}>
                                    <Button
                                        variant="text"
                                        href={project.link}
                                        endIcon={
                                            <Box
                                                component="span"
                                                sx={{
                                                    transition: 'transform 0.3s ease',
                                                    transform: hoveredIndex === index ? 'translateX(4px)' : 'translateX(0)',
                                                    display: 'inline-flex'
                                                }}
                                            >
                                                →
                                            </Box>
                                        }
                                        sx={{
                                            fontWeight: 700,
                                            textTransform: 'none',
                                            color: 'var(--accent-color)',
                                            padding: 0,
                                            minWidth: 0,
                                            fontSize: '1rem',
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                                textDecoration: 'none',
                                            },
                                        }}
                                    >
                                        View Case Study
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
