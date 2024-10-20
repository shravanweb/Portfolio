import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider'; // Import useThemeToggle hook

const Footer = () => {
    const { darkMode } = useThemeToggle(); // Use darkMode from ThemeToggleProvider

    return (
        <Box
            sx={{
                backgroundColor: darkMode ? '#000' : '#fff', // Toggle background based on darkMode
                color: darkMode ? '#fff' : '#000',
                py: 4,
                borderTop: '1px solid',
                borderColor: darkMode ? '#333' : '#e0e0e0',
            }}
        >
            <Container>
                <Grid container spacing={4}>
                    {/* Section 1: Logo/Company Name */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            Shravan Rasamalla
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                           Frontend Developer | UI Designer
                        </Typography>
                    </Grid>

                 

                    {/* Section 3: Contact Information */}
                    <Grid item xs={12} sm={8}>
                        
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Contact Me
                        </Typography>
                        <Box sx={{display:"flex",justifyContent:"space-between"}}>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                                Email: <Link href="mailto:rsravan40@gmail.com">rsravan40@gmail.com</Link>
                        </Typography>
                        <Typography variant="body2">
                            Phone: <Link href="tel:+91-7661824166">+91-7661824166</Link>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Typography
                    variant="body2"
                    sx={{
                        textAlign: 'center',
                        mt: 4,
                        color: darkMode ? '#888' : '#666',
                    }}
                >
                    © 2024 Developer Portfolio by Shravan. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
