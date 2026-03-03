import React, { useState, useEffect } from 'react';
import { Fab, Zoom, Box } from '@mui/material';
import { HiOutlineArrowUp } from 'react-icons/hi';

const BackToTop = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Zoom in={scrolled}>
            <Box
                onClick={scrollToTop}
                role="presentation"
                sx={{
                    position: 'fixed',
                    bottom: { xs: 30, md: 50 },
                    right: { xs: 30, md: 50 },
                    zIndex: 1000,
                }}
            >
                <Fab
                    sx={{
                        bgcolor: 'var(--text-color-2)',
                        color: 'var(--bg-primary)',
                        width: 56,
                        height: 56,
                        borderRadius: '16px',
                        border: '1px solid var(--border-color)',
                        transition: 'var(--transition-base)',
                        '&:hover': {
                            bgcolor: 'var(--accent-color)',
                            color: '#000',
                            transform: 'translateY(-5px) scale(1.05)',
                            boxShadow: 'var(--shadow-xl)'
                        }
                    }}
                    aria-label="scroll back to top"
                >
                    <HiOutlineArrowUp size={24} strokeWidth={2.5} />
                </Fab>
            </Box>
        </Zoom>
    );
};

export default BackToTop;
