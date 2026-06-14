import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, Button, Container, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { HiOutlineArrowNarrowRight, HiOutlineExternalLink } from 'react-icons/hi';

const projects = [
    {
        title: 'Job Fair Portal',
        description: 'A robust ecosystem for hosting virtual and physical career events, featuring real-time candidate-employer matching and interview scheduling. This platform streamlines recruitment processes for both employers and job seekers, enhancing efficiency and engagement.',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800',
        link: 'https://jobfair.jobsnprofiles.com/',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
        category: 'Enterprise'
    },
    {
        title: 'JNP Career Hub',
        description: 'Comprehensive talent management platform providing personalized career paths, skill assessments, and professional networking. It empowers individuals to navigate their career journey with tailored resources and community support.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
        link: 'https://hub.jobsnprofiles.com',
        tech: ['Next.js', 'MUI', 'Redis', 'WebSockets'],
        category: 'Platform'
    },
    {
        title: 'JNP Business Solutions',
        description: 'Advanced B2B suite for enterprise recruitment, workforce analytics, and strategic human capital management. This solution offers powerful tools for businesses to optimize their talent acquisition and retention strategies.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        link: 'https://bs.jobsnprofiles.com',
        tech: ['React', 'Chart.js', 'GraphQL', 'AWS'],
        category: 'SaaS'
    },
    {
        title: 'JobsNProfiles Portal',
        description: 'The global flagship career bridge connecting over 5 million professionals with top-tier international opportunities. It serves as a vital link between talent and global employers, fostering career growth and international mobility.',
        image: 'https://images.unsplash.com/photo-1454165833767-027eeef1593e?w=800',
        link: 'https://jobsnprofiles.com/',
        tech: ['React', 'Express', 'MySQL', 'Search API'],
        category: 'Main Product'
    },
    {
        title: 'D3E Design Studio',
        description: 'Creative technology studio specializing in high-performance design systems, interactive experiences, and digital branding. We craft visually stunning and highly functional digital products that captivate and engage users.',
        image: 'https://images.unsplash.com/photo-1541462608141-ad4d01947f6d?w=800',
        link: 'https://d3e.studio',
        tech: ['Three.js', 'Framer Motion', 'React', 'GSAP'],
        category: 'Creative Technology'
    },
    {
        title: 'ContractFlow CMS',
        description: 'Enterprise-grade contract lifecycle management system with automated compliance tracking and secure legal workflows. This platform ensures seamless contract management, reducing risks and improving operational efficiency.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
        link: 'https://contracts.jobsnprofiles.com/login',
        tech: ['Next.js', 'Tailwind', 'PostgreSQL', 'Auth0'],
        category: 'LegalTech'
    },
];

const Projects = () => {
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
                stiffness: 80,
                damping: 12
            }
        }
    };

    return (
        <Box
            id="projects"
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
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
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
                        Portfolio
                    </Typography>
                    <Typography
                        variant="h2"
                        className="section-title gradient-text"
                        sx={{ mb: 3 }}
                    >
                        Success Stories
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'var(--text-muted)',
                            fontWeight: 400,
                            fontSize: '1.2rem',
                            maxWidth: '750px',
                            margin: '0 auto',
                        }}
                    >
                        Diving deep into complex problems to deliver elegant,
                        scalable, and human-centric digital solutions.
                    </Typography>
                </Box>

                <Grid
                    container
                    spacing={6}
                    component={motion.div}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {projects.map((project, index) => (
                        <Grid item xs={12} key={index}>
                            <motion.div variants={cardVariants}>
                                <Card
                                    className="glass-effect"
                                    sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column', md: 'row' },
                                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '32px',
                                        overflow: 'hidden',
                                        transition: 'var(--transition-base)',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            borderColor: 'var(--accent-color)',
                                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                            boxShadow: '0 30px 60px -20px rgba(0,0,0,0.5)',
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: { xs: '100%', md: '45%' },
                                            position: 'relative',
                                            overflow: 'hidden',
                                            minHeight: { xs: '250px', md: '400px' }
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={project.image}
                                            alt={project.title}
                                            sx={{
                                                height: '100%',
                                                width: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
                                                '.glass-effect:hover &': {
                                                    transform: 'scale(1.1)',
                                                }
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 20,
                                                left: 20,
                                                zIndex: 2
                                            }}
                                        >
                                            <Chip
                                                label={project.category}
                                                sx={{
                                                    bgcolor: 'rgba(255,255,255,0.1)',
                                                    backdropFilter: 'blur(10px)',
                                                    color: '#fff',
                                                    fontWeight: 700,
                                                    borderRadius: '8px',
                                                    border: '1px solid rgba(255,255,255,0.1)'
                                                }}
                                            />
                                        </Box>
                                    </Box>

                                    <CardContent
                                        sx={{
                                            width: { xs: '100%', md: '55%' },
                                            p: { xs: 4, md: 8 },
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontWeight: 800,
                                                mb: 3,
                                                color: 'var(--text-color-2)',
                                                fontSize: { xs: '2rem', md: '2.5rem' },
                                                letterSpacing: '-0.02em'
                                            }}
                                        >
                                            {project.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'var(--text-muted)',
                                                fontSize: '1.1rem',
                                                lineHeight: 1.8,
                                                mb: 4,
                                                maxWidth: '500px'
                                            }}
                                        >
                                            {project.description}
                                        </Typography>

                                        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 6 }}>
                                            {project.tech.map((t, i) => (
                                                <Chip
                                                    key={i}
                                                    label={t}
                                                    variant="outlined"
                                                    sx={{
                                                        borderColor: 'var(--border-color)',
                                                        color: 'var(--text-muted)',
                                                        fontWeight: 600,
                                                        mb: 1
                                                    }}
                                                />
                                            ))}
                                        </Stack>

                                        <Stack direction="row" spacing={3}>
                                            <Button
                                                variant="contained"
                                                endIcon={<HiOutlineArrowNarrowRight />}
                                                href={project.link}
                                                target="_blank"
                                                sx={{
                                                    bgcolor: 'var(--accent-color)',
                                                    color: '#000',
                                                    fontWeight: 800,
                                                    borderRadius: '12px',
                                                    px: 4,
                                                    py: 1.5,
                                                    textTransform: 'none',
                                                    fontSize: '1rem',
                                                    '&:hover': {
                                                        bgcolor: 'var(--accent-alt)',
                                                        color: '#fff'
                                                    }
                                                }}
                                            >
                                                Explore Impact
                                            </Button>
                                            <Button
                                                variant="text"
                                                startIcon={<HiOutlineExternalLink />}
                                                sx={{
                                                    color: 'var(--text-muted)',
                                                    fontWeight: 700,
                                                    textTransform: 'none',
                                                    '&:hover': { color: 'var(--accent-color)' }
                                                }}
                                            >
                                                Live Preview
                                            </Button>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;
