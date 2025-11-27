# BCA Website Setup Instructions

## Adding the Background Image

The hero section on the landing page is designed to use a background image from your current website.

### Steps to Add Background Image:

1. **Get the Image**
   - Visit: https://bothellconsultinga.wixsite.com/bothell-consulting
   - Download the campus background image (bothell.jpg)
   - Or use any high-quality image of UW Bothell campus or relevant background

2. **Add to Project**
   - Save the image as: `/public/bothell.jpg`
   - Recommended specs:
     - Resolution: 1920x1080 or higher
     - Format: JPEG or WebP
     - File size: < 500KB (optimized for web)

3. **Enable in Code**
   - Open: `/app/page.tsx`
   - Line 2: Uncomment the Image import
     ```typescript
     import Image from "next/image";
     ```
   - Lines 8-19: Uncomment the Image component block
   - The background will automatically appear with a purple overlay

### Current State

The hero section currently shows a gradient background (purple to light purple). Once you add the image and uncomment the code, it will display the campus photo with the purple overlay for better text readability.

## Other Customizations Needed

### 1. **Google Form** (Contact Page)
   - File: `/app/contact/page.tsx`
   - Replace the placeholder with your actual Google Form embed code
   - Example:
     ```html
     <iframe 
       src="YOUR_GOOGLE_FORM_URL" 
       width="100%" 
       height="600"
       frameBorder="0"
     />
     ```

### 2. **Member Headshots** (Members Page)
   - Add member photos to `/public/members/` folder
   - Update the members array in `/app/members/page.tsx`
   - Add actual member data (names, roles, majors, etc.)

### 3. **Company Logos** (Alumni Page)
   - Add company logos to `/public/companies/` folder
   - Update the companies array in `/app/alumni/page.tsx`
   - Replace placeholder logos with actual company images

### 4. **Neue Regrade Font** (Optional)
   - **Status**: Temporarily using Manrope for headings
   - To enable Neue Regrade:
     1. Add these files to `/public/fonts/`:
        - `NeueRegrade-Regular.woff2` (weight 400)
        - `NeueRegrade-SemiBold.woff2` (weight 600)
        - `NeueRegrade-Bold.woff2` (weight 700)
     2. Uncomment the font configuration in `/app/layout.tsx` (lines 3 and 16-31)
     3. Update `/app/globals.css` to use `var(--font-heading)` for h1-h6
   - See `/public/fonts/README.md` for detailed instructions on obtaining the font

### 5. **Social Media Links**
   - Update LinkedIn and Instagram links in:
     - `/app/components/Navigation.tsx`
     - `/app/components/Footer.tsx`

## Running the Website

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit: http://localhost:3000

## Project Structure

```
bca-website/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx    # Top navigation bar
│   │   └── Footer.tsx         # Footer component
│   ├── about/page.tsx         # About Us page
│   ├── members/page.tsx       # Members page (black background)
│   ├── join/page.tsx          # Join BCA page
│   ├── contact/page.tsx       # Contact page
│   ├── alumni/page.tsx        # Alumni page
│   ├── page.tsx               # Landing page
│   ├── layout.tsx             # Root layout
│   └── globals.css            # Global styles
└── public/
    └── (add images here)
```

## Brand Colors

- **Gold**: #FFD700
- **Purple**: #6E00B3
- **Light Purple**: #7851A9

These are configured in `/app/globals.css` and used throughout the site.

## Need Help?

- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React Documentation: https://react.dev/

