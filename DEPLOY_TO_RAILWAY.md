# 🚂 Deploy to Railway - Complete Guide

## 🎯 Deploy Both Frontend & Backend Together

This guide will help you deploy your complete Sweet Shop Management System to Railway.

---

## ✅ Pre-Deployment Checklist

- [ ] Code is pushed to GitHub
- [ ] Railway account created
- [ ] GitHub connected to Railway

---

## 🚀 Step-by-Step Deployment

### Step 1: Push Code to GitHub

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Sign Up for Railway

1. Go to **[railway.app](https://railway.app)**
2. Click **"Start a New Project"**
3. Sign up with **GitHub** (recommended)

### Step 3: Create New Project

1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Authorize Railway to access your GitHub
4. Select your `sweet-shop` repository
5. Click **"Deploy Now"**

### Step 4: Add MySQL Database

1. In your project dashboard, click **"New"**
2. Select **"Database"**
3. Choose **"Add MySQL"**
4. Railway will automatically create a MySQL database
5. Note: Railway auto-configures connection variables

### Step 5: Configure Environment Variables

1. Click on your **web service** (not the database)
2. Go to **"Variables"** tab
3. Click **"New Variable"**
4. Add:

```
SPRING_PROFILES_ACTIVE=prod
PORT=8081
```

5. For database connection, click **"Add Reference"**
6. Select your MySQL database
7. Railway automatically adds:
   - `MYSQL_HOST`
   - `MYSQL_PORT`
   - `MYSQL_DATABASE`
   - `MYSQL_USER`
   - `MYSQL_PASSWORD`

### Step 6: Wait for Deployment

Railway will:
1. Build the Docker image (includes frontend build)
2. Deploy the application
3. Start the server

**This takes 3-5 minutes**

### Step 7: Get Your Live URL

1. Click on your web service
2. Go to **"Settings"** tab
3. Under **"Domains"**, you'll see your app URL
4. Example: `https://sweet-shop-production.up.railway.app`
5. Click **"Generate Domain"** if needed

---

## 🎉 Your App is Live!

Once deployed, visit your Railway URL:
```
https://your-app-name.up.railway.app
```

You'll see:
- ✅ Beautiful React frontend
- ✅ Full backend API
- ✅ Everything working together!

---

## 🔧 How It Works

### Build Process:

1. **Frontend Build:**
   - Dockerfile builds React app
   - Creates production build in `frontend/dist`

2. **Backend Build:**
   - Copies frontend build to `src/main/resources/static`
   - Builds Spring Boot JAR with frontend included

3. **Deployment:**
   - Single JAR file contains everything
   - Spring Boot serves React app from static resources
   - All routes work seamlessly

### Architecture:

```
User Browser
    ↓
Railway URL (HTTPS)
    ↓
Spring Boot Server (Port 8081)
    ├── Serves React App (index.html, assets)
    └── API Endpoints (/api/*)
    ↓
MySQL Database (Railway)
```

---

## 🧪 Test Your Live App

### Test Frontend:
Visit: `https://your-app.up.railway.app`
- Should see login page
- Can register users
- Can login
- Can browse sweets

### Test API:
```bash
# Health check
curl https://your-app.up.railway.app/api/auth/ping

# Register
curl -X POST https://your-app.up.railway.app/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"test","password":"test123","role":"USER"}'
```

---

## 🔄 Updating Your App

1. **Make changes to code**
2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Update feature"
   git push
   ```
3. **Railway auto-detects changes**
4. **Triggers new deployment**
5. **App updates automatically!**

---

## 📊 Monitoring

Railway provides:
- **Logs** - Real-time application logs
- **Metrics** - CPU, Memory usage
- **Deployments** - Deployment history
- **Database** - MySQL connection info

---

## 🐛 Troubleshooting

### Build Fails

**Check:**
- Dockerfile is correct
- Frontend builds successfully
- Backend compiles
- All dependencies available

**View logs:**
- Click on deployment → "View Logs"

### App Won't Start

**Check:**
- Environment variables are set
- Database is connected
- Port configuration is correct

**View logs:**
- Check application logs in Railway dashboard

### Frontend Not Loading

**Check:**
- Frontend build was successful
- Static files are in JAR
- Routes are configured correctly

---

## ✅ Success Indicators

- [ ] Build completes successfully
- [ ] Deployment shows "Deployed"
- [ ] Live URL accessible
- [ ] Frontend loads correctly
- [ ] API endpoints respond
- [ ] Database connected

---

## 🎯 What You Get

- ✅ **Single URL** for frontend + backend
- ✅ **Automatic HTTPS** (Railway provides)
- ✅ **Auto-deploy** on git push
- ✅ **Database included** (MySQL)
- ✅ **Monitoring** built-in
- ✅ **Scalable** infrastructure

---

## 💰 Pricing

- **Free Tier:** $5 credit/month
- **Hobby Plan:** $5/month (if you exceed free tier)
- **Pro Plan:** $20/month (for production)

---

## 🎉 You're Live!

Your complete Sweet Shop Management System is now live on Railway!

**Share your URL and show off your work!** 🚀

---

**Need Help?** Check Railway logs or documentation.

