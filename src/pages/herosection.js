import React from 'react';
import { Grid, Typography, Button, Box, IconButton } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider'; // Adjust the path as necessary
import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa'; // Import icons from React Icons
import DownloadIcon from '@mui/icons-material/Download'; // Download icon
import ContactMailIcon from '@mui/icons-material/ContactMail'; // Contact icon
import { TypeAnimation } from 'react-type-animation';
import Pic from "../assets/images/pic.png";
import Download from "../assets/Shravan_Rasamalla-Ui Developer.doc";
import HeroBackground3D from '../components/HeroBackground3D';

const Herosection = () => {
    const { darkMode } = useThemeToggle(); // Access darkMode state

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh', // Full viewport height
                backgroundColor: darkMode ? '#222' : '#fff',
                color: darkMode ? '#fff' : '#000',
                textAlign: 'center', // Center text horizontally
                padding: '0 20px', // Add padding for smaller screens
                overflow: 'hidden',
            }}
        >
            {/* Beautiful 3D Animated Background */}
            <HeroBackground3D />
            
            {/* Content with z-index to appear above 3D background */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    width: '100%',
                }}
            >
            <Grid container alignItems="center" justifyContent="center">
                {/* Content Section */}
                <Grid item xs={12} md={8}>
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontWeight: 'bold',
                            mb: 2,
                            textShadow: darkMode 
                                ? '0 0 20px rgba(255, 255, 255, 0.5), 0 2px 10px rgba(0, 0, 0, 0.8)' 
                                : '0 0 20px rgba(0, 0, 0, 0.3), 0 2px 10px rgba(255, 255, 255, 0.8)',
                            background: darkMode 
                                ? 'linear-gradient(135deg, #ffffff 0%, #ffcc00 100%)'
                                : 'linear-gradient(135deg, #007fff 0%, #005fbb 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Hello, I'm Shravan<br />
                    </Typography>
                    <Box
                        sx={{
                            mb: 2,
                            minHeight: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <TypeAnimation
                            sequence={[
                                'Front End Developer',
                                1000,
                                'UI Designer',
                                1000,
                            ]}
                            speed={50}
                            style={{ 
                                fontSize: '3em',
                                fontWeight: 'bold',
                                textShadow: darkMode 
                                    ? '0 0 15px rgba(255, 204, 0, 0.6), 0 2px 8px rgba(0, 0, 0, 0.8)' 
                                    : '0 0 15px rgba(0, 127, 255, 0.6), 0 2px 8px rgba(255, 255, 255, 0.8)',
                                color: darkMode ? '#ffcc00' : '#007fff',
                            }}
                            repeat={Infinity}
                        />
                    </Box>
                    <Typography 
                        variant="h6" 
                        sx={{ 
                            mb: 4,
                            textShadow: darkMode 
                                ? '0 2px 8px rgba(0, 0, 0, 0.8)' 
                                : '0 2px 8px rgba(255, 255, 255, 0.8)',
                            fontWeight: 400,
                        }}
                    >
                        Passionate about creating modern and elegant web applications.
                    </Typography>

                    {/* Buttons Section */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<ContactMailIcon />}
                            sx={{
                                padding: '12px 30px',
                                fontSize: '16px',
                                borderRadius: "25px",
                                background: darkMode 
                                    ? 'linear-gradient(135deg, #ffcc00 0%, #ffaa00 100%)'
                                    : 'linear-gradient(135deg, #007fff 0%, #005fbb 100%)',
                                color: darkMode ? '#000' : '#fff',
                                fontWeight: 'bold',
                                boxShadow: darkMode 
                                    ? '0 4px 15px rgba(255, 204, 0, 0.4)' 
                                    : '0 4px 15px rgba(0, 127, 255, 0.4)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: darkMode 
                                        ? '0 6px 20px rgba(255, 204, 0, 0.6)' 
                                        : '0 6px 20px rgba(0, 127, 255, 0.6)',
                                },
                            }}
                        >
                            Contact Me
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            href={Download}
                            download="Shravan_Rasamalla-Ui Developer.doc"
                            startIcon={<DownloadIcon />}
                            sx={{
                                padding: '12px 30px',
                                fontSize: '16px',
                                borderRadius: "25px",
                                borderWidth: '2px',
                                borderColor: darkMode ? '#ffcc00' : '#007fff',
                                color: darkMode ? '#ffcc00' : '#007fff',
                                fontWeight: 'bold',
                                backdropFilter: 'blur(10px)',
                                backgroundColor: darkMode 
                                    ? 'rgba(255, 204, 0, 0.1)' 
                                    : 'rgba(0, 127, 255, 0.1)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    borderWidth: '2px',
                                    backgroundColor: darkMode 
                                        ? 'rgba(255, 204, 0, 0.2)' 
                                        : 'rgba(0, 127, 255, 0.2)',
                                },
                            }}
                        >
                            Download Resume
                        </Button>
                    </Box>

                    {/* Social Icons Section */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: "32px" }}>
                        <IconButton
                            color="inherit"
                            href="https://www.linkedin.com/in/shravan-rasamalla/"
                            target="_blank"
                            sx={{
                                color: darkMode ? '#ffcc00' : '#007fff',
                                backgroundColor: darkMode 
                                    ? 'rgba(255, 204, 0, 0.1)' 
                                    : 'rgba(0, 127, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                border: `2px solid ${darkMode ? '#ffcc00' : '#007fff'}`,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-3px) scale(1.1)',
                                    backgroundColor: darkMode 
                                        ? 'rgba(255, 204, 0, 0.2)' 
                                        : 'rgba(0, 127, 255, 0.2)',
                                    boxShadow: darkMode 
                                        ? '0 8px 20px rgba(255, 204, 0, 0.4)' 
                                        : '0 8px 20px rgba(0, 127, 255, 0.4)',
                                },
                            }}
                        >
                            <FaLinkedin size={30} />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            href="https://github.com/shravanweb"
                            target="_blank"
                            sx={{
                                color: darkMode ? '#ffcc00' : '#007fff',
                                backgroundColor: darkMode 
                                    ? 'rgba(255, 204, 0, 0.1)' 
                                    : 'rgba(0, 127, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                border: `2px solid ${darkMode ? '#ffcc00' : '#007fff'}`,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-3px) scale(1.1)',
                                    backgroundColor: darkMode 
                                        ? 'rgba(255, 204, 0, 0.2)' 
                                        : 'rgba(0, 127, 255, 0.2)',
                                    boxShadow: darkMode 
                                        ? '0 8px 20px rgba(255, 204, 0, 0.4)' 
                                        : '0 8px 20px rgba(0, 127, 255, 0.4)',
                                },
                            }}
                        >
                            <FaGithub size={30} />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            href="https://www.behance.net/sravankumar9"
                            target="_blank"
                            sx={{
                                color: darkMode ? '#ffcc00' : '#007fff',
                                backgroundColor: darkMode 
                                    ? 'rgba(255, 204, 0, 0.1)' 
                                    : 'rgba(0, 127, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                border: `2px solid ${darkMode ? '#ffcc00' : '#007fff'}`,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-3px) scale(1.1)',
                                    backgroundColor: darkMode 
                                        ? 'rgba(255, 204, 0, 0.2)' 
                                        : 'rgba(0, 127, 255, 0.2)',
                                    boxShadow: darkMode 
                                        ? '0 8px 20px rgba(255, 204, 0, 0.4)' 
                                        : '0 8px 20px rgba(0, 127, 255, 0.4)',
                                },
                            }}
                        >
                            <FaBehance size={30} />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
            </Box>
        </Box>
    );
};

export default Herosection;
