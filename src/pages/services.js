import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Container } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider';
import AdSense from '../components/AdSense';

const services = [
    {
        title: 'Website Design',
        description: 'Creating visually stunning and user-friendly websites that provide an engaging experience across all devices. I focus on responsive design, modern UI/UX principles, and seamless user interactions.',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        icon: '🌐',
    },
    {
        title: 'Logo Design',
        description: 'Crafting memorable and impactful logos that represent your brand identity and resonate with your audience. Each design is unique, scalable, and perfectly aligned with your brand vision.',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1661770132071-026114fffb61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        icon: '🎨',
    },
    {
        title: 'Video Design',
        description: 'Producing high-quality videos that tell your story and captivate your audience, from concept to final cut. I create engaging visual content that communicates your message effectively.',
        imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop',
        icon: '🎬',
    },
];

const ServicesSection = () => {
    const { darkMode } = useThemeToggle();

    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: darkMode ? '#0a0a0a' : '#ffffff',
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
                        Services
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

                {/* AdSense Ad Unit */}
                <Box sx={{ mb: 4, mt: 2 }}>
                    <AdSense adFormat="auto" />
                </Box>

                <Grid container spacing={4}>
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    backgroundColor: darkMode ? '#1e1e1e' : '#ffffff',
                                    border: `2px solid ${darkMode ? 'rgba(255, 204, 0, 0.1)' : 'rgba(0, 127, 255, 0.1)'}`,
                                    transition: 'all 0.3s ease',
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
                                    image={service.imageUrl}
                                    alt={service.title}
                                    sx={{
                                        objectFit: 'cover',
                                        filter: darkMode ? 'brightness(0.6)' : 'brightness(0.9)',
                                    }}
                                />
                                <CardContent sx={{ p: 4 }}>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontSize: '3rem',
                                            mb: 2,
                                            textAlign: 'center',
                                        }}
                                    >
                                        {service.icon}
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        component="div"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 2,
                                            color: darkMode ? '#ffcc00' : '#007fff',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {service.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: darkMode ? '#e0e0e0' : '#555',
                                            lineHeight: 1.8,
                                            textAlign: 'center',
                                        }}
                                    >
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ServicesSection;
