import React, { useEffect, useState } from 'react';

const TypingText = ({ texts, speed }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isErasing, setIsErasing] = useState(false);

    useEffect(() => {
        const currentText = texts[currentTextIndex];
        let index = isErasing ? currentText.length : 0;

        const interval = setInterval(() => {
            if (!isErasing && index < currentText.length) {
                setDisplayText((prev) => prev + currentText[index]);
                index++;
            } else if (isErasing && index > 0) {
                setDisplayText((prev) => prev.slice(0, index - 1));
                index--;
            } else {
                clearInterval(interval);
                if (!isErasing) {
                    setIsErasing(true);
                    setTimeout(() => setIsErasing(true), 1000); // Delay before starting to erase
                } else {
                    setIsErasing(false);
                    setCurrentTextIndex((prev) => (prev + 1) % texts.length); // Cycle through texts
                    setTimeout(() => setDisplayText(''), 500); // Clear text before typing next
                }
            }
        }, speed);

        return () => clearInterval(interval);
    }, [texts, currentTextIndex, speed, isErasing]);

    return <span>{displayText}</span>;
};

export default TypingText;
