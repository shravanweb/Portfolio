import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider';

/**
 * AdSense Component — Professional, theme-aware ad unit.
 *
 * Props:
 *  adSlot              — Google AdSense slot ID
 *  adFormat            — 'auto' | 'horizontal' | 'rectangle' | 'vertical'
 *  fullWidthResponsive — boolean
 *  style               — extra sx styles for outer wrapper
 *  label               — label above the ad (default: 'Advertisement')
 *  showLabel           — show/hide the label (default: true)
 */
const AdSense = ({
    adSlot,
    adFormat = 'auto',
    fullWidthResponsive = true,
    style = {},
    label = 'Advertisement',
    showLabel = true,
}) => {
    const adRef = useRef(null);
    const pushedRef = useRef(false);
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [adStatus, setAdStatus] = useState('loading');
    const { darkMode } = useThemeToggle();

    const clientId = process.env.REACT_APP_ADSENSE_CLIENT_ID || 'ca-pub-6696519751206944';
    const isDev = process.env.NODE_ENV === 'development';

    // Load AdSense script once
    useEffect(() => {
        if (window.adsbygoogle) { setScriptLoaded(true); return; }

        let script = document.querySelector('script[src*="adsbygoogle.js"]');
        if (!script) {
            script = document.createElement('script');
            script.async = true;
            script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
            script.crossOrigin = 'anonymous';
            script.setAttribute('data-ad-client', clientId);
            document.head.appendChild(script);
        }

        const onLoad = () => setScriptLoaded(true);
        script.addEventListener('load', onLoad);

        const poll = setInterval(() => {
            if (window.adsbygoogle) { setScriptLoaded(true); clearInterval(poll); }
        }, 500);

        return () => {
            script.removeEventListener('load', onLoad);
            clearInterval(poll);
        };
    }, [clientId]);

    // Watch ad status attribute
    useEffect(() => {
        if (!adRef.current) return;
        const obs = new MutationObserver(() => {
            const s = adRef.current?.getAttribute('data-adsbygoogle-status');
            if (s) setAdStatus(s);
        });
        obs.observe(adRef.current, {
            attributes: true,
            attributeFilter: ['data-adsbygoogle-status'],
        });
        return () => obs.disconnect();
    }, []);

    // Push ad unit
    useEffect(() => {
        if (!scriptLoaded || pushedRef.current || !adRef.current) return;
        const timer = setTimeout(() => {
            if (pushedRef.current) return;
            try {
                const status = adRef.current?.getAttribute('data-adsbygoogle-status');
                if (!status || status === 'unfilled') {
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                    pushedRef.current = true;
                    setAdStatus('initialized');
                }
            } catch (e) {
                console.error('AdSense push error:', e);
                setAdStatus('error');
            }
        }, 800);
        return () => clearTimeout(timer);
    }, [scriptLoaded]);

    const showDevPlaceholder = isDev && (
        adStatus === 'loading' || adStatus === 'unfilled' || adStatus === 'error'
    );

    return (
        <Box
            sx={{
                width: '100%',
                my: { xs: 3, md: 4 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                ...style,
            }}
        >
            {/* "Advertisement" label */}
            {showLabel && (
                <Typography
                    component="span"
                    sx={{
                        alignSelf: 'flex-start',
                        fontSize: '0.62rem',
                        fontWeight: 700,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        color: 'var(--ad-label)',
                        px: '2px',
                        userSelect: 'none',
                    }}
                >
                    {label}
                </Typography>
            )}

            {/* Ad container */}
            <Box
                sx={{
                    width: '100%',
                    minHeight: 90,
                    backgroundColor: 'var(--ad-bg)',
                    border: '1px solid var(--ad-border)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    transition: 'var(--transition-base)',
                }}
            >
                <ins
                    ref={adRef}
                    className="adsbygoogle"
                    style={{ display: 'block', width: '100%', minHeight: '90px' }}
                    data-ad-client={clientId}
                    data-ad-slot={adSlot || ''}
                    data-ad-format={adFormat}
                    data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
                />

                {/* Dev overlay */}
                {showDevPlaceholder && (
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 0.5,
                            pointerEvents: 'none',
                            background: darkMode
                                ? 'repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(56,189,248,0.03) 8px, rgba(56,189,248,0.03) 16px)'
                                : 'repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(3,105,161,0.04) 8px, rgba(3,105,161,0.04) 16px)',
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '0.72rem',
                                fontWeight: 700,
                                color: 'var(--text-subtle)',
                                letterSpacing: '1px',
                            }}
                        >
                            AD UNIT {adSlot ? `· ${adSlot}` : '· Auto'}
                        </Typography>
                        <Typography sx={{ fontSize: '0.65rem', color: 'var(--text-subtle)', opacity: 0.6 }}>
                            {adStatus === 'loading' && 'Loading…'}
                            {adStatus === 'unfilled' && 'Awaiting fill'}
                            {adStatus === 'error' && 'Failed to load'}
                        </Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default AdSense;
