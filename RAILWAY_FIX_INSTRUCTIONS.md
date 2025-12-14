# 🔧 Railway Deployment Fix - Step by Step

## ❌ Problem

Your Railway deployment is failing with:
```
Communications link failure
Connection refused
```

This means the app can't connect to the MySQL database.

---

## ✅ Solution Steps

### Step 1: Verify Database is Added and Running

1. Go to your **Railway project dashboard**
2. You should see **TWO services**:
   - **Web Service** (your app - might be named "sweet-shop" or "web")
   - **MySQL Database** (database service)

3. **Check MySQL status:**
   - Click on the **MySQL service**
   - Status should show: **"Active"** or **"Running"**
   - If it shows "Starting" or "Pending", **wait 2-3 minutes** for it to fully start

---

### Step 2: Add Database Reference (CRITICAL!)

1. Click on your **Web Service** (NOT the database)
2. Go to **"Variables"** tab
3. **Check if these variables exist:**
   - `MYSQL_HOST`
   - `MYSQL_PORT`
   - `MYSQL_DATABASE`
   - `MYSQL_USER`
   - `MYSQL_PASSWORD`

4. **If they DON'T exist (most likely the problem!):**
   - Click the **"Add Reference"** button
   - Select your **MySQL database** from the dropdown
   - Railway will **automatically add** all 5 variables
   - This is the **most important step!**

---

### Step 3: Set Spring Profile

1. In the **"Variables"** tab of your web service
2. **Check for:** `SPRING_PROFILES_ACTIVE`
3. **If not present:**
   - Click **"New Variable"**
   - **Name:** `SPRING_PROFILES_ACTIVE`
   - **Value:** `railway` (or `prod`)
   - Click **"Add"**

---

### Step 4: Verify All Variables

After adding the database reference, you should have:

**Required Variables:**
- ✅ `SPRING_PROFILES_ACTIVE` = `railway` (or `prod`)
- ✅ `MYSQL_HOST` = (something like `containers-us-west-xxx.railway.app`)
- ✅ `MYSQL_PORT` = `3306`
- ✅ `MYSQL_DATABASE` = (database name)
- ✅ `MYSQL_USER` = (username)
- ✅ `MYSQL_PASSWORD` = (password - hidden)

**Optional:**
- `PORT` = `8081` (usually auto-set by Railway)

---

### Step 5: Push Updated Code

The code has been updated with better connection settings:

```bash
git add .
git commit -m "Fix Railway MySQL connection configuration"
git push origin main
```

Railway will **automatically redeploy** when you push.

---

### Step 6: Wait for Deployment

1. Go to **"Deployments"** tab in your web service
2. You'll see a new deployment starting
3. **Wait 3-5 minutes** for:
   - Build to complete
   - Database to be ready
   - App to start

---

### Step 7: Check Logs

1. Click on the **latest deployment**
2. Click **"View Logs"**
3. **Look for:**
   - ✅ `Started SweetShopApplication` = **SUCCESS!**
   - ❌ `Connection refused` = Database not connected
   - ❌ `Communications link failure` = Still connecting

---

## 🔍 Troubleshooting

### Still Getting "Connection refused"?

**Check 1: Database is Running**
- MySQL service status should be "Active"
- If not, wait 2-3 minutes

**Check 2: Variables are Set**
- All 5 MYSQL_* variables must exist
- They should have values (not empty)
- If missing, add database reference again

**Check 3: Database Reference**
- Make sure you added reference to the **correct** MySQL service
- There might be multiple databases - use the right one

**Check 4: Wait Time**
- Railway databases can take 1-2 minutes to initialize
- The app might start before database is ready
- Wait and check logs again

**Check 5: Profile Setting**
- `SPRING_PROFILES_ACTIVE` must be set to `railway` or `prod`
- Check in Variables tab

---

## ✅ Success Indicators

When it works, you'll see in logs:
```
Started SweetShopApplication in X.XXX seconds
```

And your app will be accessible at:
```
https://your-app-name.up.railway.app
```

---

## 🎯 Quick Checklist

- [ ] MySQL database service exists and is "Active"
- [ ] Database reference added to web service
- [ ] All 5 MYSQL_* variables are present
- [ ] SPRING_PROFILES_ACTIVE is set to `railway` or `prod`
- [ ] Code pushed to GitHub
- [ ] Deployment completed
- [ ] Logs show "Started SweetShopApplication"

---

## 💡 Pro Tips

1. **Always add database reference** - This is the #1 cause of failures
2. **Wait for database** - MySQL takes 1-2 minutes to initialize
3. **Check logs** - They tell you exactly what's wrong
4. **Use Railway profile** - Set `SPRING_PROFILES_ACTIVE=railway` for best results

---

**Follow these steps and your deployment will work!** 🚀

