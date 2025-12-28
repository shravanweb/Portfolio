#!/bin/bash
# AdSense Policy Compliance Fix Script
# This script helps verify and maintain AdSense policy compliance

echo "========================================="
echo "AdSense Policy Compliance Check"
echo "========================================="
echo ""

# Check for AdSense component
if [ -f "src/components/AdSense.js" ]; then
    echo "✅ AdSense component found"
    if grep -q "requireMinContent" src/components/AdSense.js; then
        echo "✅ Content validation enabled"
    else
        echo "⚠️  Warning: Content validation not found"
    fi
else
    echo "❌ AdSense component not found"
fi

echo ""
echo "Checking page content quality..."
echo ""

# Check About page content
if [ -f "src/pages/aboutus.js" ]; then
    lines=$(wc -l < src/pages/aboutus.js)
    if [ $lines -gt 130 ]; then
        echo "✅ About page has sufficient content (${lines} lines)"
    else
        echo "⚠️  About page may need more content"
    fi
fi

# Check Services page content
if [ -f "src/pages/services.js" ]; then
    lines=$(wc -l < src/pages/services.js)
    if [ $lines -gt 140 ]; then
        echo "✅ Services page has sufficient content (${lines} lines)"
    else
        echo "⚠️  Services page may need more content"
    fi
fi

# Check Projects page content
if [ -f "src/pages/projects.js" ]; then
    lines=$(wc -l < src/pages/projects.js)
    if [ $lines -gt 180 ]; then
        echo "✅ Projects page has sufficient content (${lines} lines)"
    else
        echo "⚠️  Projects page may need more content"
    fi
fi

echo ""
echo "Checking environment configuration..."
echo ""

# Check env file
if [ -f ".env" ]; then
    echo "✅ .env file exists"
    if grep -q "REACT_APP_ADSENSE_CLIENT_ID" .env; then
        echo "✅ AdSense Client ID configured"
    else
        echo "⚠️  AdSense Client ID not configured"
    fi
else
    echo "ℹ️  .env file not found (optional in development)"
fi

echo ""
echo "========================================="
echo "Compliance Check Complete"
echo "========================================="
echo ""
echo "Next Steps:"
echo "1. Build and deploy the application"
echo "2. Test ad display on all pages"
echo "3. Submit for Google AdSense review"
echo "4. Monitor policy compliance in AdSense dashboard"
echo ""
