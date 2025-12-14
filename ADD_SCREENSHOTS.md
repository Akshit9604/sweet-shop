# 📸 How to Add Screenshots

## Quick Guide

To make screenshots visible in your README, follow these steps:

### Step 1: Take Screenshots

Take screenshots of your application:
1. **Login Page** - The login interface
2. **Dashboard** - User view with sweets
3. **Admin Panel** - Admin management interface

### Step 2: Save Screenshots

Save them in the `screenshots/` directory with these exact names:
- `login.png` (or `login.jpg`)
- `dashboard.png` (or `dashboard.jpg`)
- `admin.png` (or `admin.jpg`)

### Step 3: Add to Repository

```bash
# Add screenshots
git add screenshots/*.png

# Commit
git commit -m "Add application screenshots"

# Push
git push origin main
```

### Step 4: Verify

Visit your GitHub repository and check that:
- Screenshots appear in the `screenshots/` folder
- README.md displays the images correctly

---

## Alternative: Use Image URLs

If you prefer to host images elsewhere, you can:

1. Upload to GitHub Issues (drag and drop)
2. Use image hosting services
3. Update README.md with direct image URLs

---

## Current Status

The README.md is configured to display screenshots from:
```
screenshots/login.png
screenshots/dashboard.png
screenshots/admin.png
```

Just add the image files and they'll be visible!

