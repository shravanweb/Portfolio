import { Box, Grid, Typography, Container, Stack, Button } from '@mui/material';
import React from 'react';
import { useThemeToggle } from '../app/ThemeToggleProvider';
import { HiOutlineDownload, HiOutlineLightningBolt } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Pic = "/img.png";

const Aboutus = () => {
    const { darkMode } = useThemeToggle();

    const stats = [
        { label: 'Years Experience', value: '7+', icon: <HiOutlineLightningBolt /> },
        { label: 'Successful Projects', value: '50+', icon: <HiOutlineLightningBolt /> },
        { label: 'Industry Partners', value: '12+', icon: <HiOutlineLightningBolt /> },
    ];

    return (
        <Box
            id="about"
            sx={{
                py: { xs: 8, md: 16 },
                backgroundColor: 'transparent',
                color: 'var(--text-color)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 6, md: 12 }} alignItems="center">
                    <Grid item xs={12} md={5}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    zIndex: 1,
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        inset: '-20px',
                                        border: '2px solid var(--accent-color)',
                                        borderRadius: '40px',
                                        opacity: 0.2,
                                        zIndex: -1,
                                        animation: 'float 6s ease-in-out infinite'
                                    }
                                }}
                            >
                                <Box
                                    component="img"
                                    src={Pic}
                                    alt="Shravan Rasamalla"
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '32px',
                                        filter: darkMode ? 'grayscale(20%) brightness(0.9)' : 'none',
                                        transition: 'var(--transition-slow)',
                                        boxShadow: 'var(--shadow-xl)',
                                        display: 'block',
                                        '&:hover': {
                                            filter: 'grayscale(0%) brightness(1)',
                                            transform: 'translateY(-10px)'
                                        }
                                    }}
                                />

                                <Box
                                    className="glass-effect"
                                    sx={{
                                        position: 'absolute',
                                        bottom: -30,
                                        right: -30,
                                        p: 3,
                                        borderRadius: '24px',
                                        display: { xs: 'none', lg: 'block' },
                                        border: '1px solid var(--border-color)',
                                        maxWidth: '200px'
                                    }}
                                >
                                    <Typography variant="h6" sx={{ fontWeight: 800, color: 'var(--accent-color)', mb: 0.5 }}>
                                        Full Stack
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: 'var(--text-muted)', fontWeight: 600 }}>
                                        Specialized in high-performance web architecture.
                                    </Typography>
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Typography
                                variant="overline"
                                sx={{
                                    color: 'var(--accent-color)',
                                    fontWeight: 800,
                                    letterSpacing: '3px',
                                    mb: 2,
                                    display: 'block'
                                }}
                            >
                                About the Architect
                            </Typography>

                            <Typography
                                variant="h2"
                                className="section-title gradient-text"
                                sx={{ mb: 4, textAlign: 'left', margin: 0 }}
                            >
                                Transforming Vision into Digital Precision
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'var(--text-muted)',
                                    fontSize: '1.15rem',
                                    lineHeight: 1.8,
                                    mb: 4,
                                    fontWeight: 400
                                }}
                            >
                                I am Shravan Rasamalla, a dedicated <strong>Frontend Architect</strong> and
                                <strong>UI/UX Specialist</strong>. My mission is to bridge the gap between
                                complex engineering and human-centric design. With over 7 years of deep-diving
                                into the digital landscape, I've mastered the art of building scalable,
                                lightning-fast applications that don't just work—they inspire.
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'var(--text-muted)',
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                    mb: 6,
                                    fontWeight: 300
                                }}
                            >
                                My expertise lies in the <strong>React ecosystem</strong>, where I combine
                                performance optimization with stunning visual aesthetics. I believe every
                                line of code should contribute to a seamless user journey.
                            </Typography>

                            <Grid container spacing={4} sx={{ mb: 6 }}>
                                {stats.map((stat, index) => (
                                    <Grid item xs={4} key={index}>
                                        <Typography variant="h3" sx={{ fontWeight: 900, color: 'var(--text-color-2)', mb: 0.5 }}>
                                            {stat.value}
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: 'var(--accent-color)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                            {stat.label}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>

                            <Stack direction="row" spacing={3}>
                                <Button
                                    variant="contained"
                                    startIcon={<HiOutlineDownload />}
                                    sx={{
                                        bgcolor: 'var(--text-color-2)',
                                        color: darkMode ? '#000' : '#fff',
                                        fontWeight: 800,
                                        borderRadius: '12px',
                                        px: 4,
                                        py: 1.5,
                                        textTransform: 'none',
                                        '&:hover': {
                                            bgcolor: 'var(--accent-color)',
                                            color: '#000'
                                        }
                                    }}
                                >
                                    Download CV
                                </Button>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        borderColor: 'var(--border-color)',
                                        color: 'var(--text-color-2)',
                                        fontWeight: 700,
                                        borderRadius: '12px',
                                        px: 4,
                                        textTransform: 'none',
                                        '&:hover': {
                                            borderColor: 'var(--accent-color)',
                                            color: 'var(--accent-color)',
                                            bgcolor: 'transparent'
                                        }
                                    }}
                                >
                                    My Journey
                                </Button>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <style>
                {`
                    @keyframes float {
                        0% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-20px) rotate(2deg); }
                        100% { transform: translateY(0px) rotate(0deg); }
                    }
                `}
            </style>
        </Box>
    );
};

export default Aboutus;
