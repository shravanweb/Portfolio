import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useThemeToggle } from '../app/ThemeToggleProvider'; // Ensure this import is correct

const Aboutus = () => {
    const { darkMode } = useThemeToggle(); // Access darkMode state here

    return (
        <Box sx={{
            padding: '50px',
            backgroundColor: darkMode ? '#1e1e1e' : '#f9f9f9', // Dark mode background
            color: darkMode ? '#fff' : '#000', // Text color
        }}>
            <Grid container spacing={4} alignItems="center">
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
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        Hello! I’m Rasamalla Shravan, a passionate UI Designer and Frontend Developer with over 6 years of experience in creating visually stunning and user-friendly web applications.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box
                        component="img"
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
                        alt="About Me Image"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Aboutus;
