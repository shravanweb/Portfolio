import React, { createContext, useContext, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ThemeToggleContext = createContext();

// Custom hook to access theme toggle context
export const useThemeToggle = () => useContext(ThemeToggleContext);

export const ThemeToggleProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light', // Define dark or light mode
            primary: {
                main: darkMode ? '#ffcc00' : '#007fff', // Primary color changes based on theme
            },
            background: {
                default: darkMode ? '#121212' : '#ffffff', // Default background for dark and light modes
            },
        },
        typography: {
            fontFamily: 'Poppins, Arial, sans-serif',
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none', // Disable button text transform
                        borderRadius: '30px', // Add a custom rounded style to buttons
                    },
                },
            },
        },
    });

    const toggleTheme = () => {
        setDarkMode((prev) => !prev); // Toggle between dark and light modes
    };

    return (
        <ThemeToggleContext.Provider value={{ darkMode, toggleTheme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeToggleContext.Provider>
    );
};
