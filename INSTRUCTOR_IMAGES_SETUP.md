# Instructor Images Setup

The Instructors page has been created successfully! However, the image generation quota has been exhausted.

## Required Images

Please add the following instructor images to complete the page:

### Image Locations
All images should be placed in: `public/images/instructors/`

### Required Images:
1. **sophie.jpg** - Sophie Moore (dark-haired woman in sage green yoga top)
2. **emily.jpg** - Emily Woods (blonde woman in sage green yoga top)
3. **danna.jpg** - Danna Smith (red-haired woman in sage green yoga top)
4. **rose.jpg** - Rose Miller (Black woman with curly afro in sage green yoga top)
5. **emma.jpg** - Emma Jones (brown-haired woman in sage green yoga top)
6. **ella.jpg** - Ella Davis (blonde wavy-haired woman in sage green yoga top)

### Image Specifications:
- **Aspect Ratio**: 3:4 (portrait orientation)
- **Style**: Professional headshot/portrait
- **Background**: Blurred yoga studio or neutral background
- **Clothing**: Sage green yoga tank top
- **Expression**: Warm, welcoming smile
- **Lighting**: Soft, natural lighting
- **Size**: Recommended minimum 600x800px

### Temporary Placeholder
For now, you can use placeholder images from services like:
- https://i.pravatar.cc/600?img=X (replace X with numbers 1-60)
- https://randomuser.me/api/portraits/women/X.jpg (replace X with numbers)
- Or use any stock photo service

### Quick Setup Command (Windows PowerShell):
```powershell
# Create the instructors directory
New-Item -ItemType Directory -Force -Path "public/images/instructors"

# Download placeholder images (requires internet)
# You can replace these URLs with your actual instructor photos
Invoke-WebRequest -Uri "https://i.pravatar.cc/600?img=1" -OutFile "public/images/instructors/sophie.jpg"
Invoke-WebRequest -Uri "https://i.pravatar.cc/600?img=5" -OutFile "public/images/instructors/emily.jpg"
Invoke-WebRequest -Uri "https://i.pravatar.cc/600?img=9" -OutFile "public/images/instructors/danna.jpg"
Invoke-WebRequest -Uri "https://i.pravatar.cc/600?img=10" -OutFile "public/images/instructors/rose.jpg"
Invoke-WebRequest -Uri "https://i.pravatar.cc/600?img=20" -OutFile "public/images/instructors/emma.jpg"
Invoke-WebRequest -Uri "https://i.pravatar.cc/600?img=25" -OutFile "public/images/instructors/ella.jpg"
```

## Page Features Implemented:
✅ Responsive 3-column grid (desktop) → 2-column (tablet) → 1-column (mobile)
✅ Smooth scroll animations with Framer Motion
✅ Plus button overlay on each instructor card
✅ Hover effects on plus button
✅ Proper semantic HTML and accessibility
✅ SEO-friendly with Helmet meta tags
✅ Data-driven from `src/data/instructors.ts`

## Route:
The page is accessible at: **http://localhost:8080/instructors**
