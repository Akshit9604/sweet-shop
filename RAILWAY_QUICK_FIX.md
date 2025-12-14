# ⚡ Railway Quick Fix - Database Connection

## 🚨 Your Deployment is Failing Because:

**The database reference is not added to your web service!**

---

## ✅ Fix in 3 Steps (2 Minutes)

### Step 1: Add Database Reference

1. Go to Railway dashboard
2. Click your **Web Service** (not database)
3. Go to **"Variables"** tab
4. Click **"Add Reference"** button
5. Select your **MySQL database**
6. ✅ Railway auto-adds all connection variables!

### Step 2: Set Profile

1. Still in **"Variables"** tab
2. Click **"New Variable"**
3. **Name:** `SPRING_PROFILES_ACTIVE`
4. **Value:** `railway`
5. Click **"Add"**

### Step 3: Wait for Redeploy

- Railway auto-redeploys when you add variables
- Wait 3-5 minutes
- Check logs for: `Started SweetShopApplication`

---

## ✅ That's It!

Your app should now work!

**Visit:** `https://your-app-name.up.railway.app`

---

## 🔍 If Still Failing

**Check:**
1. MySQL service is "Active" (not "Starting")
2. All 5 MYSQL_* variables exist in Variables tab
3. Wait 2-3 minutes for database to initialize

**See [RAILWAY_FIX_INSTRUCTIONS.md](RAILWAY_FIX_INSTRUCTIONS.md) for detailed steps.**

