import { Box, Grid, Typography, Container } from '@mui/material';
import React from 'react';
import { useThemeToggle } from '../app/ThemeToggleProvider';
import Pic from "../assets/images/pic.png";
import AdSense from '../components/AdSense';
import { motion } from 'framer-motion';

const Aboutus = () => {
    const { darkMode } = useThemeToggle();

    return (
        <Box
            sx={{
                padding: { xs: '80px 20px', md: '140px 40px' },
                backgroundColor: darkMode ? 'var(--bg-primary)' : 'var(--bg-primary)',
                color: 'var(--text-color)',
                position: 'relative',
                overflow: 'hidden',
                zIndex: 2,
            }}
            id="about"
        >
            <Container maxWidth="lg">
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    sx={{
                        textAlign: 'center',
                        mb: 12,
                    }}
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
                            letterSpacing: '-1.5px',
                        }}
                    >
                        About Me
                    </Typography>
                    <Box
                        component={motion.div}
                        initial={{ width: 0 }}
                        whileInView={{ width: '80px' }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        sx={{
                            height: '6px',
                            background: darkMode
                                ? 'linear-gradient(90deg, #00d4ff, #0066ff)'
                                : 'linear-gradient(90deg, #0066ff, #6366f1)',
                            margin: '0 auto',
                            borderRadius: '3px',
                            mb: 4,
                        }}
                    />
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'var(--text-muted)',
                            fontWeight: 400,
                            fontSize: '1.2rem',
                            maxWidth: '600px',
                            margin: '0 auto',
                        }}
                    >
                        My journey, passion, and expertise in the digital world
                    </Typography>
                </Box>

                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={12} md={5}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            sx={{
                                position: 'relative',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: '20px',
                                    left: '-20px',
                                    right: '20px',
                                    bottom: '-20px',
                                    border: `2px solid ${darkMode ? 'rgba(0, 212, 255, 0.3)' : 'rgba(0, 102, 255, 0.1)'}`,
                                    borderRadius: '30px',
                                    zIndex: 0,
                                    transition: 'transform 0.3s ease',
                                },
                                '&:hover::before': {
                                    transform: 'translate(-10px, 10px)',
                                }
                            }}
                        >
                            <Box
                                component="img"
                                src={Pic}
                                alt="Rasamalla Shravan"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '30px',
                                    boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                                    position: 'relative',
                                    zIndex: 1,
                                    transition: 'transform 0.5s ease',
                                    filter: 'grayscale(20%)',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        filter: 'grayscale(0%)',
                                    },
                                }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 800,
                                    mb: 4,
                                    color: darkMode ? '#fff' : '#1a1a1a',
                                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                                    lineHeight: 1.2,
                                }}
                            >
                                Transforming ideas into <Box component="span" sx={{ color: 'var(--accent-color)' }}>digital reality</Box>
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    lineHeight: 2,
                                    color: 'var(--text-color)',
                                    mb: 3,
                                    fontSize: '1.1rem',
                                    fontWeight: 300,
                                    letterSpacing: '0.3px',
                                }}
                            >
                                I am a passionate <strong>Frontend Developer</strong> and <strong>UI Designer</strong> with extensive experience in building high-quality web applications. My approach combines technical expertise with creative problem-solving to deliver products that stand out.
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    lineHeight: 2,
                                    color: 'var(--text-color)',
                                    mb: 3,
                                    fontSize: '1.1rem',
                                    fontWeight: 300,
                                    letterSpacing: '0.3px',
                                }}
                            >
                                Whether it's crafting pixel-perfect user interfaces, optimizing performance, or ensuring accessibility, I pay attention to every detail. I specialize in the <strong>React ecosystem</strong> and modern CSS frameworks, constantly learning and adapting to the ever-evolving web landscape.
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    lineHeight: 2,
                                    color: 'var(--text-color)',
                                    mb: 4,
                                    fontSize: '1.1rem',
                                    fontWeight: 300,
                                    letterSpacing: '0.3px',
                                }}
                            >
                                Beyond code, I believe in the power of collaboration and clear communication. I treat every project as a partnership, working closely with clients to truly understand their vision and goals.
                            </Typography>

                            <Box sx={{ display: 'flex', gap: 4 }}>
                                <Box>
                                    <Typography variant="h3" sx={{ fontWeight: 900, color: 'var(--accent-color)' }}>7+</Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px', mt: 1 }}>Years Experience</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h3" sx={{ fontWeight: 900, color: 'var(--accent-color)' }}>50+</Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px', mt: 1 }}>Projects Done</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                {/* AdSense Ad Unit */}
                <Box sx={{ mt: 10 }}>
                    <AdSense adFormat="auto" requireMinContent={true} />
                </Box>
            </Container>
        </Box>
    );
};

export default Aboutus;
