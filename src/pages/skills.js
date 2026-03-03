import React from 'react';
import { Box, Typography, Container, Grid, Paper, Tooltip } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider';
import { motion } from 'framer-motion';

const SkillsSection = () => {
    const { darkMode } = useThemeToggle();

    const skillCategories = [
        {
            title: "Frontend Development",
            skills: [
                { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 90 },
                { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 95 },
                { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', level: 85 },
                { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 80 },
                { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 98 },
                { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 95 },
            ]
        },
        {
            title: "UI/UX & Styling",
            skills: [
                { name: 'Material-UI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg', level: 90 },
                { name: 'Tailwind', logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', level: 85 },
                { name: 'Framer Motion', logo: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg', level: 80 },
                { name: 'Adobe XD', logo: 'https://www.logo.wine/a/logo/Adobe_XD/Adobe_XD-Logo.wine.svg', level: 88 },
                { name: 'Photoshop', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg', level: 75 },
            ]
        },
        {
            title: "Tools & Backend",
            skills: [
                { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 75 },
                { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 90 },
                { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', level: 92 },
                { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg', level: 70 },
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <Box
            id="skills"
            sx={{
                padding: { xs: '80px 20px', md: '140px 40px' },
                backgroundColor: 'transparent',
                color: 'var(--text-color)',
                position: 'relative',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 12 }}>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Typography
                            variant="h2"
                            className="section-title gradient-text"
                            sx={{ mb: 3 }}
                        >
                            Professional Skillset
                        </Typography>
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
                            A comprehensive toolkit designed to build resilient,
                            scalable, and visually captivating digital products.
                        </Typography>
                    </motion.div>
                </Box>

                {skillCategories.map((category, catIndex) => (
                    <Box key={catIndex} sx={{ mb: 8 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIndex * 0.2 }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 800,
                                    mb: 4,
                                    color: 'var(--text-color-2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    '&::after': {
                                        content: '""',
                                        flex: 1,
                                        height: '1px',
                                        background: 'var(--border-color)',
                                    }
                                }}
                            >
                                {category.title}
                            </Typography>
                        </motion.div>

                        <Grid container spacing={4}>
                            {category.skills.map((skill, index) => (
                                <Grid item xs={6} sm={4} md={3} lg={2.4} key={index}>
                                    <motion.div
                                        variants={itemVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Tooltip title={`${skill.level}% Proficiency`} arrow placement="top">
                                            <Paper
                                                elevation={0}
                                                className="glass-effect"
                                                sx={{
                                                    p: 3,
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                                    border: '1px solid var(--border-color)',
                                                    transition: 'var(--transition-base)',
                                                    cursor: 'pointer',
                                                    '&:hover': {
                                                        borderColor: 'var(--accent-color)',
                                                        boxShadow: '0 10px 30px -10px rgba(56, 189, 248, 0.2)',
                                                        backgroundColor: 'rgba(56, 189, 248, 0.05)',
                                                    },
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={skill.logo}
                                                    alt={skill.name}
                                                    sx={{
                                                        width: '50px',
                                                        height: '50px',
                                                        mb: 2,
                                                        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
                                                    }}
                                                />
                                                <Typography
                                                    variant="subtitle1"
                                                    sx={{
                                                        fontWeight: 700,
                                                        color: 'var(--text-color-2)',
                                                        fontSize: '0.95rem',
                                                        mb: 1.5
                                                    }}
                                                >
                                                    {skill.name}
                                                </Typography>

                                                {/* Professional Progress Indicator */}
                                                <Box sx={{ position: 'relative', height: '4px', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 2 }}>
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.level}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1, delay: 0.5 }}
                                                        style={{
                                                            height: '100%',
                                                            background: 'linear-gradient(90deg, var(--accent-color), var(--accent-alt))',
                                                            borderRadius: 'inherit',
                                                            boxShadow: '0 0 10px var(--accent-color)'
                                                        }}
                                                    />
                                                </Box>
                                            </Paper>
                                        </Tooltip>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                ))}
            </Container>
        </Box>
    );
};

export default SkillsSection;
