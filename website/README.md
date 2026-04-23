# Koech Insights 5 - Business Website

A professional, responsive business website for Koech Insights 5, offering business consulting, education & training, tech solutions, and marketing services.

## 📁 Project Structure

```
website/
├── index.html           # Home page
├── about.html           # About page with team and company info
├── services.html        # Detailed services page with pricing
├── contact.html         # Contact page with form and FAQ
├── styles.css           # Complete styling
├── script.js            # JavaScript functionality
└── README.md            # This file
```

## 🎨 Features

✅ **Fully Responsive Design** - Works seamlessly on mobile, tablet, and desktop
✅ **Modern UI/UX** - Professional gradient backgrounds and smooth animations
✅ **4 Main Services** - Business Consulting, Education & Training, Tech Solutions, Marketing
✅ **Contact Form** - Fully functional form with validation
✅ **Mobile Navigation** - Hamburger menu for mobile devices
✅ **SEO Friendly** - Proper HTML structure and semantic tags
✅ **Performance Optimized** - Fast loading with minimal dependencies
✅ **Easy to Customize** - Clean, well-organized code

## 🚀 Pages Included

### 1. Home (index.html)
- Hero section with call-to-action
- Services overview (4 main services)
- Why choose us section
- Client testimonials
- Footer with contact info

### 2. About (about.html)
- Company story and background
- Mission and vision statements
- Core values (6 values highlighted)
- Team members with bios
- Key statistics and achievements

### 3. Services (services.html)
- Detailed service descriptions
- Service features and benefits
- Pricing tiers (Starter, Professional, Enterprise)
- Call-to-action buttons

### 4. Contact (contact.html)
- Contact form with validation
- Contact information
- Business hours
- Social media links
- FAQ section (6 common questions)

## 🛠️ Customization Guide

### Update Company Information
Edit these details in all HTML files:
- Company name: "Koech Insights 5"
- Email: info@koechinsights5.com
- Phone: +254 (0) 700 000 000
- Address: Nairobi, Kenya

### Change Colors
Edit CSS variables in `styles.css` (lines 8-15):
```css
:root {
    --primary-color: #2563eb;      /* Main blue */
    --secondary-color: #ff9500;    /* Orange accent */
    --accent-color: #10b981;       /* Green accent */
    --dark-color: #1f2937;         /* Dark text */
    --light-color: #f9fafb;        /* Light background */
}
```

### Update Team Members
Edit the team section in `about.html` (lines 140-180) with your actual team:
- Replace names and roles
- Update bios and descriptions
- You can change emoji avatars to actual image URLs

### Add Your Logo
In the navbar, replace the text logo with an image:
```html
<div class="logo">
    <img src="path/to/logo.png" alt="Logo" height="40">
</div>
```

### Configure Contact Form
To actually receive form submissions, integrate with a service like:
- **Formspree** (https://formspree.io/)
- **Netlify Forms** (if hosting on Netlify)
- **Backend API** (your own server)

Uncomment and modify the form submission code in `script.js` (lines 71-93).

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with side-by-side grids
- **Tablet** (≤768px): Single column layouts, adjusted spacing
- **Mobile** (≤480px): Optimized for small screens, touch-friendly buttons

## 🔧 Setup Instructions

1. **Clone or Download** the website files
2. **Open `index.html`** in your web browser
3. **Customize** the content with your company information
4. **Deploy** to a web host (GitHub Pages, Netlify, Vercel, etc.)

## 📤 Deployment Options

### GitHub Pages
```bash
# Push to a gh-pages branch
git checkout -b gh-pages
git push origin gh-pages
```
Then enable GitHub Pages in repository settings.

### Netlify
1. Connect your GitHub repository
2. Set build command: `(leave empty for static site)`
3. Set publish directory: `website/` or root if files are at root
4. Deploy!

### Traditional Hosting
1. Upload files via FTP
2. Ensure web server can serve HTML files
3. No backend required!

## 📋 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 SEO Best Practices

The website includes:
- Proper meta tags
- Semantic HTML structure
- Mobile-responsive design
- Fast loading time
- Descriptive alt text for images

To improve SEO further:
1. Add your business to Google Business Profile
2. Create a sitemap.xml
3. Add robots.txt
4. Submit to Google Search Console
5. Ensure HTTPS is enabled

## 📞 Support & Contact

For questions or support:
- Email: info@koechinsights5.com
- Phone: +254 (0) 700 000 000

## 📄 License

This website template is ready to use for Koech Insights 5.

## ✨ Features to Consider Adding

- Blog section for articles and insights
- Client portfolio/case studies
- Newsletter signup
- Live chat support
- Video testimonials
- Integration with project management tools
- Appointment booking system
- Multi-language support

---

**Created**: 2026-04-23
**Last Updated**: 2026-04-23
