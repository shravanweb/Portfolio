import React from 'react';
import { Grid, Typography, Button, Box, IconButton } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider'; // Adjust the path as necessary
import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa'; // Import icons from React Icons
import DownloadIcon from '@mui/icons-material/Download'; // Download icon
import ContactMailIcon from '@mui/icons-material/ContactMail'; // Contact icon
import { TypeAnimation } from 'react-type-animation';

const Herosection = () => {
    const { darkMode } = useThemeToggle(); // Access darkMode state

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: darkMode ? '#222' : '#fff',
                color: darkMode ? '#fff' : '#000',
                padding: '40px 70px 0px',
            }}
        >
            <Grid container spacing={3} alignItems="center">
                {/* Left Section: Text */}
                <Grid item xs={12} md={6}>
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontWeight: 'bold',
                            mb: 2,
                        }}
                    >
                        Hello, I’m Shravan<br />
                      
                    </Typography>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                          
                            'Front End Deveoper',
                            1000,
                            'Ui Designer',
                            1000,
                            
                        
                        ]}
                        speed={50}
                        style={{ fontSize: '3em' }}
                        repeat={Infinity}
                    />
                    <Typography variant="h6" sx={{ mb: 4 }}>
                        Passionate about creating modern and elegant web applications.
                    </Typography>

                    {/* Buttons Section */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<ContactMailIcon />}
                            sx={{
                                padding: '10px 20px',
                                fontSize: '16px',
                                borderRadius: "25px",
                            }}
                        >
                            Contact Me
                        </Button>

                        {/* Download Resume Button */}
                        <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<DownloadIcon />}
                            sx={{
                                padding: '10px 20px',
                                fontSize: '16px',
                                borderRadius: "25px",
                            }}
                        >
                            Download Resume
                        </Button>
                    </Box>

                    {/* Social Icons Section */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 4 }}>
                        <IconButton
                            color="inherit"
                            href="https://www.linkedin.com/in/shravan-rasamalla/"
                            target="_blank"
                        >
                            <FaLinkedin size={30} /> {/* LinkedIn icon */}
                        </IconButton>
                        <IconButton
                            color="inherit"
                            href="https://github.com/shravanweb"
                            target="_blank"
                        >
                            <FaGithub size={30} /> {/* GitHub icon */}
                        </IconButton>
                        <IconButton
                            color="inherit"
                            href="https://www.behance.net/sravankumar9" // Update with your Behance URL
                            target="_blank"
                        >
                            <FaBehance size={30} /> {/* Behance icon */}
                        </IconButton>
                    </Box>
                </Grid>

                {/* Right Section: Image */}
                <Grid item xs={12} md={6}>
                    <Box
                        component="img"
                        src="https://images.unsplash.com/photo-1622925930212-b5b1606f0aab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbnN8ZW58MHx8MHx8fDA%3D"
                        alt="Frontend Developer"
                        sx={{
                            width: '70%',
                            height: '70%',
                            borderRadius: '10px',
                            boxShadow: darkMode
                                ? '0 4px 10px rgba(255, 255, 255, 0.1)'
                                : '0 4px 10px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Herosection;
