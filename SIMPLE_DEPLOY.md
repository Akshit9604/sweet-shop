# 🚀 Simple Deployment Steps

## Deploy Your App in 7 Easy Steps

---

### Step 1: Push to GitHub

```bash
# In your project folder
cd C:\Users\akshi\OneDrive\Desktop\sweet-shop

# Initialize git (if not done)
git init
git add .
git commit -m "Ready for deployment"

# Create repo on GitHub.com, then:
git remote add origin https://github.com/YOUR_USERNAME/sweet-shop.git
git push -u origin main
```

---

### Step 2: Sign Up for Railway

1. Go to **[railway.app](https://railway.app)**
2. Click **"Start a New Project"**
3. Sign up with **GitHub**

---

### Step 3: Deploy from GitHub

1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose your `sweet-shop` repository
4. **Wait 3-5 minutes** for build

---

### Step 4: Add MySQL Database

1. Click **"New"** → **"Database"** → **"Add MySQL"**
2. Wait for database to be ready

---

### Step 5: Connect Database

1. Click your **web service**
2. Go to **"Variables"** tab
3. Click **"New Variable"**:
   - Name: `SPRING_PROFILES_ACTIVE`
   - Value: `prod`
4. Click **"Add Reference"** → Select **MySQL**

---

### Step 6: Get Your URL

1. Click your **web service**
2. Go to **"Settings"** → **"Domains"**
3. Click **"Generate Domain"**
4. Copy your URL!

---

### Step 7: Test Your App

Visit your URL:
```
https://your-app-name.up.railway.app
```

**Test:**
- Register a user
- Login
- Browse sweets

---

## ✅ Done!

Your app is live! 🎉

---

## 🔄 Update Later

Just push to GitHub:
```bash
git push
```

Railway auto-deploys!

---

**See [DEPLOY_STEPS.md](DEPLOY_STEPS.md) for detailed instructions.**

