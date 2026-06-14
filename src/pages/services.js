import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Container, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { HiOutlineLightBulb, HiOutlineDeviceMobile, HiOutlineCode } from 'react-icons/hi';

const services = [
    {
        title: 'Creative Strategy',
        description: 'Deep-dive analysis and architectural planning to ensure your digital product stands out in a crowded market.',
        icon: <HiOutlineLightBulb size={32} />,
        color: '#fbbf24'
    },
    {
        title: 'Responsive Design',
        description: 'Pixel-perfect, adaptive interfaces that deliver a consistent and delightful experience across all screen sizes.',
        icon: <HiOutlineDeviceMobile size={32} />,
        color: '#38bdf8'
    },
    {
        title: 'Full-Stack Development',
        description: 'Scalable, high-performance web applications built with the latest technologies and best practices.',
        icon: <HiOutlineCode size={32} />,
        color: '#818cf8'
    },
];

const ServicesSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 12
            }
        }
    };

    return (
        <Box
            id="services"
            sx={{
                py: { xs: 8, md: 16 },
                backgroundColor: 'transparent',
                color: 'var(--text-color)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{ textAlign: 'center', mb: 12 }}
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography
                        variant="overline"
                        sx={{
                            color: 'var(--accent-color)',
                            fontWeight: 800,
                            letterSpacing: '3px',
                            mb: 1,
                            display: 'block'
                        }}
                    >
                        Solutions
                    </Typography>
                    <Typography
                        variant="h2"
                        className="section-title gradient-text"
                        sx={{ mb: 3 }}
                    >
                        Impactful Services
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'var(--text-muted)',
                            fontWeight: 400,
                            fontSize: '1.2rem',
                            maxWidth: '700px',
                            margin: '0 auto',
                        }}
                    >
                        Blending aesthetics with high-performance engineering to
                        help brands scale their digital presence.
                    </Typography>
                </Box>

                <Grid
                    container
                    spacing={4}
                    component={motion.div}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map((service, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <motion.div variants={cardVariants}>
                                <Card
                                    className="glass-effect"
                                    sx={{
                                        height: '100%',
                                        p: 4,
                                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                        border: '1px solid var(--border-color)',
                                        transition: 'var(--transition-base)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        '&:hover': {
                                            transform: 'translateY(-15px)',
                                            borderColor: 'var(--accent-color)',
                                            boxShadow: `0 20px 40px -20px ${service.color}33`,
                                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                        },
                                    }}
                                >
                                    <IconButton
                                        sx={{
                                            p: 2.5,
                                            mb: 3,
                                            backgroundColor: `${service.color}15`,
                                            color: service.color,
                                            borderRadius: '20px',
                                            transition: 'var(--transition-base)',
                                            '&:hover': {
                                                backgroundColor: service.color,
                                                color: '#fff',
                                                transform: 'rotate(10deg)',
                                            }
                                        }}
                                    >
                                        {service.icon}
                                    </IconButton>
                                    <CardContent sx={{ p: 0 }}>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: 800,
                                                mb: 2,
                                                color: 'var(--text-color-2)',
                                                fontSize: '1.5rem',
                                            }}
                                        >
                                            {service.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'var(--text-muted)',
                                                lineHeight: 1.8,
                                                fontSize: '1rem',
                                            }}
                                        >
                                            {service.description}
                                        </Typography>
                                    </CardContent>

                                    <Box
                                        sx={{
                                            mt: 4,
                                            width: '40px',
                                            height: '2px',
                                            backgroundColor: service.color,
                                            opacity: 0.5,
                                            borderRadius: '2px'
                                        }}
                                    />
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ServicesSection;
