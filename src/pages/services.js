import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { HiOutlineLightBulb, HiOutlineDeviceMobile, HiOutlineCode } from 'react-icons/hi';
import { useThemeToggle } from '../app/ThemeToggleProvider';

const services = [
    {
        title: 'Creative Strategy',
        description: 'Deep-dive analysis and architectural planning to ensure your digital product stands out in a crowded market.',
        icon: <HiOutlineLightBulb size={28} />,
        color: '#f59e0b',
        number: '01',
    },
    {
        title: 'Responsive Design',
        description: 'Pixel-perfect, adaptive interfaces that deliver a consistent and delightful experience across all screen sizes.',
        icon: <HiOutlineDeviceMobile size={28} />,
        color: '#2563eb',
        number: '02',
    },
    {
        title: 'Full-Stack Development',
        description: 'Scalable, high-performance web applications built with the latest technologies and best practices.',
        icon: <HiOutlineCode size={28} />,
        color: '#7c3aed',
        number: '03',
    },
];

const ServicesSection = () => {
    const { darkMode } = useThemeToggle();

    return (
        <Box
            id="services"
            sx={{
                py: { xs: 10, md: 16 },
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-color)',
                position: 'relative',
            }}
        >
            <Container maxWidth="lg">
                {/* Header */}
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    sx={{ textAlign: 'center', mb: 9 }}
                >
                    <Box component="span" className="section-badge">Solutions</Box>
                    <Typography variant="h2" className="section-title gradient-text">
                        Impactful Services
                    </Typography>
                    <Typography
                        sx={{
                            color: 'var(--text-muted)',
                            fontSize: '1.1rem',
                            maxWidth: 600,
                            mx: 'auto',
                            lineHeight: 1.75,
                        }}
                    >
                        Blending aesthetics with high-performance engineering to
                        help brands scale their digital presence.
                    </Typography>
                </Box>

                {/* Cards */}
                <Grid container spacing={4}>
                    {services.map((service, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.12 }}
                                whileHover={{ y: -8 }}
                                style={{ height: '100%' }}
                            >
                                <Box
                                    sx={{
                                        height: '100%',
                                        p: { xs: 3.5, md: 4.5 },
                                        borderRadius: 'var(--radius-xl)',
                                        background: 'var(--bg-card)',
                                        border: '1px solid var(--border-subtle)',
                                        boxShadow: 'var(--shadow-sm)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 2,
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'var(--transition-base)',
                                        '&:hover': {
                                            borderColor: `${service.color}44`,
                                            boxShadow: `0 16px 40px ${service.color}18`,
                                        },
                                        /* Large number watermark */
                                        '&::before': {
                                            content: `"${service.number}"`,
                                            position: 'absolute',
                                            top: -12,
                                            right: 24,
                                            fontSize: '6rem',
                                            fontWeight: 900,
                                            color: service.color,
                                            opacity: 0.06,
                                            lineHeight: 1,
                                            letterSpacing: '-4px',
                                            pointerEvents: 'none',
                                        },
                                    }}
                                >
                                    {/* Icon */}
                                    <Box
                                        sx={{
                                            width: 56, height: 56,
                                            borderRadius: 'var(--radius-md)',
                                            background: `${service.color}14`,
                                            border: `1px solid ${service.color}28`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: service.color,
                                            transition: 'var(--transition-base)',
                                            '&:hover': {
                                                background: service.color,
                                                color: '#fff',
                                            },
                                        }}
                                    >
                                        {service.icon}
                                    </Box>

                                    <Typography
                                        sx={{
                                            fontWeight: 800,
                                            fontSize: '1.2rem',
                                            color: 'var(--text-color-2)',
                                            letterSpacing: '-0.01em',
                                        }}
                                    >
                                        {service.title}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: 'var(--text-muted)',
                                            lineHeight: 1.75,
                                            fontSize: '0.95rem',
                                        }}
                                    >
                                        {service.description}
                                    </Typography>

                                    {/* Bottom accent line */}
                                    <Box
                                        sx={{
                                            mt: 'auto',
                                            pt: 2,
                                            borderTop: `1px solid ${service.color}20`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 24, height: 2,
                                                background: service.color,
                                                borderRadius: 2,
                                            }}
                                        />
                                        <Typography
                                            sx={{
                                                fontSize: '0.72rem',
                                                fontWeight: 700,
                                                color: service.color,
                                                letterSpacing: 1,
                                                textTransform: 'uppercase',
                                            }}
                                        >
                                            {service.number}
                                        </Typography>
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ServicesSection;
