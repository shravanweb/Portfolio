import React from 'react';
import { Typography, Button, Box, IconButton, Container } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider';
import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa';
import DownloadIcon from '@mui/icons-material/Download';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Download from "../assets/Shravan_Rasamalla-Ui Developer.doc";
import HeroBackground3D from '../components/HeroBackground3D';

const Herosection = () => {
    const { darkMode } = useThemeToggle();

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.4,
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 12
            }
        }
    };

    const scrollIndicatorVariants = {
        animate: {
            y: [0, 10, 0],
            opacity: [0.3, 1, 0.3],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundColor: 'transparent',
                color: 'var(--text-color)',
                textAlign: 'center',
                overflow: 'hidden',
                pt: { xs: 12, md: 10 },
                pb: { xs: 4, md: 0 },
            }}
        >
            {/* Beautiful 3D Animated Background */}
            <HeroBackground3D />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants}>
                        <Typography
                            variant="overline"
                            sx={{
                                color: 'var(--accent-color)',
                                fontWeight: 700,
                                letterSpacing: '4px',
                                mb: 2,
                                display: 'block',
                                fontSize: '0.9rem',
                                textShadow: darkMode ? '0 0 20px rgba(56, 189, 248, 0.3)' : 'none',
                            }}
                        >
                            Design • Code • Create
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontWeight: 900,
                                mb: 2,
                                fontSize: { xs: '3.5rem', sm: '5rem', md: '7rem' },
                                letterSpacing: '-0.04em',
                                lineHeight: 1,
                                color: 'var(--text-color-2)',
                            }}
                        >
                            I'm <span className="gradient-text">Shravan</span>
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Box sx={{ minHeight: '80px', mb: 3 }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: '1.5rem', sm: '2.2rem', md: '3rem' },
                                    color: 'var(--text-muted)',
                                    letterSpacing: '-0.02em',
                                }}
                            >
                                <TypeAnimation
                                    sequence={[
                                        'Senior Frontend Developer',
                                        2000,
                                        'UI/UX Design Strategist',
                                        2000,
                                        'Full-Stack Enthusiast',
                                        2000,
                                    ]}
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </Typography>
                        </Box>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Typography
                            variant="body1"
                            sx={{
                                mb: 6,
                                color: 'var(--text-muted)',
                                fontSize: { xs: '1.1rem', md: '1.35rem' },
                                maxWidth: '800px',
                                margin: '0 auto 4rem',
                                fontWeight: 400,
                                lineHeight: 1.7,
                            }}
                        >
                            Architecting high-performance digital ecosystems with a focused eye on
                            minimalist aesthetics and seamless user interactions.
                            Let's transform your vision into an immersive reality.
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 6, flexWrap: 'wrap' }}>
                            <Button
                                variant="contained"
                                startIcon={<ContactMailIcon />}
                                href="/contact"
                                sx={{
                                    padding: '18px 48px',
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, var(--accent-color), var(--accent-alt))',
                                    color: '#fff',
                                    textTransform: 'none',
                                    boxShadow: '0 10px 40px -10px rgba(56, 189, 248, 0.5)',
                                    transition: 'var(--transition-base)',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 20px 50px -10px rgba(56, 189, 248, 0.6)',
                                        filter: 'brightness(1.1)',
                                    },
                                }}
                            >
                                Start a Conversation
                            </Button>
                            <Button
                                variant="outlined"
                                href={Download}
                                download="Shravan_Rasamalla-Ui Developer.doc"
                                startIcon={<DownloadIcon />}
                                sx={{
                                    padding: '18px 48px',
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    borderRadius: '12px',
                                    borderColor: 'var(--border-color)',
                                    color: 'var(--text-color)',
                                    textTransform: 'none',
                                    backdropFilter: 'blur(10px)',
                                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                    transition: 'var(--transition-base)',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                        borderColor: 'var(--accent-color)',
                                    },
                                }}
                            >
                                Technical Resume
                            </Button>
                        </Box>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2.5 }}>
                            {[
                                { icon: <FaLinkedin size={22} />, url: "https://www.linkedin.com/in/shravan-rasamalla/", label: "LinkedIn" },
                                { icon: <FaGithub size={22} />, url: "https://github.com/shravanweb", label: "GitHub" },
                                { icon: <FaBehance size={22} />, url: "https://www.behance.net/shravanrasamalla", label: "Behance" }
                            ].map((social, index) => (
                                <IconButton
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="glass-effect"
                                    sx={{
                                        color: 'var(--text-color)',
                                        p: 2,
                                        transition: 'var(--transition-base)',
                                        '&:hover': {
                                            color: 'var(--accent-color)',
                                            transform: 'translateY(-3px)',
                                            borderColor: 'var(--accent-color)',
                                            boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)',
                                        },
                                    }}
                                >
                                    {social.icon}
                                </IconButton>
                            ))}
                        </Box>
                    </motion.div>
                </motion.div>
            </Container>

            {/* Scroll Down Indicator */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 40,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                }}
            >
                <motion.div
                    variants={scrollIndicatorVariants}
                    animate="animate"
                    style={{ cursor: 'pointer' }}
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                >
                    <Typography
                        variant="caption"
                        sx={{
                            display: 'block',
                            mb: 1,
                            color: 'var(--text-muted)',
                            fontWeight: 600,
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                        }}
                    >
                        Explore
                    </Typography>
                    <KeyboardArrowDownIcon sx={{ color: 'var(--accent-color)', fontSize: '2rem' }} />
                </motion.div>
            </Box>
        </Box>
    );
};

export default Herosection;
