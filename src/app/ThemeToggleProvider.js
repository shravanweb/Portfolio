import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ThemeToggleContext = createContext();

// Custom hook to access theme toggle context
export const useThemeToggle = () => useContext(ThemeToggleContext);

export const ThemeToggleProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false); // ← Light mode by default

    // Sync CSS variable theme with data-theme attribute
    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.removeAttribute('data-theme');
        }
    }, [darkMode]);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: darkMode ? '#60a5fa' : '#2563eb',
                contrastText: '#ffffff',
            },
            secondary: {
                main: darkMode ? '#a78bfa' : '#7c3aed',
            },
            background: {
                default: darkMode ? '#070d1a' : '#f6f8fc',
                paper:   darkMode ? '#0d1729' : '#ffffff',
            },
            text: {
                primary:   darkMode ? '#e2e8f0' : '#1e293b',
                secondary: darkMode ? '#94a3b8' : '#64748b',
            },
            divider: darkMode ? 'rgba(96,165,250,0.14)' : 'rgba(0,0,0,0.07)',
        },
        typography: {
            fontFamily: "'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        },
        shape: {
            borderRadius: 12,
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        fontWeight: 700,
                        letterSpacing: '-0.01em',
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        backgroundImage: 'none',
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundImage: 'none',
                    },
                },
            },
        },
    });

    const toggleTheme = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <ThemeToggleContext.Provider value={{ darkMode, toggleTheme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeToggleContext.Provider>
    );
};
