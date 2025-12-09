/**
 * Build-time script to inject AdSense client ID into index.html
 * This runs before the build process to replace the placeholder with the actual client ID
 */
const fs = require('fs');
const path = require('path');

const envFile = path.join(__dirname, '..', '.env');
const htmlFile = path.join(__dirname, '..', 'public', 'index.html');

// Read environment variables
let clientId = 'ca-pub-6696519751206944'; // Default fallback

if (fs.existsSync(envFile)) {
  const envContent = fs.readFileSync(envFile, 'utf8');
  const match = envContent.match(/REACT_APP_ADSENSE_CLIENT_ID=(.+)/);
  if (match && match[1]) {
    clientId = match[1].trim();
  }
} else {
  // Try process.env as fallback (for CI/CD environments)
  clientId = process.env.REACT_APP_ADSENSE_CLIENT_ID || clientId;
}

// Read HTML file
let htmlContent = fs.readFileSync(htmlFile, 'utf8');

// Replace placeholder or add script if not present
const scriptTag = `    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}"
     crossorigin="anonymous"></script>`;

if (htmlContent.includes('<!-- Google AdSense script will be loaded dynamically via React -->')) {
  // Replace the comment with the actual script
  htmlContent = htmlContent.replace(
    '    <!-- Google AdSense script will be loaded dynamically via React -->',
    `    <!-- Google AdSense -->\n${scriptTag}`
  );
} else if (!htmlContent.includes('adsbygoogle.js')) {
  // Add script before closing head tag if it doesn't exist
  htmlContent = htmlContent.replace(
    '</head>',
    `    <!-- Google AdSense -->\n${scriptTag}\n\n</head>`
  );
}

// Write back to file
fs.writeFileSync(htmlFile, htmlContent, 'utf8');
console.log(`✓ AdSense script injected with client ID: ${clientId.substring(0, 20)}...`);

