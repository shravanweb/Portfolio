import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Container } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider';
import AdSense from '../components/AdSense';

const services = [
    {
        title: 'Website Design',
        description: 'Creating visually stunning and user-friendly websites that provide an engaging experience across all devices. I focus on responsive design, modern UI/UX principles, and seamless user interactions. My approach ensures that every pixel serves a purpose and every interaction delights users.',
        detailedDescription: 'Professional website design services tailored to your business needs. I combine aesthetics with functionality to create websites that not only look beautiful but also perform optimally. From corporate sites to e-commerce platforms, I deliver comprehensive solutions that drive results.',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        icon: '🌐',
    },
    {
        title: 'Logo Design',
        description: 'Crafting memorable and impactful logos that represent your brand identity and resonate with your audience. Each design is unique, scalable, and perfectly aligned with your brand vision. A great logo tells your brand story at a glance.',
        detailedDescription: 'Expert logo design that captures your brand essence. I work closely with you to understand your vision and values, creating logos that stand the test of time. Whether you need a modern minimalist design or something more elaborate, I deliver professional branding solutions.',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1661770132071-026114fffb61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        icon: '🎨',
    },
    {
        title: 'Video Design',
        description: 'Producing high-quality videos that tell your story and captivate your audience, from concept to final cut. I create engaging visual content that communicates your message effectively and keeps your audience engaged.',
        detailedDescription: 'Professional video design and production services that elevate your content. Whether promotional videos, tutorials, or animated explainers, I create compelling visual narratives that engage viewers and drive conversions.',
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
                backgroundColor: darkMode ? 'var(--bg-primary)' : 'var(--bg-primary)',
                color: darkMode ? 'var(--text-color)' : 'var(--text-color)',
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
                        Professional Services
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
                        Comprehensive design and development solutions tailored to bring your vision to life. With years of experience and a portfolio of successful projects, I deliver quality results that exceed expectations.
                    </Typography>
                </Box>

                {/* AdSense Ad Unit */}
                <Box sx={{ mb: 4, mt: 2 }}>
                    <AdSense adFormat="auto" requireMinContent={true} />
                </Box>

                <Grid container spacing={4}>
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    backgroundColor: darkMode ? 'var(--bg-secondary)' : 'var(--bg-secondary)',
                                    border: `1px solid var(--border-color)`,
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
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
                                    image={service.imageUrl}
                                    alt={service.title}
                                    sx={{
                                        objectFit: 'cover',
                                        filter: darkMode ? 'brightness(0.7)' : 'brightness(0.95)',
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
                                            fontWeight: 800,
                                            mb: 2,
                                            color: darkMode ? 'var(--accent-color)' : 'var(--accent-color)',
                                            textAlign: 'center',
                                            fontSize: '1.3rem',
                                        }}
                                    >
                                        {service.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'var(--text-color)',
                                            lineHeight: 1.8,
                                            textAlign: 'center',
                                            mb: 2,
                                            fontWeight: 500,
                                        }}
                                    >
                                        {service.description}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'var(--text-muted)',
                                            lineHeight: 1.7,
                                            textAlign: 'center',
                                            fontSize: '0.9rem',
                                        }}
                                    >
                                        {service.detailedDescription}
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
