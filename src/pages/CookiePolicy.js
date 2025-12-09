import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider';

const CookiePolicy = () => {
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
                    Cookie Policy
                </Typography>

                <Typography variant="body1" sx={{ mb: 4, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </Typography>

                <Typography variant="body1" sx={{ mb: 4, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                    This Cookie Policy explains how Rasamalla Shravan ("we", "us", or "our") uses cookies and similar tracking technologies on our website (shravan-portfolio-5qhd.onrender.com). By using our website, you consent to the use of cookies in accordance with this policy.
                </Typography>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        1. What Are Cookies?
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        Cookies are small text files that are placed on your computer or mobile device when you visit a website. Cookies are widely used to make websites work more efficiently and provide information to the website owners. Cookies allow a website to recognize your device and store some information about your preferences or past actions.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        2. Types of Cookies We Use
                    </Typography>
                    
                    <Typography variant="h6" sx={{ mb: 1.5, mt: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        2.1 Essential Cookies
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies as they are essential for the website to work.
                    </Typography>

                    <Typography variant="h6" sx={{ mb: 1.5, mt: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        2.2 Analytics Cookies
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use Google Analytics to analyze website traffic and user behavior. These cookies may track your browsing patterns and help us improve our website's performance.
                    </Typography>

                    <Typography variant="h6" sx={{ mb: 1.5, mt: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        2.3 Advertising Cookies
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        These cookies are used to deliver advertisements that are relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns. We use Google AdSense, which uses cookies to serve ads based on your prior visits to our website or other websites on the Internet.
                    </Typography>

                    <Typography variant="h6" sx={{ mb: 1.5, mt: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        2.4 Preference Cookies
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        These cookies allow our website to remember information that changes the way the website behaves or looks, such as your preferred language or the region you are in. For example, we may use cookies to remember your theme preference (dark mode or light mode).
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        3. Third-Party Cookies
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements. These third parties may include:
                    </Typography>
                    <Box component="ul" sx={{ pl: 4, mb: 2, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        <li><strong>Google Analytics:</strong> Used to analyze website traffic and user behavior. For more information, visit{' '}
                            <a 
                                href="https://policies.google.com/privacy" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: darkMode ? '#ffcc00' : '#007fff' }}
                            >
                                Google's Privacy Policy
                            </a>
                        </li>
                        <li><strong>Google AdSense:</strong> Used to serve personalized advertisements. For more information, visit{' '}
                            <a 
                                href="https://policies.google.com/technologies/ads" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: darkMode ? '#ffcc00' : '#007fff' }}
                            >
                                Google's Advertising Policy
                            </a>
                        </li>
                    </Box>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        4. How Long Do Cookies Stay on Your Device?
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        Cookies can be either "persistent" or "session" cookies:
                    </Typography>
                    <Box component="ul" sx={{ pl: 4, mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        <li><strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser. They are used to remember your actions during a single browsing session.</li>
                        <li><strong>Persistent Cookies:</strong> These cookies remain on your device for a set period or until you delete them. They are activated each time you visit the website that created that cookie.</li>
                    </Box>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        5. How to Control Cookies
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your browser settings. Most web browsers allow some control of most cookies through the browser settings. You can:
                    </Typography>
                    <Box component="ul" sx={{ pl: 4, mb: 2, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        <li>Block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies</li>
                        <li>Delete cookies that have already been set</li>
                        <li>Set your browser to notify you when cookies are being set</li>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 2, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        However, if you use your browser settings to block all cookies (including essential cookies), you may not be able to access all or parts of our website.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        To opt out of Google Analytics cookies, visit:{' '}
                        <a 
                            href="https://tools.google.com/dlpage/gaoptout" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ color: darkMode ? '#ffcc00' : '#007fff' }}
                        >
                            Google Analytics Opt-out
                        </a>
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        To opt out of personalized advertising from Google, visit:{' '}
                        <a 
                            href="https://www.google.com/settings/ads" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ color: darkMode ? '#ffcc00' : '#007fff' }}
                        >
                            Google Ads Settings
                        </a>
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        6. Cookies We Use
                    </Typography>
                    <Box sx={{ mb: 3, p: 3, backgroundColor: darkMode ? '#1e1e1e' : '#f8f9fa', borderRadius: '8px' }}>
                        <Typography variant="body2" sx={{ color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                            <strong>Cookie Name:</strong> _ga, _gid, _gat (Google Analytics)<br />
                            <strong>Purpose:</strong> Analytics and website performance tracking<br />
                            <strong>Duration:</strong> 2 years (_ga), 24 hours (_gid), 1 minute (_gat)<br />
                            <strong>Type:</strong> Third-party
                        </Typography>
                    </Box>
                    <Box sx={{ mb: 3, p: 3, backgroundColor: darkMode ? '#1e1e1e' : '#f8f9fa', borderRadius: '8px' }}>
                        <Typography variant="body2" sx={{ color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                            <strong>Cookie Name:</strong> Various (Google AdSense)<br />
                            <strong>Purpose:</strong> Advertising and ad personalization<br />
                            <strong>Duration:</strong> Varies<br />
                            <strong>Type:</strong> Third-party
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        7. Updates to This Cookie Policy
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the "Last Updated" date. We encourage you to review this Cookie Policy periodically.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, color: darkMode ? '#ffcc00' : '#007fff', fontWeight: 600 }}>
                        8. Contact Us
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: darkMode ? '#e0e0e0' : '#555', lineHeight: 1.9 }}>
                        If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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

export default CookiePolicy;

