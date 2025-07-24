# Profile Image Setup Guide

## How to add your profile image to the portfolio:

### Step 1: Prepare your image
- Take a professional headshot photo
- Recommended size: 400x400px or larger (square aspect ratio works best)
- Format: JPG, PNG, or WebP
- Good lighting and clear background preferred

### Step 2: Add image to project
1. Save your image file as `profile-image.jpg` (or .png/.webp)
2. Copy it to: `src/assets/profile-image.jpg`

### Step 3: Update the Portfolio component
1. Open `src/Pages/Portfolio.jsx`
2. Find this line at the top of the file:
   ```jsx
   // import profileImage from '../assets/profile-image.jpg';
   ```
3. Uncomment it:
   ```jsx
   import profileImage from '../assets/profile-image.jpg';
   ```
4. Find the profile image section (around line 320) and replace this:
   ```jsx
   <div 
     className="profile-image"
     style={{
       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       fontSize: '4rem',
       color: 'white',
       fontWeight: 'bold'
     }}
   >
     {portfolioData.name.split(' ').map(n => n[0]).join('')}
   </div>
   ```
   
   With this:
   ```jsx
   <img 
     src={profileImage} 
     alt={portfolioData.name}
     className="profile-image"
   />
   ```

## Current Features:

✅ **Modern Design System**
- Custom CSS variables for consistent theming
- Professional color palette with gradients
- Smooth animations and micro-interactions

✅ **Advanced Animations**
- Framer Motion for smooth page transitions
- Scroll-triggered animations
- Interactive hover effects
- 3D transforms and parallax effects

✅ **Professional Layout**
- Hero section with contact links
- Skills showcase with progress indicators
- Detailed project cards with tech stacks
- Experience timeline
- Achievements and certifications sections

✅ **Interactive Elements**
- Copy-to-clipboard phone number
- Smooth scrolling navigation
- Responsive design for all devices
- Glassmorphism effects

✅ **Technical Skills Display**
- Technology icons from Simple Icons
- Skill level indicators
- Interactive hover animations
- Professional tech stack representation

## What makes this portfolio stand out:

1. **Senior-level Design**: Modern, clean, and professional aesthetic that reflects 2+ years of experience
2. **Advanced CSS**: Custom properties, complex animations, and modern layout techniques
3. **Performance Optimized**: Efficient animations and optimized rendering
4. **Interactive UX**: Micro-interactions that enhance user engagement
5. **Mobile-First**: Responsive design that works perfectly on all devices
6. **Accessibility**: Proper semantic HTML and keyboard navigation support

## To customize further:

- Update the `portfolioData` object with your actual information
- Add your GitHub repository URLs to project links
- Replace placeholder project links with actual URLs
- Add more projects to the projects array
- Update certifications with your actual credentials

Your portfolio now has a stunning, modern design that showcases your skills as an experienced frontend developer!
