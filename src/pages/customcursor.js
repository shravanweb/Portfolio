import React, { useEffect, useState } from 'react';
import './customcursor.css';

const CustomCursor = () => {
    const [cursorStyle, setCursorStyle] = useState({});

    useEffect(() => {
        const handleMouseMove = (event) => {
            setCursorStyle({
                left: `${event.clientX}px`,
                top: `${event.clientY}px`,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="custom-cursor" style={cursorStyle}></div>
    );
};

export default CustomCursor;
