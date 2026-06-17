import React, { useState } from 'react';
import {
    Box, Grid, Typography, Container, Chip, Stack, Button, IconButton
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineArrowNarrowRight, HiOutlineExternalLink } from 'react-icons/hi';
import { useThemeToggle } from '../app/ThemeToggleProvider';

const ALL = 'All';

const projects = [
    {
        title: 'Job Fair Portal',
        description: 'Real-time candidate-employer matching platform for virtual and physical career events with interview scheduling.',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&auto=format',
        link: 'https://jobfair.jobsnprofiles.com/',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
        category: 'Enterprise',
        accent: '#2563eb',
        year: '2024',
    },
    {
        title: 'JNP Career Hub',
        description: 'Talent management platform with personalised career paths, skill assessments, and professional networking.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&auto=format',
        link: 'https://hub.jobsnprofiles.com',
        tech: ['Next.js', 'MUI', 'Redis', 'WebSockets'],
        category: 'Platform',
        accent: '#7c3aed',
        year: '2024',
    },
    {
        title: 'JNP Business Solutions',
        description: 'Advanced B2B suite for enterprise recruitment, workforce analytics, and strategic human capital management.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format',
        link: 'https://bs.jobsnprofiles.com',
        tech: ['React', 'Chart.js', 'GraphQL', 'AWS'],
        category: 'SaaS',
        accent: '#059669',
        year: '2023',
    },
    {
        title: 'JobsNProfiles Portal',
        description: 'Global flagship career bridge connecting 5M+ professionals with top-tier international opportunities.',
        image: 'https://images.unsplash.com/photo-1454165833767-027eeef1593e?w=900&auto=format',
        link: 'https://jobsnprofiles.com/',
        tech: ['React', 'Express', 'MySQL', 'Search API'],
        category: 'Main Product',
        accent: '#dc2626',
        year: '2023',
    },
    {
        title: 'D3E Design Studio',
        description: 'Creative technology studio specialising in high-performance design systems, interactive experiences, and digital branding.',
        image: 'https://images.unsplash.com/photo-1541462608141-ad4d01947f6d?w=900&auto=format',
        link: 'https://d3e.studio',
        tech: ['Three.js', 'Framer Motion', 'React', 'GSAP'],
        category: 'Creative',
        accent: '#f59e0b',
        year: '2023',
    },
    {
        title: 'ContractFlow CMS',
        description: 'Enterprise contract lifecycle management with automated compliance tracking and secure legal workflows.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format',
        link: 'https://contracts.jobsnprofiles.com/login',
        tech: ['Next.js', 'Tailwind', 'PostgreSQL', 'Auth0'],
        category: 'LegalTech',
        accent: '#0891b2',
        year: '2022',
    },
];

const categories = [ALL, ...Array.from(new Set(projects.map(p => p.category)))];

/* ── Single project card ── */
const ProjectCard = ({ project, index }) => {
    const { darkMode } = useThemeToggle();
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.09, ease: 'easeOut' }}
            style={{ height: '100%' }}
        >
            <Box
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                sx={{
                    height: '100%',
                    borderRadius: 'var(--radius-xl)',
                    overflow: 'hidden',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    boxShadow: hovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                    transition: 'var(--transition-base)',
                    transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    ...(hovered && { borderColor: project.accent + '55' }),
                }}
            >
                {/* Image */}
                <Box
                    sx={{
                        position: 'relative',
                        height: 220,
                        overflow: 'hidden',
                        flexShrink: 0,
                    }}
                >
                    <Box
                        component="img"
                        src={project.image}
                        alt={project.title}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.7s cubic-bezier(0.2,0.8,0.2,1)',
                            transform: hovered ? 'scale(1.08)' : 'scale(1)',
                        }}
                    />
                    {/* Gradient overlay */}
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            background: hovered
                                ? `linear-gradient(180deg, transparent 30%, ${project.accent}cc 100%)`
                                : 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.45) 100%)',
                            transition: 'var(--transition-slow)',
                        }}
                    />
                    {/* Category chip */}
                    <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
                        <Box
                            sx={{
                                px: 1.5, py: 0.5,
                                borderRadius: '100px',
                                background: 'rgba(255,255,255,0.15)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255,255,255,0.25)',
                                color: '#fff',
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                letterSpacing: '0.5px',
                                textTransform: 'uppercase',
                            }}
                        >
                            {project.category}
                        </Box>
                    </Box>
                    {/* Year */}
                    <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
                        <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', fontWeight: 600 }}>
                            {project.year}
                        </Typography>
                    </Box>
                    {/* View link icon — appears on hover */}
                    <motion.div
                        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
                        transition={{ duration: 0.25 }}
                        style={{ position: 'absolute', bottom: 16, right: 16 }}
                    >
                        <IconButton
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                            sx={{
                                background: 'rgba(255,255,255,0.2)',
                                backdropFilter: 'blur(8px)',
                                color: '#fff',
                                border: '1px solid rgba(255,255,255,0.3)',
                                '&:hover': { background: 'rgba(255,255,255,0.35)' },
                                width: 40, height: 40,
                            }}
                        >
                            <HiOutlineExternalLink size={16} />
                        </IconButton>
                    </motion.div>
                </Box>

                {/* Content */}
                <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {/* Accent line */}
                    <Box
                        sx={{
                            width: 32, height: 3,
                            borderRadius: 2,
                            background: `linear-gradient(90deg, ${project.accent}, ${project.accent}88)`,
                        }}
                    />

                    <Typography
                        sx={{
                            fontWeight: 800,
                            fontSize: '1.15rem',
                            color: 'var(--text-color-2)',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.25,
                        }}
                    >
                        {project.title}
                    </Typography>

                    <Typography
                        sx={{
                            color: 'var(--text-muted)',
                            fontSize: '0.88rem',
                            lineHeight: 1.7,
                            flex: 1,
                        }}
                    >
                        {project.description}
                    </Typography>

                    {/* Tech chips */}
                    <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mt: 0.5 }}>
                        {project.tech.map(t => (
                            <Box
                                key={t}
                                sx={{
                                    px: 1.25, py: 0.35,
                                    borderRadius: '100px',
                                    background: `${project.accent}10`,
                                    border: `1px solid ${project.accent}28`,
                                    color: project.accent,
                                    fontSize: '0.7rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.3px',
                                    transition: 'var(--transition-fast)',
                                    ...(darkMode && { filter: 'brightness(1.2)' }),
                                }}
                            >
                                {t}
                            </Box>
                        ))}
                    </Stack>

                    {/* CTA */}
                    <Box sx={{ mt: 1 }}>
                        <Button
                            variant="text"
                            size="small"
                            endIcon={<HiOutlineArrowNarrowRight />}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: project.accent,
                                fontWeight: 700,
                                fontSize: '0.85rem',
                                textTransform: 'none',
                                p: 0,
                                minWidth: 0,
                                '&:hover': {
                                    background: 'transparent',
                                    gap: '6px',
                                },
                                '& .MuiButton-endIcon': { ml: 0.5, transition: 'margin 0.2s' },
                                '&:hover .MuiButton-endIcon': { ml: 1 },
                            }}
                        >
                            View Project
                        </Button>
                    </Box>
                </Box>
            </Box>
        </motion.div>
    );
};

/* ── Main section ── */
const Projects = () => {
    const [activeFilter, setActiveFilter] = useState(ALL);

    const filtered = activeFilter === ALL
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <Box
            id="projects"
            sx={{
                py: { xs: 10, md: 16 },
                backgroundColor: 'var(--bg-secondary)',
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
                    sx={{ textAlign: 'center', mb: 7 }}
                >
                    <Box component="span" className="section-badge">Portfolio</Box>
                    <Typography variant="h2" className="section-title gradient-text">
                        Featured Projects
                    </Typography>
                    <Typography
                        sx={{
                            color: 'var(--text-muted)',
                            fontSize: '1.1rem',
                            maxWidth: 620,
                            mx: 'auto',
                            lineHeight: 1.75,
                        }}
                    >
                        From enterprise platforms to creative studios — real products
                        that make a real difference.
                    </Typography>
                </Box>

                {/* Filter bar */}
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: 1,
                        mb: 8,
                    }}
                >
                    {categories.map(cat => (
                        <Box
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            sx={{
                                px: 2.5, py: 0.875,
                                borderRadius: '100px',
                                border: '1px solid',
                                cursor: 'pointer',
                                fontSize: '0.85rem',
                                fontWeight: 700,
                                transition: 'var(--transition-fast)',
                                borderColor: activeFilter === cat
                                    ? 'var(--accent-color)'
                                    : 'var(--border-subtle)',
                                background: activeFilter === cat
                                    ? 'var(--accent-color)'
                                    : 'var(--bg-card)',
                                color: activeFilter === cat ? '#fff' : 'var(--text-muted)',
                                boxShadow: activeFilter === cat
                                    ? 'var(--shadow-colored)'
                                    : 'var(--shadow-xs)',
                                '&:hover': {
                                    borderColor: 'var(--accent-color)',
                                    color: activeFilter === cat ? '#fff' : 'var(--accent-color)',
                                },
                            }}
                        >
                            {cat}
                        </Box>
                    ))}
                </Box>

                {/* Cards grid */}
                <AnimatePresence mode="popLayout">
                    <Grid container spacing={3.5}>
                        {filtered.map((project, index) => (
                            <Grid item xs={12} sm={6} lg={4} key={project.title}>
                                <ProjectCard project={project} index={index} />
                            </Grid>
                        ))}
                    </Grid>
                </AnimatePresence>

                {/* Footer CTA */}
                <Box
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    sx={{ textAlign: 'center', mt: 10 }}
                >
                    <Typography sx={{ color: 'var(--text-muted)', mb: 3, fontSize: '1rem' }}>
                        Want to see more? Let's talk about your next project.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        href="/contact"
                        endIcon={<HiOutlineArrowNarrowRight />}
                        sx={{
                            px: 5, py: 1.75,
                            borderRadius: '100px',
                            background: 'linear-gradient(135deg, var(--accent-color), var(--accent-alt))',
                            color: '#fff',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            textTransform: 'none',
                            boxShadow: 'var(--shadow-colored)',
                            '&:hover': {
                                transform: 'translateY(-3px)',
                                boxShadow: '0 12px 32px rgba(37,99,235,0.35)',
                                filter: 'brightness(1.05)',
                            },
                            transition: 'var(--transition-base)',
                        }}
                    >
                        Start a Conversation
                    </Button>
                </Box>

            </Container>
        </Box>
    );
};

export default Projects;
