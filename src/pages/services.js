import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Container } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider'; // Adjust the path as necessary

const services = [
    {
        title: 'Website Design',
        description: 'Creating visually stunning and user-friendly websites that provide an engaging experience across all devices.',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', // Replace with your image link
    },
    {
        title: 'Logo Design',
        description: 'Crafting memorable and impactful logos that represent your brand identity and resonate with your audience.',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1661770132071-026114fffb61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.', // Replace with your image link
    },
    {
        title: 'Video Design',
        description: 'Producing high-quality videos that tell your story and captivate your audience, from concept to final cut.',
        imageUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your imagelink
    },
];

const ServicesSection = () => {
    const { darkMode } = useThemeToggle(); // Access darkMode state

    return (
        <Box
            sx={{
                py: 10,
                backgroundColor: darkMode ? '#121212' : '#f3f4f6',
                color: darkMode ? '#fff' : '#333', // Dark mode background color
            }}
        >
            <div maxWidth="lg" style={{padding:"50px"}}>
                {/* Heading with horizontal line */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 6 }}>
                    <Typography
                        variant="h3"
                        align="left"
                        sx={{
                            fontWeight: 'bold',
                            marginRight: '20px', // Space between heading and line
                            color: darkMode ? '#fff' : '#333',
                            fontSize:"40px"
                        }}
                    >
                        Services
                    </Typography>
                    <Box sx={{ flexGrow: 1, height: '2px', backgroundColor: darkMode ? '#fff' : '#333' }} />
                </Box>

                <Grid container spacing={4}>
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    boxShadow: 3,
                                    borderRadius: '16px',
                                    backgroundColor: darkMode ? '#1f1f1f' : '#ffffff',
                                    color: darkMode ? '#e0e0e0' : '#333',
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={service.imageUrl}
                                    alt={service.title}
                                />
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        component="div"
                                        sx={{
                                            fontWeight: 'bold',
                                            marginBottom: 2,
                                            color: darkMode ? '#ffcc00' : '#007fff',
                                        }}
                                    >
                                        {service.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="textSecondary"
                                        sx={{
                                            color: darkMode ? '#e0e0e0' : '#555',
                                            lineHeight: 1.8,
                                            mb: 3,
                                        }}
                                    >
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Box>
    );
};

export default ServicesSection;
