import React from 'react';
import { Grid, Typography, Button, Box, IconButton } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider'; // Adjust the path as necessary
import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa'; // Import icons from React Icons
import DownloadIcon from '@mui/icons-material/Download'; // Download icon
import ContactMailIcon from '@mui/icons-material/ContactMail'; // Contact icon
import { TypeAnimation } from 'react-type-animation';
import Pic from "../assets/images/pic.png";
import Download from "../assets/Shravan_Rasamalla-Ui Developer.doc";

const Herosection = () => {
    const { darkMode } = useThemeToggle(); // Access darkMode state

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh', // Full viewport height
                backgroundColor: darkMode ? '#222' : '#fff',
                color: darkMode ? '#fff' : '#000',
                textAlign: 'center', // Center text horizontally
                padding: '0 20px', // Add padding for smaller screens
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
                        }}
                    >
                        Hello, I’m Shravan<br />
                    </Typography>
                    <TypeAnimation
                        sequence={[
                            'Front End Developer',
                            1000,
                            'UI Designer',
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
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
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
                        <Button
                            variant="outlined"
                            color="primary"
                            href={Download}
                            download="Shravan_Rasamalla-Ui Developer.doc"
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
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 ,marginTop: "32px"}}>
                        <IconButton
                            color="inherit"
                            href="https://www.linkedin.com/in/shravan-rasamalla/"
                            target="_blank"
                        >
                            <FaLinkedin size={30} />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            href="https://github.com/shravanweb"
                            target="_blank"
                        >
                            <FaGithub size={30} />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            href="https://www.behance.net/sravankumar9"
                            target="_blank"
                        >
                            <FaBehance size={30} />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Herosection;
