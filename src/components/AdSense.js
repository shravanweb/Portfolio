import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useThemeToggle } from '../app/ThemeToggleProvider';

const AdSense = ({ adSlot, adFormat = 'auto', fullWidthResponsive = true, style = {} }) => {
  const adRef = useRef(null);
  const pushedRef = useRef(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [adStatus, setAdStatus] = useState('loading');
  const { darkMode } = useThemeToggle();
  // Use client ID from HTML script or env variable
  const clientId = process.env.REACT_APP_ADSENSE_CLIENT_ID || 'ca-pub-6696519751206944';

  // Load AdSense script dynamically if not already loaded
  useEffect(() => {
    const checkScript = () => {
      if (window.adsbygoogle) {
        setScriptLoaded(true);
        return true;
      }
      return false;
    };

    // Check if script is already loaded
    if (checkScript()) return;

    // Check if script tag already exists in DOM
    let script = document.querySelector('script[src*="adsbygoogle.js"]');
    
    if (!script) {
      // Dynamically load AdSense script only when this component mounts
      script = document.createElement('script');
      script.async = true;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
      script.crossOrigin = 'anonymous';
      script.setAttribute('data-ad-client', clientId);
      
      script.onload = () => {
        setScriptLoaded(true);
      };
      
      script.onerror = () => {
        console.error('❌ Failed to load AdSense script');
        setScriptLoaded(false);
      };
      
      document.head.appendChild(script);
    } else {
      // Script exists, wait for it to load
      if (script.complete || script.readyState === 'complete') {
        setScriptLoaded(true);
      } else {
        script.addEventListener('load', () => {
          setScriptLoaded(true);
        });
        script.addEventListener('error', () => {
          console.error('❌ AdSense script failed to load');
          setScriptLoaded(false);
        });
      }
    }

    // Check periodically as fallback
    const interval = setInterval(() => {
      if (checkScript()) {
        clearInterval(interval);
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [clientId]);

  // Monitor ad status
  useEffect(() => {
    if (!adRef.current) return;

    const observer = new MutationObserver(() => {
      const status = adRef.current?.getAttribute('data-adsbygoogle-status');
      if (status) {
        setAdStatus(status);
      }
    });

    observer.observe(adRef.current, {
      attributes: true,
      attributeFilter: ['data-adsbygoogle-status'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!scriptLoaded || pushedRef.current || !adRef.current) return;

    let retryCount = 0;
    const maxRetries = 15;

    const initializeAd = () => {
      if (pushedRef.current) return;
      
      try {
        if (window.adsbygoogle && adRef.current) {
          const status = adRef.current.getAttribute('data-adsbygoogle-status');
          
          // If ad is already done or in progress, don't push again
          if (status === 'done' || status === 'filled') {
            pushedRef.current = true;
            setAdStatus(status);
            console.log('✅ AdSense ad already loaded');
            return;
          }

          // Only push if not initialized
          if (!status || status === 'unfilled') {
            try {
              (window.adsbygoogle = window.adsbygoogle || []).push({});
              pushedRef.current = true;
              setAdStatus('initialized');
              console.log('✅ AdSense ad initialized successfully');
            } catch (pushError) {
              console.error('❌ AdSense push error:', pushError);
              retryCount++;
              if (retryCount < maxRetries) {
                setTimeout(initializeAd, 2000);
              } else {
                setAdStatus('error');
              }
            }
          }
        } else {
          retryCount++;
          if (retryCount < maxRetries) {
            setTimeout(initializeAd, 1000);
          } else {
            console.warn('⚠️ AdSense script not loaded after max retries');
            setAdStatus('error');
          }
        }
      } catch (err) {
        console.error('❌ AdSense initialization error:', err);
        setAdStatus('error');
      }
    };

    // Wait a bit for DOM to be ready
    const timer = setTimeout(initializeAd, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [scriptLoaded]);

  // Show debug info in development
  const isDevelopment = process.env.NODE_ENV === 'development';
  const showPlaceholder = isDevelopment && (adStatus === 'loading' || adStatus === 'unfilled' || adStatus === 'error');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '40px 0',
        minHeight: '100px',
        width: '100%',
        position: 'relative',
        ...style,
      }}
    >
      {/* AdSense Ad Container */}
      <Box
        sx={{
          width: '100%',
          minHeight: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: showPlaceholder 
            ? `2px dashed ${darkMode ? 'rgba(255, 204, 0, 0.3)' : 'rgba(0, 127, 255, 0.3)'}` 
            : 'none',
          borderRadius: showPlaceholder ? '8px' : '0',
          backgroundColor: showPlaceholder 
            ? darkMode ? 'rgba(255, 204, 0, 0.05)' : 'rgba(0, 127, 255, 0.05)' 
            : 'transparent',
          padding: showPlaceholder ? '20px' : '0',
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
        {showPlaceholder && (
          <Box
            sx={{
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              pointerEvents: 'none',
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: darkMode ? '#ffcc00' : '#007fff',
                fontSize: '0.75rem',
                fontWeight: 500,
              }}
            >
              📢 AdSense Ad Placeholder
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: darkMode ? '#888' : '#666',
                fontSize: '0.65rem',
              }}
            >
              {adStatus === 'loading' && '⏳ Loading...'}
              {adStatus === 'unfilled' && '⏳ Waiting for ads...'}
              {adStatus === 'error' && '❌ Ad failed to load'}
              {adStatus === 'initialized' && '✅ Ad initialized'}
            </Typography>
          </Box>
        )}
      </Box>
      {isDevelopment && (
        <Typography
          variant="caption"
          sx={{
            mt: 1,
            color: darkMode ? '#888' : '#666',
            fontSize: '0.7rem',
          }}
        >
          {scriptLoaded ? '✅ Script loaded' : '⏳ Loading script...'} | 
          Status: {adStatus} | 
          {adSlot ? ` Slot: ${adSlot}` : ' Auto ads'}
        </Typography>
      )}
    </Box>
  );
};

export default AdSense;
