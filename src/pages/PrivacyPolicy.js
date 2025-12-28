import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider';

const PrivacyPolicy = () => {
    const { darkMode } = useThemeToggle();

    return (
        <Box
            sx={{
                padding: { xs: '60px 20px', md: '120px 40px' },
                backgroundColor: darkMode ? 'var(--bg-primary)' : 'var(--bg-secondary)',
                color: 'var(--text-color)',
                minHeight: '100vh',
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        fontWeight: 900,
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                        mb: 4,
                        background: darkMode 
                            ? 'linear-gradient(135deg, var(--accent-color) 0%, #6366f1 100%)'
                            : 'linear-gradient(135deg, var(--accent-color) 0%, #6366f1 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    Privacy Policy
                </Typography>

                <Typography variant="body1" sx={{ mb: 4, color: 'var(--muted-text)', lineHeight: 1.9 }}>
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </Typography>

                <Typography variant="body1" sx={{ mb: 4, color: 'var(--text-color)', lineHeight: 1.9 }}>
                    At Rasamalla Shravan's Portfolio Website, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website (shravan-portfolio-5qhd.onrender.com).
                </Typography>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: 'var(--accent-color)', fontWeight: 600 }}>
                        1. Information We Collect
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: 'var(--text-color)', lineHeight: 1.9 }}>
                        We collect information that you provide directly to us, such as when you:
                    </Typography>
                    <Box component="ul" sx={{ pl: 4, mb: 2, color: 'var(--text-color)', lineHeight: 1.9 }}>
                        <li>Fill out a contact form or send us an email</li>
                        <li>Subscribe to our newsletter (if applicable)</li>
                        <li>Interact with our website features</li>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 2, color: 'var(--text-color)', lineHeight: 1.9 }}>
                        The types of information we may collect include:
                    </Typography>
                    <Box component="ul" sx={{ pl: 4, mb: 3, color: 'var(--text-color)', lineHeight: 1.9 }}>
                        <li><strong>Personal Information:</strong> Name, email address, phone number, and any other information you choose to provide</li>
                        <li><strong>Automatically Collected Information:</strong> IP address, browser type, device information, pages visited, time spent on pages, and referring website addresses</li>
                        <li><strong>Cookies and Tracking Technologies:</strong> Information collected through cookies, web beacons, and similar tracking technologies</li>
                    </Box>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: 'var(--accent-color)', fontWeight: 600 }}>
                        2. How We Use Your Information
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: 'var(--text-color)', lineHeight: 1.9 }}>
                        We use the information we collect to:
                    </Typography>
                    <Box component="ul" sx={{ pl: 4, mb: 3, color: 'var(--text-color)', lineHeight: 1.9 }}>
                        <li>Respond to your inquiries, comments, and requests</li>
                        <li>Send you updates about our services and portfolio (with your consent)</li>
                        <li>Improve our website experience and functionality</li>
                        <li>Analyze website usage and trends</li>
                        <li>Prevent fraud and ensure website security</li>
                        <li>Comply with legal obligations</li>
                    </Box>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: 'var(--accent-color)', fontWeight: 600 }}>
                        3. Cookies and Tracking Technologies
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: 'var(--text-color)', lineHeight: 1.9 }}>
                        We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: 'var(--text-color)', lineHeight: 1.9 }}>
                        Types of cookies we use:
                    </Typography>
                    <Box component="ul" sx={{ pl: 4, mb: 2, color: 'var(--text-color)', lineHeight: 1.9 }}>
                        <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                        <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 3, color: 'var(--text-color)', lineHeight: 1.9 }}>
                        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: 'var(--accent-color)', fontWeight: 600 }}>
                        4. Third-Party Services
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: 'var(--text-color)', lineHeight: 1.9 }}>
                        Our website uses third-party services that may collect information about your visit:
                    </Typography>
                    <Box component="ul" sx={{ pl: 4, mb: 2, color: 'var(--text-color)', lineHeight: 1.9 }}>
                        <li><strong>Google Analytics:</strong> We use Google Analytics to analyze website traffic and user behavior. Google Analytics uses cookies to collect information such as how often users visit our site, what pages they visit, and what other sites they used prior to coming to our site. For more information, please review{' '}
                            <a 
                                href="https://policies.google.com/privacy" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: 'var(--accent-color)' }}
                            >
                                Google's Privacy Policy
                            </a>
                        </li>
                        <li><strong>Google AdSense:</strong> Our website displays advertisements through Google AdSense. Google uses cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet. You may opt out of personalized advertising by visiting{' '}
                            <a 
                                href="https://www.google.com/settings/ads" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: 'var(--accent-color)' }}
                            >
                                Google's Ads Settings
                            </a>
                        </li>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 3, color: 'var(--text-color)', lineHeight: 1.9 }}>
                        We do not have access to or control over cookies used by third-party services. We encourage you to review the privacy policies of these third-party services.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: 'var(--accent-color)', fontWeight: 600 }}>
                        5. Data Security
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: 'var(--text-color)', lineHeight: 1.9 }}>
                        We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: 'var(--accent-color)', fontWeight: 600 }}>
                        6. Data Retention
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: 'var(--text-color)', lineHeight: 1.9 }}>
                        We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. When we no longer need your personal information, we will securely delete or anonymize it.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: 'var(--accent-color)', fontWeight: 600 }}>
                        7. Your Rights
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: 'var(--text-color)', lineHeight: 1.9 }}>
                        Depending on your location, you may have certain rights regarding your personal information, including:
                    </Typography>
                    <Box component="ul" sx={{ pl: 4, mb: 3, color: 'var(--text-color)', lineHeight: 1.9 }}>
                        <li>The right to access your personal information</li>
                        <li>The right to correct inaccurate or incomplete information</li>
                        <li>The right to request deletion of your personal information</li>
                        <li>The right to object to processing of your personal information</li>
                        <li>The right to data portability</li>
                        <li>The right to withdraw consent at any time</li>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 3, color: 'var(--text-color)', lineHeight: 1.9 }}>
                        To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: 'var(--accent-color)', fontWeight: 600 }}>
                        8. Children's Privacy
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: 'var(--text-color)', lineHeight: 1.9 }}>
                        Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately so we can delete such information.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: 'var(--accent-color)', fontWeight: 600 }}>
                        9. Changes to This Privacy Policy
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: 'var(--text-color)', lineHeight: 1.9 }}>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: 'var(--accent-color)', fontWeight: 600 }}>
                        10. Contact Us
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: 'var(--text-color)', lineHeight: 1.9 }}>
                        If you have any questions about this Privacy Policy, please contact us:
                    </Typography>
                    <Box sx={{ mb: 2, color: 'var(--text-color)', lineHeight: 1.9 }}>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            <strong>Email:</strong>{' '}
                            <a 
                                href="mailto:rsravan40@gmail.com" 
                                style={{ 
                                    color: 'var(--accent-color)',
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
                                    color: 'var(--accent-color)',
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

export default PrivacyPolicy;
