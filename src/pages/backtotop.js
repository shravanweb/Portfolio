import React, { useState, useEffect } from 'react';
import { Fab, Zoom, useScrollTrigger } from '@mui/material';
import { KeyboardArrowUp as ArrowUpIcon } from '@mui/icons-material'; // Importing the Arrow Up Icon
import { Box } from '@mui/system';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        // Show button if user scrolls 300px down
        if (window.pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Zoom in={visible}>
            <Box
                role="presentation"
                sx={{
                    position: 'fixed',
                    bottom: '40px',
                    right: '40px',
                    zIndex: 1000,
                }}
            >
                <Fab color="primary" size="medium" onClick={scrollToTop} aria-label="scroll back to top">
                    <ArrowUpIcon />
                </Fab>
            </Box>
        </Zoom>
    );
};

export default BackToTop;
