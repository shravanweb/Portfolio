    import { Box, Grid, Typography } from '@mui/material';
    import React from 'react';
    import { useThemeToggle } from '../app/ThemeToggleProvider'; // Adjust the path as necessary

    const Aboutus = () => {
        const { darkMode } = useThemeToggle(); // Access darkMode state

        return (
            <Box
                sx={{
                    padding: '50px',
                    backgroundColor: darkMode ? '#1c1c1c' : '#f9f9f9', // Dark mode background
                    color: darkMode ? '#fff' : '#333', // Dark mode text color
                }}
            >
                <Grid container spacing={4} alignItems="center">
                    {/* Left Section: Text */}
                    <Grid item xs={12} md={7}>
                        <Typography
                            variant="h3"
                            component="h2"
                            sx={{
                                fontWeight: 'bold',
                                marginBottom: '20px',
                            }}
                        >
                            About Me
                            
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8, color: darkMode ? '#ddd' : '#555' }}>
                            Hello! I’m Rasamalla Shravan, a passionate UI Designer and Frontend Developer with over 6 years of experience in creating visually stunning and user-friendly web applications. My journey in technology has equipped me with a robust skill set in JavaScript and its frameworks, enabling me to transform ideas into engaging digital experiences.
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8, color: darkMode ? '#ddd' : '#555', marginTop: '20px' }}>
                            I thrive in environments that challenge my problem-solving abilities and push me to learn and explore the latest technologies. My mission is to make the web more accessible and inclusive for everyone. I'm eager to embrace opportunities that align with my skills and passion for design and development.
                        </Typography>
                    </Grid>

                    {/* Right Section: Image */}
                    <Grid item xs={12} md={5}>
                        <Box
                            component="img"
                            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
                            alt="About Me Image"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                                boxShadow: darkMode ? '0 4px 8px rgba(255, 255, 255, 0.1)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        );
    };

    export default Aboutus;
