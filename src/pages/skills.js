import React from 'react';
import { Box, Typography } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider'; // Import useThemeToggle hook


const SkillsSection = () => {
    const { darkMode } = useThemeToggle(); // Access darkMode state

    const skills = [
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Photoshop', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
        { name: 'Adobe XD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adobe XD/adobe XD-plain.svg' },
        { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
    ];

    return (
        <Box
            sx={{
                padding: '70px',
                textAlign: 'center',
                padding: '50px',
                backgroundColor: darkMode ? '#1c1c1c' : '#f9f9f9', // Dark mode background
                color: darkMode ? '#fff' : '#333', // Dark mode text color
            }}
        >
            <Typography
                variant="h3"
                component="h2"
                sx={{
                    mb: 4,
                    fontWeight: 'bold',
                    color: '#333',
                    padding: '50px',
                  
                    color: darkMode ? '#fff' : '#333', // Dark mode text color
                }}
            >
                My Skills
            </Typography>

            {/* Horizontal Scrollable Container */}
            <Box
                sx={{
                    display: 'flex',
                    overflowX: 'auto',
                    whiteSpace: 'nowrap',
                    padding: '20px 10px',
                    scrollBehavior: 'smooth', // Smooth scrolling
                    '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar
                    msOverflowStyle: 'none', // Hide scrollbar for IE and Edge
                    scrollbarWidth: 'none', // Hide scrollbar for Firefox
                }}
            >
                {skills.map((skill, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'inline-block',
                            padding: '10px',
                          
                            borderRadius: '10px',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                            textAlign: 'center',
                            width: '150px',
                            margin: '0 10px', // Margin for spacing between items
                        }}
                    >
                        {/* Skill Logo */}
                        <Box
                            component="img"
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            sx={{ width: '80px', height: '80px', objectFit: 'contain', mb: 2 }}
                        />
                        {/* Skill Name */}
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            {skill.name}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default SkillsSection;
