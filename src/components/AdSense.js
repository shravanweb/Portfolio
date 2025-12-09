import React, { useEffect } from 'react';
import { Box } from '@mui/material';

const AdSense = ({ adSlot, adFormat = 'auto', fullWidthResponsive = true }) => {
  const clientId = process.env.REACT_APP_ADSENSE_CLIENT_ID;

  useEffect(() => {
    if (!clientId) {
      console.warn('AdSense Client ID not configured. Please set REACT_APP_ADSENSE_CLIENT_ID in your .env file');
      return;
    }

    try {
      // Push ad to AdSense
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, [clientId]);

  if (!clientId) {
    return null; // Don't render ad unit if client ID is not configured
  }

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
        className="adsbygoogle"
        style={{
          display: 'block',
          width: '100%',
        }}
        data-ad-client={clientId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      />
    </Box>
  );
};

export default AdSense;

