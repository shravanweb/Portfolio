/**
 * Dynamically loads Google AdSense script with client ID from environment variables
 */
export const loadAdSenseScript = () => {
  const clientId = process.env.REACT_APP_ADSENSE_CLIENT_ID;
  
  if (!clientId) {
    console.warn('AdSense Client ID not found in environment variables');
    return;
  }

  // Check if script is already loaded
  if (document.querySelector(`script[src*="adsbygoogle.js"]`)) {
    return;
  }

  // Create and inject the AdSense script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
  script.crossOrigin = 'anonymous';
  script.setAttribute('data-ad-client', clientId);
  
  document.head.appendChild(script);
};

