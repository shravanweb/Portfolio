import React from 'react';
import { Box } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider';

const HeroBackground = () => {
    const { darkMode } = useThemeToggle();

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                overflow: 'hidden',
                background: darkMode
                    ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
                    : 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: darkMode
                        ? 'radial-gradient(circle at 20% 50%, rgba(255, 204, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(102, 187, 106, 0.1) 0%, transparent 50%)'
                        : 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
                    animation: 'pulse 8s ease-in-out infinite',
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: darkMode
                        ? 'radial-gradient(circle at 2px 2px, rgba(255, 204, 0, 0.15) 1px, transparent 0)'
                        : 'radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)',
                    backgroundSize: '40px 40px',
                    animation: 'moveBackground 20s linear infinite',
                    opacity: 0.4,
                },
                '@keyframes pulse': {
                    '0%, 100%': {
                        opacity: 1,
                    },
                    '50%': {
                        opacity: 0.8,
                    },
                },
                '@keyframes moveBackground': {
                    '0%': {
                        transform: 'translate(0, 0)',
                    },
                    '100%': {
                        transform: 'translate(40px, 40px)',
                    },
                },
            }}
        >
            {/* Animated gradient orbs */}
            <Box
                sx={{
                    position: 'absolute',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: darkMode
                        ? 'radial-gradient(circle, rgba(255, 204, 0, 0.2) 0%, transparent 70%)'
                        : 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
                    top: '-250px',
                    left: '-250px',
                    animation: 'float 15s ease-in-out infinite',
                    filter: 'blur(60px)',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: darkMode
                        ? 'radial-gradient(circle, rgba(102, 187, 106, 0.15) 0%, transparent 70%)'
                        : 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
                    bottom: '-200px',
                    right: '-200px',
                    animation: 'float 20s ease-in-out infinite reverse',
                    filter: 'blur(60px)',
                }}
            />
            <style>
                {`
                    @keyframes float {
                        0%, 100% {
                            transform: translate(0, 0) scale(1);
                        }
                        33% {
                            transform: translate(30px, -30px) scale(1.1);
                        }
                        66% {
                            transform: translate(-20px, 20px) scale(0.9);
                        }
                    }
                `}
            </style>
        </Box>
    );
};

export default HeroBackground;

