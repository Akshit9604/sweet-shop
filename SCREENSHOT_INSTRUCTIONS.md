# 📸 Screenshot Setup Instructions

## Current Status

The README.md is configured to display screenshots, but the image files need to be added to the repository.

## Quick Fix - Add Your Screenshots

### Option 1: Add Screenshots via GitHub Web Interface (Easiest)

1. **Go to your repository:** https://github.com/Akshit9604/sweet-shop
2. **Click "Add file" → "Upload files"**
3. **Navigate to or create `screenshots/` folder**
4. **Upload your screenshots:**
   - `login.png`
   - `dashboard.png`
   - `admin.png`
5. **Commit the changes**

### Option 2: Add Screenshots via Command Line

1. **Take screenshots** of your application:
   - Login page
   - Dashboard
   - Admin panel

2. **Save them** in the `screenshots/` directory:
   ```bash
   # Make sure you're in the project root
   cd sweet-shop
   
   # Create screenshots directory if it doesn't exist
   mkdir -p screenshots
   
   # Copy your screenshots here
   # Name them: login.png, dashboard.png, admin.png
   ```

3. **Add and commit:**
   ```bash
   git add screenshots/*.png
   git commit -m "Add application screenshots"
   git push origin main
   ```

### Option 3: Use Screenshots from Your Computer

If you have screenshots saved elsewhere:

```bash
# Copy screenshots to the project
cp /path/to/your/login.png screenshots/
cp /path/to/your/dashboard.png screenshots/
cp /path/to/your/admin.png screenshots/

# Add to git
git add screenshots/
git commit -m "Add application screenshots"
git push origin main
```

## Screenshot Requirements

- **Format:** PNG or JPG
- **Recommended Size:** 1200x800 pixels or similar
- **File Names:** 
  - `login.png`
  - `dashboard.png`
  - `admin.png`
- **Location:** `screenshots/` directory in project root

## Verify Screenshots Are Added

After adding screenshots:

1. **Check GitHub:**
   - Visit: https://github.com/Akshit9604/sweet-shop/tree/main/screenshots
   - You should see the image files

2. **Check README:**
   - Visit: https://github.com/Akshit9604/sweet-shop
   - Scroll to "Screenshots" section
   - Images should be visible

## Troubleshooting

### Screenshots Not Showing?

1. **Check file names:** Must be exactly `login.png`, `dashboard.png`, `admin.png`
2. **Check location:** Must be in `screenshots/` directory
3. **Check file format:** PNG or JPG
4. **Refresh GitHub:** Clear cache and refresh the page
5. **Check README paths:** Should be `./screenshots/filename.png`

### Alternative: Use GitHub Image URLs

If local images don't work, you can:

1. Upload images to GitHub Issues (drag and drop)
2. Right-click image → "Copy image address"
3. Update README.md with the full GitHub URL

---

**Once screenshots are added, they will automatically appear in the README!** 📸

