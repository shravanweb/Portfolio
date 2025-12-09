import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider'; // Import useThemeToggle hook
import useVisitorCount from '../hooks/useVisitorCount'; // Import visitor count hook

const Footer = () => {
    const { darkMode } = useThemeToggle(); // Use darkMode from ThemeToggleProvider
    const { visitorCount, loading } = useVisitorCount(); // Get visitor count

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

                <Box
                    sx={{
                        textAlign: 'center',
                        mt: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 1,
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            color: darkMode ? '#888' : '#666',
                        }}
                    >
                        © 2025 Developer Portfolio by Shravan. All rights reserved.
                    </Typography>
                    {!loading && visitorCount !== null && (
                        <Typography
                            variant="body2"
                            sx={{
                                color: darkMode ? '#666' : '#999',
                                fontSize: '0.875rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 0.5,
                            }}
                        >
                            <Box
                                component="span"
                                sx={{
                                    display: 'inline-block',
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: darkMode ? '#4caf50' : '#66bb6a',
                                    animation: 'pulse 2s infinite',
                                    '@keyframes pulse': {
                                        '0%': {
                                            opacity: 1,
                                        },
                                        '50%': {
                                            opacity: 0.5,
                                        },
                                        '100%': {
                                            opacity: 1,
                                        },
                                    },
                                }}
                            />
                            Total Visitors: <strong>{visitorCount.toLocaleString()}</strong>
                        </Typography>
                    )}
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
