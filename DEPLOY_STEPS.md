# 🚀 Step-by-Step Deployment Guide

## Deploy Your Sweet Shop App to Railway

Follow these steps to make your app live!

---

## 📋 Prerequisites

- ✅ GitHub account
- ✅ Railway account (free at [railway.app](https://railway.app))
- ✅ Code is ready (already done!)

---

## 🎯 Deployment Steps

### Step 1: Push Code to GitHub

**1.1** Open terminal/command prompt in your project folder:
```bash
cd C:\Users\akshi\OneDrive\Desktop\sweet-shop
```

**1.2** Check if you have a git repository:
```bash
git status
```

**1.3** If not initialized, initialize git:
```bash
git init
git add .
git commit -m "Complete Sweet Shop Management System - Ready for deployment"
```

**1.4** Create a new repository on GitHub:
- Go to [github.com](https://github.com)
- Click "New repository"
- Name it: `sweet-shop`
- Don't initialize with README
- Click "Create repository"

**1.5** Push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/sweet-shop.git
git branch -M main
git push -u origin main
```
*(Replace YOUR_USERNAME with your GitHub username)*

---

### Step 2: Sign Up for Railway

**2.1** Go to [railway.app](https://railway.app)

**2.2** Click "Start a New Project"

**2.3** Sign up with GitHub (recommended):
- Click "Login with GitHub"
- Authorize Railway to access your GitHub account

**2.4** You'll be redirected to Railway dashboard

---

### Step 3: Create New Project on Railway

**3.1** In Railway dashboard, click **"New Project"**

**3.2** Select **"Deploy from GitHub repo"**

**3.3** Authorize Railway (if prompted):
- Click "Configure GitHub App"
- Select your GitHub account
- Click "Install"

**3.4** Select your repository:
- Find `sweet-shop` in the list
- Click on it

**3.5** Railway will automatically:
- Detect your Dockerfile
- Start building your application
- This takes 3-5 minutes

**3.6** Wait for build to complete:
- You'll see build logs
- Wait for "Build successful" message

---

### Step 4: Add MySQL Database

**4.1** In your Railway project dashboard, click **"New"**

**4.2** Select **"Database"**

**4.3** Choose **"Add MySQL"**

**4.4** Railway will:
- Create a MySQL database
- Generate connection credentials
- This takes 1-2 minutes

**4.5** Wait for database to be ready:
- You'll see "MySQL" service in your project
- Status should show "Active"

---

### Step 5: Connect Database to Your App

**5.1** Click on your **web service** (not the database):
- It should be named something like "sweet-shop" or "web"

**5.2** Go to **"Variables"** tab

**5.3** Click **"New Variable"**

**5.4** Add this variable:
- **Name:** `SPRING_PROFILES_ACTIVE`
- **Value:** `prod`
- Click **"Add"**

**5.5** Click **"Add Reference"** button

**5.6** Select your **MySQL** database from the dropdown

**5.7** Railway automatically adds:
- `MYSQL_HOST`
- `MYSQL_PORT`
- `MYSQL_DATABASE`
- `MYSQL_USER`
- `MYSQL_PASSWORD`

**5.8** Your app will automatically restart with new configuration

---

### Step 6: Get Your Live URL

**6.1** Click on your **web service**

**6.2** Go to **"Settings"** tab

**6.3** Scroll down to **"Domains"** section

**6.4** Click **"Generate Domain"** (if not already generated)

**6.5** Railway will create a domain like:
```
https://sweet-shop-production-xxxx.up.railway.app
```

**6.6** Copy this URL - this is your live app!

---

### Step 7: Test Your Live App

**7.1** Open your browser

**7.2** Visit your Railway URL:
```
https://your-app-name.up.railway.app
```

**7.3** You should see:
- ✅ Login/Register page
- ✅ Beautiful React frontend
- ✅ Everything working!

**7.4** Test the app:
- Register a new user
- Login with your credentials
- Browse sweets
- Test search functionality
- Try purchasing sweets

**7.5** Test API (optional):
```bash
curl https://your-app-name.up.railway.app/api/auth/ping
```
Should return: `OK`

---

## ✅ Deployment Complete!

Your app is now live! 🎉

---

## 🔄 How to Update Your App

**To update your live app:**

1. Make changes to your code
2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Update feature"
   git push
   ```
3. Railway automatically detects changes
4. Triggers new deployment
5. App updates in 3-5 minutes!

---

## 🐛 Troubleshooting

### Build Fails

**Check:**
- View logs in Railway dashboard
- Click on deployment → "View Logs"
- Look for error messages

**Common fixes:**
- Ensure Dockerfile is correct
- Check all dependencies are available
- Verify frontend builds successfully

### App Won't Start

**Check:**
- Environment variables are set correctly
- Database is connected
- Port configuration is correct

**View logs:**
- Click on web service → "Deployments" → "View Logs"

### Frontend Not Loading

**Check:**
- Frontend build was successful
- Static files are in the JAR
- Routes are configured correctly

**Fix:**
- Check Railway build logs
- Verify Dockerfile copied frontend correctly

### Database Connection Issues

**Check:**
- Database reference is added
- Environment variables are set
- Database is active

**Fix:**
- Re-add database reference
- Check MySQL service is running

---

## 📊 Monitor Your App

**Railway provides:**
- **Logs** - Real-time application logs
- **Metrics** - CPU, Memory usage
- **Deployments** - Deployment history
- **Database** - MySQL connection info

**Access:**
- Click on your service
- View logs, metrics, and settings

---

## 💰 Pricing

- **Free Tier:** $5 credit/month (usually enough for small apps)
- **Hobby Plan:** $5/month (if you exceed free tier)
- **Pro Plan:** $20/month (for production apps)

---

## 🎯 Quick Reference

### Your Live URL:
```
https://your-app-name.up.railway.app
```

### Update App:
```bash
git push
```

### View Logs:
- Railway dashboard → Your service → Deployments → View Logs

---

## ✅ Success Checklist

- [ ] Code pushed to GitHub
- [ ] Railway account created
- [ ] Project created on Railway
- [ ] Build successful
- [ ] MySQL database added
- [ ] Database connected (reference added)
- [ ] Environment variable set (`SPRING_PROFILES_ACTIVE=prod`)
- [ ] Domain generated
- [ ] Live URL accessible
- [ ] Frontend loads correctly
- [ ] Can register users
- [ ] Can login
- [ ] Can browse sweets
- [ ] All features working

---

## 🎉 You're Live!

Your complete Sweet Shop Management System is now live on Railway!

**Share your URL and show off your work!** 🚀

---

## 📚 Need More Help?

- **Railway Docs:** [docs.railway.app](https://docs.railway.app)
- **Railway Support:** [railway.app/support](https://railway.app/support)
- **Check logs:** Railway dashboard → Your service → Logs

---

**Good luck with your deployment!** 🍬

