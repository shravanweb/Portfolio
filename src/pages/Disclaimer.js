import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider';

const Disclaimer = () => {
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
                    Disclaimer
                </Typography>

                <Typography variant="body1" sx={{ mb: 4, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </Typography>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        1. General Information
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        The information contained on this website (shravan-portfolio-5qhd.onrender.com) is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        2. No Warranties
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        This website is provided "as is" without any representations or warranties, express or implied. Rasamalla Shravan makes no representations or warranties in relation to this website or the information and materials provided on this website. Without prejudice to the generality of the foregoing paragraph, we do not warrant that:
                    </Typography>
                    <Box component="ul" sx={{ pl: 4, mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        <li>This website will be constantly available, or available at all</li>
                        <li>The information on this website is complete, true, accurate, or non-misleading</li>
                        <li>This website will meet your requirements or expectations</li>
                        <li>The website will be secure, error-free, or free from viruses or other harmful components</li>
                    </Box>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        3. Limitation of Liability
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        Nothing in this website disclaimer will exclude or limit any warranty implied by law that it would be unlawful to exclude or limit. To the maximum extent permitted by applicable law, we exclude all representations, warranties, conditions, and terms relating to our website and the use of this website. We will not be liable to you in respect of any losses arising out of any event or events beyond our reasonable control. We will not be liable to you in respect of any business losses, including (without limitation) loss of or damage to profits, income, revenue, use, production, anticipated savings, business, contracts, commercial opportunities, or goodwill.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        4. Professional Advice
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        The information on this website is not intended to constitute professional advice. You should not rely upon the material or information on the website as a basis for making any business, legal, or any other decisions. Whilst we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        5. External Links
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        Through this website, you are able to link to other websites which are not under the control of Rasamalla Shravan. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them. We are not responsible for the content, privacy practices, or terms of use of any external websites.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        6. Portfolio and Project Information
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        The portfolio projects, case studies, and work samples displayed on this website are for demonstration purposes only. While we strive to present accurate information about our work, project details, technologies used, and outcomes may vary. Past performance does not guarantee future results. Any testimonials or reviews displayed on this website are the opinions of the individuals providing them and do not necessarily reflect our views or opinions.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        7. Availability and Errors
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        Every effort is made to keep the website up and running smoothly. However, we take no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control. We do not warrant that the functions contained in the material on this website will be uninterrupted or error-free, that defects will be corrected, or that this site or the server that makes it available are free of viruses or bugs.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        8. Intellectual Property
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        All trademarks, service marks, trade names, product names, and logos appearing on the site are the property of their respective owners. Any rights not expressly granted herein are reserved. Unauthorized use of any materials on this website may violate copyright, trademark, and other laws.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        9. Changes to This Disclaimer
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        We reserve the right to make additions, deletions, or modifications to the contents of this website at any time without prior notice. We may revise this disclaimer from time to time. The revised disclaimer will apply to the use of our website from the date of publication of the revised disclaimer on this website.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        10. Contact Information
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        If you have any questions about this Disclaimer, please contact us:
                    </Typography>
                    <Box sx={{ mb: 2, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            <strong>Email:</strong>{' '}
                            <a 
                                href="mailto:rsravan40@gmail.com" 
                                style={{ 
                                    color: darkMode ? '#ffcc00' : '#007fff',
                                    textDecoration: 'none',
                                }}
                            >
                                rsravan40@gmail.com
                            </a>
                        </Typography>
                        <Typography variant="body1">
                            <strong>Phone:</strong>{' '}
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
                </Box>
            </Container>
        </Box>
    );
};

export default Disclaimer;

