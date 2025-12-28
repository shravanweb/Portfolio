# AdSense Implementation Guide

## Overview

This guide explains the AdSense policy compliance implementation for the portfolio site.

---

## Architecture

### Component Hierarchy

```
AdSense Component
├── Content Validation Layer
│   ├── Word count checking
│   ├── Content requirement enforcement
│   └── Development feedback
├── Script Management Layer
│   ├── Dynamic loading
│   ├── Error handling
│   └── Status tracking
└── Rendering Layer
    ├── Ad container
    ├── Placeholder display
    └── Status indicators
```

---

## Content Validation System

### How It Works

1. **Initialization**: When AdSense component mounts, it checks page content
2. **Word Count**: Scans main content area for text content
3. **Threshold Check**: Compares word count against 300-word minimum
4. **Decision**: Shows/hides ads based on content sufficiency
5. **Feedback**: Logs warnings in development mode

### Code Implementation

```javascript
// Check if page has sufficient content
useEffect(() => {
  if (!requireMinContent) {
    setHasMinContent(true);
    return;
  }

  const checkContentLength = () => {
    // Select main content area
    const main = document.querySelector('main') || 
                 document.querySelector('[role="main"]') || 
                 document.body;
    
    // Extract text content
    const textContent = main?.innerText || '';
    
    // Count words
    const wordCount = textContent
      .split(/\s+/)
      .filter(word => word.length > 0)
      .length;
    
    // Check against minimum requirement
    const hasEnoughContent = wordCount >= 300;
    setHasMinContent(hasEnoughContent);
    
    // Log warning if insufficient
    if (!hasEnoughContent) {
      console.warn(
        `⚠️ Page has insufficient content (${wordCount} words). ` +
        `Minimum 300 words recommended for AdSense.`
      );
    }
  };

  // Check immediately and after short delay for dynamic content
  checkContentLength();
  const timer = setTimeout(checkContentLength, 500);

  return () => clearTimeout(timer);
}, [requireMinContent]);
```

---

## Usage Examples

### Basic Usage (Default: Content Required)

```jsx
import AdSense from '../components/AdSense';

function MyPage() {
  return (
    <div>
      <h1>Page Title</h1>
      <p>Page content here...</p>
      {/* Ads only show if content >= 300 words */}
      <AdSense adFormat="auto" />
    </div>
  );
}
```

### Force Ad Display (No Content Check)

```jsx
// Only use when page content requirement can't be met
<AdSense adFormat="auto" requireMinContent={false} />
```

### With Custom Ad Slot

```jsx
<AdSense 
  adSlot="1234567890" 
  adFormat="rectangle"
  requireMinContent={true}
/>
```

### With Styling

```jsx
<AdSense 
  adFormat="auto" 
  style={{
    marginBottom: '2rem',
    marginTop: '1rem'
  }}
/>
```

---

## Configuration

### Environment Variables

```env
# .env file
REACT_APP_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXX
```

### Default Client ID

If no environment variable is set:
- Development: `ca-pub-6696519751206944` (placeholder)
- Production: Must set `REACT_APP_ADSENSE_CLIENT_ID`

---

## State Management

### Component State

```javascript
// Tracks whether script has loaded
const [scriptLoaded, setScriptLoaded] = useState(false);

// Tracks ad rendering status
const [adStatus, setAdStatus] = useState('loading');

// Tracks content sufficiency
const [hasMinContent, setHasMinContent] = useState(true);
```

### Ad Statuses

| Status | Meaning | Action |
|--------|---------|--------|
| `loading` | Script loading | Display placeholder |
| `unfilled` | Waiting for ads | Display placeholder |
| `done` | Ad rendered | Show actual ad |
| `filled` | Ad ready | Show actual ad |
| `error` | Loading failed | Show error indicator |
| `initialized` | Ad initialized | Processing |

---

## Development Mode Features

### Console Warnings

```
⚠️ Page has insufficient content (245 words). Minimum 300 words recommended for AdSense.
⚠️ AdSense script not loaded after max retries
❌ Failed to load AdSense script
✅ AdSense ad already loaded
```

### Visual Indicators

In development, insufficient content shows:
- Dashed border in theme color
- Semi-transparent background
- Text: "AdSense Disabled: Page doesn't meet minimum content requirement"

### Debug Information

```
✅ Script loaded | Status: initialized | Slot: auto
⏳ Loading script... | Status: loading | Auto ads
```

---

## Performance Considerations

### Optimization Strategies

1. **Lazy Loading**: Script loads only when component mounts
2. **Content Caching**: Word count checked once on initialization
3. **Deferred Initialization**: Ad initialization waits for DOM ready
4. **Error Recovery**: Automatic retries with exponential backoff
5. **Cleanup**: Proper cleanup of timers and observers

### Load Time Impact

- Script loading: ~0.5-1 second (async)
- Content validation: ~5-10ms (one-time)
- Ad initialization: ~1-3 seconds (depends on availability)

---

## Debugging

### Enable Debug Logging

Set in browser console:
```javascript
localStorage.setItem('DEBUG_ADSENSE', 'true');
```

### Check Content Validation

Run in console:
```javascript
// Get word count of page
const main = document.querySelector('main') || document.body;
const words = main.innerText.split(/\s+/).filter(w => w.length > 0);
console.log(`Page has ${words.length} words`);
console.log(`Requirement: ${words.length >= 300 ? '✅ PASS' : '❌ FAIL'}`);
```

### Monitor Ad Loading

```javascript
// Check adsbygoogle status
console.log(window.adsbygoogle);
```

---

## Compliance Checklist

- [x] Content validation implemented
- [x] Minimum word count enforced (300 words)
- [x] Conditional ad rendering
- [x] Error handling in place
- [x] Development feedback enabled
- [x] Script loading optimized
- [x] Proper cleanup on unmount
- [x] Accessibility maintained
- [x] Responsive design supported
- [x] Browser compatibility verified

---

## Common Issues & Solutions

### Ads Not Showing

**Problem:** Ads not displaying even on content-rich pages

**Solutions:**
1. Check environment variable: `REACT_APP_ADSENSE_CLIENT_ID`
2. Verify page has 300+ words
3. Check console for error messages
4. Ensure AdSense account is active
5. Check browser console for network errors

### Content Not Counted

**Problem:** Word count seems incorrect

**Solutions:**
1. Ensure content is in semantic HTML (not images/videos)
2. Check for hidden content (display: none)
3. Verify main content area selector
4. Include content in `<main>` or `[role="main"]`

### Script Loading Fails

**Problem:** AdSense script fails to load

**Solutions:**
1. Check internet connection
2. Verify CORS settings
3. Check browser console for errors
4. Verify client ID format
5. Check AdSense account status

---

## Future Enhancements

Possible improvements:
1. [x] Content validation system
2. [ ] Advanced analytics integration
3. [ ] A/B testing framework
4. [ ] Dynamic ad slot optimization
5. [ ] Multi-page content aggregation
6. [ ] Performance monitoring dashboard
7. [ ] Automated compliance reporting

---

## Support & Resources

### Internal Documentation
- [ADSENSE_FIXES_SUMMARY.md](./ADSENSE_FIXES_SUMMARY.md) - Implementation summary
- [ADSENSE_POLICY_COMPLIANCE.md](./ADSENSE_POLICY_COMPLIANCE.md) - Policy details
- [QUICK_REFERENCE_CHECKLIST.md](./QUICK_REFERENCE_CHECKLIST.md) - Quick reference

### External Resources
- [Google AdSense Policies](https://support.google.com/adsense/answer/48182)
- [AdSense Program Policies](https://support.google.com/adsense/answer/1346295)
- [Compliance & Quality](https://support.google.com/adsense/answer/10346328)
- [Content Guidelines](https://support.google.com/adsense/answer/1282108)

---

**Version:** 1.0
**Last Updated:** December 27, 2024
**Status:** Production Ready
