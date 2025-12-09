import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const AdSense = ({ adSlot, adFormat = 'auto', fullWidthResponsive = true }) => {
  const adRef = useRef(null);
  const pushedRef = useRef(false);
  // Use client ID from HTML script or env variable
  const clientId = process.env.REACT_APP_ADSENSE_CLIENT_ID || 'ca-pub-6696519751206944';

  useEffect(() => {
    const initializeAd = () => {
      if (pushedRef.current) return;
      
      try {
        // Check if AdSense script is loaded
        if (window.adsbygoogle && adRef.current) {
          // Check if ad is already initialized
          if (!adRef.current.hasAttribute('data-adsbygoogle-status')) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            pushedRef.current = true;
            console.log('AdSense ad initialized');
          }
        } else {
          // Retry if script not loaded yet
          setTimeout(initializeAd, 500);
        }
      } catch (err) {
        console.error('AdSense initialization error:', err);
      }
    };

    // Initial delay to ensure script is loaded
    const timer = setTimeout(initializeAd, 1000);
    
    // Also try immediately if script is already loaded
    if (window.adsbygoogle) {
      initializeAd();
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '40px 0',
        minHeight: '100px',
        width: '100%',
      }}
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: 'block',
          width: '100%',
          minHeight: '100px',
        }}
        data-ad-client={clientId}
        data-ad-slot={adSlot || ''}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      />
    </Box>
  );
};

export default AdSense;
