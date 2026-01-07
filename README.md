# Live Website Link

🌐 **Live Website URL:** https://devamit09.github.io/innometricsautomation/

## Quick Access Links

### Direct Links to Sections:
1. **Homepage:** https://devamit09.github.io/innometricsautomation/
2. **About Section:** https://devamit09.github.io/innometricsautomation/#about
3. **Services:** https://devamit09.github.io/innometricsautomation/#services
4. **Leadership:** https://devamit09.github.io/innometricsautomation/#leadership
5. **Contact Form:** https://devamit09.github.io/innometricsautomation/#contact
6. **Careers:** https://devamit09.github.io/innometricsautomation/#careers

## Features Working on Live Site

✅ **Fully Functional:**
- Responsive design on all devices
- Navigation smooth scrolling
- Hero slider with auto-play
- Contact form validation
- Mobile touch gestures
- All animations working

⚠️ **Needs Configuration:**
- Google Drive file upload (requires Google Apps Script setup)
- Form submission to Google Sheets
- WhatsApp integration (phone number needs verification)
- Social media links (update with actual profiles)

## Setup Instructions for GitHub Pages

### 1. **Enable GitHub Pages:**
1. Go to your repository → Settings
2. Scroll to "Pages" section
3. Source: Select `main` branch
4. Folder: `/ (root)`
5. Click "Save"

### 2. **Update Configuration:**
Update these in your `script.js`:

```javascript
const CONFIG = {
    // Update with your Google Apps Script URL
    GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec',
    
    // Update with verified WhatsApp number
    WHATSAPP_NUMBER: '919730013049',
    
    // Update analytics ID
    ANALYTICS_ID: 'G-XXXXXXXXXX'
};
```

### 3. **Important Files to Update:**

#### **index.html:**
- Line 39: Update Google Analytics ID
- Line 52: Update Open Graph image URLs
- Line 57: Update Twitter image URLs
- Social media links (lines ~950-960)

#### **For Google Drive Integration:**
Follow these steps:

1. **Create Google Apps Script:**
   ```javascript
   // Use the provided Code.gs from previous instructions
   // Deploy as Web App with "Anyone" access
   ```

2. **Update script.js:**
   ```javascript
   // Line 8 in script.js
   const CONFIG = {
       GOOGLE_SCRIPT_URL: 'YOUR_DEPLOYED_WEB_APP_URL'
   };
   ```

### 4. **Testing Checklist:**

#### ✅ Basic Functionality:
- [ ] All images load properly
- [ ] Navigation works on all pages
- [ ] Slider auto-plays
- [ ] Mobile menu works
- [ ] Contact form validates

#### ✅ Performance:
- [ ] Page loads under 3 seconds
- [ ] Images lazy load
- [ ] No JavaScript errors
- [ ] Mobile responsive

#### ✅ Integration Tests:
- [ ] WhatsApp button opens chat
- [ ] Phone call button works
- [ ] Email links work
- [ ] Map loads correctly

## Quick Fix Commands

If you need to make quick updates:

```bash
# Clone repository
git clone https://github.com/devamit09/innometricsautomation.git

# Make changes
# Update files as needed

# Commit changes
git add .
git commit -m "Update: [describe changes]"

# Push to GitHub
git push origin main

# GitHub Pages will auto-deploy in 1-2 minutes
```

## Troubleshooting Common Issues

### 1. **404 Page Not Found:**
```bash
# Ensure index.html is in root
# Check GitHub Pages is enabled
# Clear browser cache: Ctrl+Shift+R
```

### 2. **Mixed Content Warnings:**
```html
<!-- Change http to https for all external resources -->
<script src="https://cdn.jsdelivr.net/..."></script>
```

### 3. **Form Not Submitting:**
- Check CORS settings in Google Apps Script
- Verify Google Script URL is correct
- Check browser console for errors

### 4. **Mobile Issues:**
- Test on actual mobile device
- Check viewport meta tag
- Verify touch event handlers

## Performance Monitoring

### Google PageSpeed Insights:
https://pagespeed.web.dev/analysis/https-devamit09-github-io-innometricsautomation/...

### Lighthouse Audit:
Run in Chrome DevTools → Lighthouse tab

### Expected Scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Security Recommendations

1. **HTTPS:** ✅ Already enforced by GitHub Pages
2. **Content Security Policy:** Add to HTML header
3. **API Keys:** Store in environment variables (for future)
4. **Form Protection:** Add honeypot field
5. **File Upload:** Implement virus scanning

## Analytics Setup

### Google Analytics:
1. Create property in Google Analytics
2. Get Measurement ID (G-XXXXXXXXXX)
3. Update in `index.html` line 39
4. Verify in Real-Time reports

### GitHub Traffic Analytics:
1. Repository → Insights → Traffic
2. Monitor unique visitors
3. Track popular pages

## Backup Instructions

### Local Backup:
```bash
# Create backup folder
mkdir innometrics-backup
cd innometrics-backup

# Download entire site
wget --mirror --convert-links --adjust-extension \
     --page-requisites --no-parent \
     https://devamit09.github.io/innometricsautomation/
```

### Database Backup (Form Submissions):
- Google Sheets auto-saves
- Google Drive stores uploaded files
- Regular exports recommended

## Support & Maintenance

### Regular Maintenance Tasks:
- Weekly: Check form submissions
- Monthly: Update client logos
- Quarterly: Review and update content
- Yearly: Full security audit

### Monitoring:
- UptimeRobot for availability
- Google Search Console for SEO
- GitHub Issues for bugs

---

**Note:** Your site is now live at https://devamit09.github.io/innometricsautomation/. All visitors can access it from anywhere in the world.
