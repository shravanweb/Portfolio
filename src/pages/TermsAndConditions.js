import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider';

const TermsAndConditions = () => {
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
                    Terms and Conditions
                </Typography>

                <Typography variant="body1" sx={{ mb: 4, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </Typography>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        1. Acceptance of Terms
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        By accessing and using this website (shravan-portfolio-5qhd.onrender.com), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        2. Use License
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </Typography>
                    <Box component="ul" sx={{ pl: 4, mb: 2, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        <li>Modify or copy the materials</li>
                        <li>Use the materials for any commercial purpose or for any public display</li>
                        <li>Attempt to reverse engineer any software contained on the website</li>
                        <li>Remove any copyright or other proprietary notations from the materials</li>
                        <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        3. Intellectual Property Rights
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of Rasamalla Shravan or its content suppliers and is protected by international copyright laws. The compilation of all content on this site is the exclusive property of Rasamalla Shravan.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        4. Disclaimer
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation:
                    </Typography>
                    <Box component="ul" sx={{ pl: 4, mb: 2, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        <li>Implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights</li>
                        <li>Any warranty or representation that the website will be available, secure, or error-free</li>
                        <li>Any warranty regarding the accuracy, reliability, or timeliness of the information on the website</li>
                    </Box>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        5. Limitations
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        In no event shall Rasamalla Shravan or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if we or our authorized representative have been notified orally or in writing of the possibility of such damage.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        6. Revisions and Errata
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        The materials appearing on this website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        7. Links to Third-Party Websites
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        This website may contain links to third-party websites that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by or in connection with the use of any such content, goods, or services available on or through any such websites.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        8. Site Terms of Use Modifications
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        We may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        9. Governing Law
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        Any claim relating to this website shall be governed by the laws of India without regard to its conflict of law provisions. The courts of India shall have exclusive jurisdiction over any disputes arising from or related to the use of this website.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        10. Contact Information
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        If you have any questions about these Terms and Conditions, please contact us at:{' '}
                        <a 
                            href="mailto:rsravan40@gmail.com" 
                            style={{ 
                                color: darkMode ? '#ffcc00' : '#007fff',
                                textDecoration: 'none',
                            }}
                        >
                            rsravan40@gmail.com
                        </a>
                        {' '}or call us at{' '}
                        <a 
                            href="tel:+91-7661824166" 
                            style={{ 
                                color: darkMode ? '#ffcc00' : '#007fff',
                                textDecoration: 'none',
                            }}
                        >
                            +91-7661824166
                        </a>
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default TermsAndConditions;
