import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Container } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider';
import AdSense from '../components/AdSense';
import { motion } from 'framer-motion';

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
        imageUrl: 'https://plus.unsplash.com/premium_photo-1661770132071-026114fffb61?q=80&w=2070&auto=format&fit=crop',
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
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <Box
            sx={{
                py: { xs: 8, md: 14 },
                backgroundColor: darkMode ? 'var(--bg-primary)' : 'var(--bg-primary)',
                color: darkMode ? 'var(--text-color)' : 'var(--text-color)',
                position: 'relative',
            }}
            id="services"
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
                            fontSize: '1.2rem',
                            mb: 6,
                            maxWidth: '700px',
                            margin: '0 auto',
                        }}
                    >
                        Comprehensive design and development solutions tailored to bring your vision to life. With years of experience and a portfolio of successful projects, I deliver quality results that exceed expectations.
                    </Typography>
                </Box>

                {/* AdSense Ad Unit */}
                <Box sx={{ mb: 8 }}>
                    <AdSense adFormat="auto" requireMinContent={true} />
                </Box>

                <Grid
                    container
                    spacing={4}
                    component={motion.div}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.map((service, index) => (
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
                                sx={{
                                    height: '100%',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.03)' : '#ffffff',
                                    backdropFilter: 'blur(10px)',
                                    border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxShadow: darkMode ? 'none' : '0 10px 40px rgba(0,0,0,0.05)',
                                    '&:hover': {
                                        transform: 'translateY(-12px)',
                                        boxShadow: darkMode
                                            ? '0 20px 40px rgba(0,0,0,0.4)'
                                            : '0 30px 60px rgba(0,0,0,0.12)',
                                        borderColor: darkMode ? 'var(--accent-color)' : 'var(--accent-color)',
                                    },
                                }}
                            >
                                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                                    <CardMedia
                                        component="img"
                                        height="220"
                                        image={service.imageUrl}
                                        alt={service.title}
                                        sx={{
                                            objectFit: 'cover',
                                            filter: darkMode ? 'brightness(0.85)' : 'brightness(0.95)',
                                            transition: 'transform 0.6s ease',
                                            '&:hover': {
                                                transform: 'scale(1.1)',
                                            },
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: '-30px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            backgroundColor: darkMode ? '#1a1f3a' : '#fff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '2rem',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                            zIndex: 2,
                                        }}
                                    >
                                        {service.icon}
                                    </Box>
                                </Box>
                                <CardContent sx={{ p: 4, pt: 5, flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Typography
                                        variant="h5"
                                        component="div"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 2,
                                            color: darkMode ? '#fff' : '#1a1a1a',
                                            textAlign: 'center',
                                            fontSize: '1.4rem',
                                        }}
                                    >
                                        {service.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'var(--text-muted)',
                                            lineHeight: 1.7,
                                            textAlign: 'center',
                                            mb: 3,
                                            fontWeight: 400,
                                            fontSize: '0.95rem',
                                        }}
                                    >
                                        {service.description}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                                            lineHeight: 1.6,
                                            textAlign: 'center',
                                            fontSize: '0.9rem',
                                            mt: 'auto',
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
