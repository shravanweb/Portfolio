import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider';

const PrivacyPolicy = () => {
    const { darkMode } = useThemeToggle();

    return (
        <Box
            sx={{
                padding: { xs: '60px 20px', md: '100px 40px' },
                backgroundColor: darkMode ? '#0a0a0a' : '#ffffff',
                color: darkMode ? '#fff' : '#333',
                minHeight: '100vh',
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: '2rem', md: '3rem' },
                        mb: 4,
                        background: darkMode 
                            ? 'linear-gradient(135deg, #ffffff 0%, #ffcc00 100%)'
                            : 'linear-gradient(135deg, #007fff 0%, #005fbb 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    Privacy Policy
                </Typography>

                <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
                </Typography>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        1. Information We Collect
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        We collect information that you provide directly to us, such as when you fill out a contact form or subscribe to our newsletter. This may include your name, email address, and any other information you choose to provide.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        2. How We Use Your Information
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        We use the information we collect to respond to your inquiries, send you updates about our services, and improve our website experience.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        3. Cookies and Tracking
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        4. Third-Party Services
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        Our website uses Google Analytics and Google AdSense, which may collect information about your visit. Please refer to Google's Privacy Policy for more information about how they handle your data.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        5. Data Security
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        6. Contact Us
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        If you have any questions about this Privacy Policy, please contact us at{' '}
                        <a href="mailto:rsravan40@gmail.com" style={{ color: darkMode ? '#ffcc00' : '#007fff' }}>
                            rsravan40@gmail.com
                        </a>
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default PrivacyPolicy;

