# 🚂 Railway Deployment Guide

## Step-by-Step: Deploy to Railway

### Step 1: Sign Up for Railway

1. Go to **[railway.app](https://railway.app)**
2. Click **"Start a New Project"**
3. Sign up with **GitHub** (recommended) or email

### Step 2: Create New Project

1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Authorize Railway to access your GitHub
4. Select your `sweet-shop` repository
5. Click **"Deploy Now"**

### Step 3: Add MySQL Database

1. In your project dashboard, click **"New"**
2. Select **"Database"**
3. Choose **"Add MySQL"**
4. Railway will automatically create a MySQL database
5. Note the database credentials (they're auto-configured)

### Step 4: Configure Environment Variables

1. Click on your **web service** (not the database)
2. Go to **"Variables"** tab
3. Click **"New Variable"**
4. Add the following:

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

### Step 5: Update Application for Railway

Railway provides MySQL variables in a different format. Update your `application-prod.properties` to use Railway's format:

The application already supports both formats, but you may need to add:

```
SPRING_DATASOURCE_URL=jdbc:mysql://${MYSQL_HOST}:${MYSQL_PORT}/${MYSQL_DATABASE}?useSSL=false&serverTimezone=UTC
SPRING_DATASOURCE_USERNAME=${MYSQL_USER}
SPRING_DATASOURCE_PASSWORD=${MYSQL_PASSWORD}
```

### Step 6: Deploy

1. Railway automatically detects your Dockerfile
2. It will build and deploy automatically
3. Watch the build logs in the Railway dashboard
4. Once deployed, you'll see: **"Deployed successfully"**

### Step 7: Get Your Live URL

1. Click on your web service
2. Go to **"Settings"** tab
3. Under **"Domains"**, you'll see your app URL
4. Example: `https://sweet-shop-production.up.railway.app`
5. Click **"Generate Domain"** if needed

### Step 8: Test Your Live Application

```bash
# Health check
curl https://your-app-name.up.railway.app/api/auth/ping

# Register user
curl -X POST https://your-app-name.up.railway.app/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"testpass123","role":"USER"}'
```

## 🎨 Access Your Beautiful Frontend

Once deployed, visit:
```
https://your-app-name.up.railway.app
```

You'll see a beautiful, modern UI to interact with your API!

## 🔧 Troubleshooting

### Build Fails
- Check build logs in Railway dashboard
- Ensure Dockerfile is correct
- Verify Java 17 is specified

### Database Connection Issues
- Verify MySQL service is running
- Check environment variables are set
- Ensure database credentials are correct

### Application Won't Start
- Check application logs
- Verify PORT environment variable
- Ensure SPRING_PROFILES_ACTIVE=prod is set

### 502 Bad Gateway
- Application might be starting (wait 1-2 minutes)
- Check application logs for errors
- Verify port configuration

## 📊 Monitoring

Railway provides:
- **Logs** - Real-time application logs
- **Metrics** - CPU, Memory usage
- **Deployments** - Deployment history

## 🔄 Updating Your App

1. Push changes to GitHub
2. Railway automatically detects changes
3. Triggers new deployment
4. Your app updates automatically!

## 💰 Pricing

- **Free Tier:** $5 credit/month
- **Hobby Plan:** $5/month (if you exceed free tier)
- **Pro Plan:** $20/month (for production)

## ✅ Success Checklist

- [ ] Project created on Railway
- [ ] GitHub repository connected
- [ ] MySQL database added
- [ ] Environment variables configured
- [ ] Application deployed successfully
- [ ] Live URL working
- [ ] Frontend accessible
- [ ] API endpoints tested

## 🎉 You're Live!

Your application is now live on Railway with a beautiful frontend!

**Next Steps:**
- Share your live URL
- Test all endpoints
- Monitor usage in Railway dashboard
- Set up custom domain (optional)


