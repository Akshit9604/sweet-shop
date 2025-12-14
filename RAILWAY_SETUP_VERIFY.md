# ✅ Railway Setup Verification Guide

## 🔍 Verify Your Railway Configuration

Follow these steps to ensure everything is configured correctly:

---

## Step 1: Check Database Service

1. Go to your Railway project dashboard
2. You should see **TWO services**:
   - **Web Service** (your app)
   - **MySQL Database** (database)

3. **Verify MySQL is running:**
   - Click on MySQL service
   - Status should show: **"Active"** or **"Running"**
   - If not, wait 1-2 minutes for it to start

---

## Step 2: Verify Database Reference

1. Click on your **Web Service** (not the database)
2. Go to **"Variables"** tab
3. **Check for these variables:**
   - ✅ `MYSQL_HOST` (should have a value like `containers-us-west-xxx.railway.app`)
   - ✅ `MYSQL_PORT` (should be `3306`)
   - ✅ `MYSQL_DATABASE` (should have a database name)
   - ✅ `MYSQL_USER` (should have a username)
   - ✅ `MYSQL_PASSWORD` (should have a password)

4. **If any are missing:**
   - Click **"Add Reference"** button
   - Select your **MySQL** database
   - Railway will automatically add all variables

---

## Step 3: Verify Profile Setting

1. In **"Variables"** tab of web service
2. **Check for:** `SPRING_PROFILES_ACTIVE`
3. **Value should be:** `prod`

4. **If not present:**
   - Click **"New Variable"**
   - Name: `SPRING_PROFILES_ACTIVE`
   - Value: `prod`
   - Click **"Add"**

---

## Step 4: Check Deployment Logs

1. Click on your **Web Service**
2. Go to **"Deployments"** tab
3. Click on the **latest deployment**
4. **Check logs for:**
   - ✅ "Started SweetShopApplication" (success)
   - ❌ "Connection refused" (database issue)
   - ❌ "Communications link failure" (connection issue)

---

## Step 5: Verify Code is Updated

The fix has been pushed to GitHub. Railway should auto-deploy.

**Check:**
1. Go to **"Deployments"** tab
2. Latest deployment should show: **"Deploying"** or **"Deployed"**
3. If it's still using old code, trigger a new deployment:
   - Go to **"Settings"** → **"Redeploy"**

---

## 🔧 Common Issues & Fixes

### Issue 1: Database Variables Missing

**Symptom:** Connection refused error

**Fix:**
1. Go to Web Service → Variables
2. Click "Add Reference"
3. Select MySQL database
4. Redeploy

---

### Issue 2: Database Not Ready

**Symptom:** Connection timeout

**Fix:**
1. Wait 2-3 minutes after adding database
2. Verify database status is "Active"
3. Redeploy web service

---

### Issue 3: Wrong Profile

**Symptom:** Using default H2 instead of MySQL

**Fix:**
1. Add variable: `SPRING_PROFILES_ACTIVE=prod`
2. Redeploy

---

### Issue 4: Port Conflict

**Symptom:** Port already in use

**Fix:**
1. Railway uses `PORT` environment variable
2. Don't set a fixed port
3. Let Railway assign it automatically

---

## ✅ Success Indicators

When everything is working, you'll see:

1. **Deployment Status:** "Deployed successfully"
2. **Logs:** "Started SweetShopApplication in X.XXX seconds"
3. **No Errors:** No connection refused or timeout errors
4. **Live URL:** Your app is accessible

---

## 🎯 Quick Checklist

- [ ] MySQL database service exists and is "Active"
- [ ] All MYSQL_* variables are present in web service
- [ ] `SPRING_PROFILES_ACTIVE=prod` is set
- [ ] Latest code is deployed (check commit hash)
- [ ] Deployment logs show "Started SweetShopApplication"
- [ ] No connection errors in logs
- [ ] Live URL is accessible

---

## 🚀 After Verification

Once everything is verified:
1. Your app should be live
2. Database should be connected
3. All features should work

**Visit your Railway URL and test the application!**

---

**Need help? Check the logs in Railway dashboard for specific error messages.**

