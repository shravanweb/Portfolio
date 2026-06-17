import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Tooltip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeToggle } from '../app/ThemeToggleProvider';

/* ── Data ───────────────────────────────────────────────── */
const categories = [
    {
        id: 'frontend',
        label: 'Frontend',
        icon: '⚡',
        color: '#2563eb',
        bg: 'rgba(37,99,235,0.06)',
        skills: [
            { name: 'React',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',           pct: 90 },
            { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', pct: 95 },
            { name: 'Next.js',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',         pct: 85 },
            { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', pct: 80 },
            { name: 'HTML5',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',           pct: 98 },
            { name: 'CSS3',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',             pct: 95 },
        ],
    },
    {
        id: 'uiux',
        label: 'UI / UX',
        icon: '🎨',
        color: '#7c3aed',
        bg: 'rgba(124,58,237,0.06)',
        skills: [
            { name: 'Material UI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg', pct: 90 },
            { name: 'Tailwind',    logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',                    pct: 85 },
            { name: 'Framer',      logo: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg',                              pct: 80 },
            { name: 'Adobe XD',    logo: 'https://www.logo.wine/a/logo/Adobe_XD/Adobe_XD-Logo.wine.svg',                         pct: 88 },
            { name: 'Photoshop',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',      pct: 75 },
        ],
    },
    {
        id: 'tools',
        label: 'Tools',
        icon: '🛠',
        color: '#059669',
        bg: 'rgba(5,150,105,0.06)',
        skills: [
            { name: 'Node.js',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',       pct: 75 },
            { name: 'Git',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',             pct: 90 },
            { name: 'GitHub',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',       pct: 92 },
            { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg', pct: 70 },
        ],
    },
];

/* ── SVG Arc Progress ───────────────────────────────────── */
const ArcProgress = ({ pct, color, size = 80 }) => {
    const stroke = 5;
    const r = (size - stroke * 2) / 2;
    const cx = size / 2;
    const cy = size / 2;
    const circ = 2 * Math.PI * r;
    const dash = (pct / 100) * circ;

    return (
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)', display: 'block' }}>
            {/* Track */}
            <circle cx={cx} cy={cy} r={r}
                fill="none" stroke="currentColor" strokeWidth={stroke}
                style={{ color: 'rgba(0,0,0,0.06)' }} />
            {/* Progress */}
            <motion.circle
                cx={cx} cy={cy} r={r}
                fill="none" stroke={color} strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={circ}
                initial={{ strokeDashoffset: circ }}
                whileInView={{ strokeDashoffset: circ - dash }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
            />
        </svg>
    );
};

/* ── Single Skill Card ──────────────────────────────────── */
const SkillCard = ({ skill, color, i }) => {
    const { darkMode } = useThemeToggle();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' }}
        >
            <Tooltip title={`${skill.pct}% proficiency`} placement="top" arrow>
                <Box
                    sx={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--r-xl)',
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 1.5,
                        cursor: 'default',
                        transition: 'var(--t-base)',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-xs)',
                        '&:hover': {
                            transform: 'translateY(-6px)',
                            boxShadow: `0 16px 40px ${color}1a`,
                            borderColor: color + '55',
                        },
                    }}
                >
                    {/* Background glow on hover */}
                    <Box sx={{
                        position: 'absolute', inset: 0,
                        background: `radial-gradient(ellipse at 50% 0%, ${color}09, transparent 70%)`,
                        pointerEvents: 'none',
                    }} />

                    {/* Arc + logo stacked */}
                    <Box sx={{ position: 'relative', width: 80, height: 80, flexShrink: 0 }}>
                        <ArcProgress pct={skill.pct} color={color} size={80} />
                        <Box
                            component="img"
                            src={skill.logo}
                            alt={skill.name}
                            sx={{
                                position: 'absolute',
                                top: '50%', left: '50%',
                                transform: 'translate(-50%,-50%)',
                                width: 32, height: 32,
                                objectFit: 'contain',
                            }}
                        />
                        {/* Percent label */}
                        <Box sx={{
                            position: 'absolute', bottom: -2, right: -4,
                            background: color,
                            color: '#fff',
                            fontSize: '0.58rem',
                            fontWeight: 800,
                            px: 0.75, py: 0.2,
                            borderRadius: '100px',
                            lineHeight: 1.4,
                            boxShadow: `0 2px 8px ${color}50`,
                        }}>
                            {skill.pct}%
                        </Box>
                    </Box>

                    <Typography sx={{
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        color: 'var(--text-primary)',
                        textAlign: 'center',
                        lineHeight: 1.2,
                    }}>
                        {skill.name}
                    </Typography>
                </Box>
            </Tooltip>
        </motion.div>
    );
};

/* ── Main Component ─────────────────────────────────────── */
const SkillsSection = () => {
    const [active, setActive] = useState('frontend');
    const cat = categories.find(c => c.id === active);

    return (
        <Box
            id="skills"
            sx={{
                py: { xs: 10, md: 18 },
                background: 'var(--bg-surface)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Decorative blobs */}
            <Box sx={{
                position: 'absolute', top: -120, right: -120,
                width: 400, height: 400, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />
            <Box sx={{
                position: 'absolute', bottom: -100, left: -80,
                width: 320, height: 320, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <Container maxWidth="lg">

                {/* ── Header ── */}
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    sx={{ textAlign: 'center', mb: { xs: 6, md: 9 } }}
                >
                    <span className="section-label">Skills & Expertise</span>
                    <Typography variant="h2" className="section-title" sx={{ mb: 2 }}>
                        Professional <span className="gradient-text">Skillset</span>
                    </Typography>
                    <Typography sx={{
                        color: 'var(--text-muted)',
                        fontSize: '1.05rem',
                        maxWidth: 500,
                        mx: 'auto',
                        lineHeight: 1.75,
                    }}>
                        A curated toolkit refined over 7+ years of building
                        high-performance digital products.
                    </Typography>
                </Box>

                {/* ── Tab switcher ── */}
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 5, md: 8 } }}
                >
                    <Box sx={{
                        display: 'inline-flex',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        borderRadius: '100px',
                        p: '4px',
                        gap: '4px',
                        boxShadow: 'var(--shadow-sm)',
                    }}>
                        {categories.map(c => (
                            <Box
                                key={c.id}
                                onClick={() => setActive(c.id)}
                                sx={{
                                    px: { xs: 2, sm: 3 },
                                    py: 1.1,
                                    borderRadius: '100px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 0.75,
                                    fontSize: '0.88rem',
                                    fontWeight: 700,
                                    transition: 'var(--t-fast)',
                                    background: active === c.id
                                        ? `linear-gradient(135deg, ${c.color}18, ${c.color}0d)`
                                        : 'transparent',
                                    color: active === c.id ? c.color : 'var(--text-muted)',
                                    border: '1px solid',
                                    borderColor: active === c.id ? c.color + '40' : 'transparent',
                                    boxShadow: active === c.id
                                        ? `0 4px 14px ${c.color}20`
                                        : 'none',
                                    '&:hover': {
                                        color: c.color,
                                        background: `${c.color}0a`,
                                    },
                                }}
                            >
                                <span style={{ fontSize: '1rem' }}>{c.icon}</span>
                                <span>{c.label}</span>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* ── Cards ── */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Grid container spacing={2.5}>
                            {cat.skills.map((skill, i) => (
                                <Grid item xs={6} sm={4} md={3} lg={2} key={skill.name}>
                                    <SkillCard skill={skill} color={cat.color} i={i} />
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </AnimatePresence>

                {/* ── Stats bar ── */}
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.25 }}
                    sx={{
                        mt: { xs: 8, md: 14 },
                        p: { xs: 3, md: 5 },
                        background: 'var(--gradient-brand)',
                        borderRadius: 'var(--r-2xl)',
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        gap: 4,
                        boxShadow: 'var(--shadow-blue)',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* Decorative circles */}
                    <Box sx={{ position:'absolute', top:-60, right:-60, width:200, height:200, borderRadius:'50%', border:'1px solid rgba(255,255,255,0.1)', pointerEvents:'none' }} />
                    <Box sx={{ position:'absolute', bottom:-40, left:-40, width:160, height:160, borderRadius:'50%', border:'1px solid rgba(255,255,255,0.08)', pointerEvents:'none' }} />

                    {[
                        { value: '15+', label: 'Technologies Mastered' },
                        { value: '7+',  label: 'Years of Experience' },
                        { value: '50+', label: 'Projects Delivered' },
                    ].map((s, i) => (
                        <Box key={i} sx={{ textAlign: 'center', position: 'relative' }}>
                            <Typography sx={{
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                                fontWeight: 900,
                                color: '#fff',
                                lineHeight: 1,
                                letterSpacing: '-0.03em',
                            }}>
                                {s.value}
                            </Typography>
                            <Typography sx={{
                                color: 'rgba(255,255,255,0.75)',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                mt: 0.5,
                                letterSpacing: '0.3px',
                            }}>
                                {s.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>

            </Container>
        </Box>
    );
};

export default SkillsSection;
