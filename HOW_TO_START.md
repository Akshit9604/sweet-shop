# ✅ How to Start the Application - Step by Step

## 🚀 Quick Start Guide

### Option 1: Use the Batch File (Easiest - Windows)

**Double-click:** `START_APPLICATION.bat`

This will automatically start both backend and frontend!

---

### Option 2: Manual Start (Recommended for Troubleshooting)

#### Step 1: Start Backend Server

1. **Open a terminal/command prompt**
2. **Navigate to project folder:**
   ```bash
   cd C:\Users\akshi\OneDrive\Desktop\sweet-shop
   ```

3. **Start the backend:**
   ```bash
   mvn spring-boot:run
   ```

4. **Wait for this message:**
   ```
   Started SweetShopApplication in X.XXX seconds
   ```

5. **Keep this terminal open!** (Don't close it)

#### Step 2: Start Frontend Server

1. **Open a NEW terminal/command prompt**
2. **Navigate to frontend folder:**
   ```bash
   cd C:\Users\akshi\OneDrive\Desktop\sweet-shop\frontend
   ```

3. **Start the frontend:**
   ```bash
   npm run dev
   ```

4. **Wait for this message:**
   ```
   Local:   http://localhost:3000
   ```

5. **Keep this terminal open too!**

#### Step 3: Open in Browser

1. **Open your web browser**
2. **Go to:** http://localhost:3000
3. **You should see the login page!**

---

## ✅ Verify It's Working

### Check Backend:
```bash
curl http://localhost:8081/api/auth/ping
```
Should return: `OK`

### Check Frontend:
- Open: http://localhost:3000
- Should see login/register page

---

## 🎯 What You Should See

### Backend Terminal:
```
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/

 :: Spring Boot ::                (v3.5.8)

Started SweetShopApplication in X.XXX seconds
```

### Frontend Terminal:
```
  VITE v5.0.8  ready in XXX ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

---

## 🐛 If It's Not Starting

### Backend Issues:

1. **Port 8081 already in use:**
   ```powershell
   # Find what's using it
   netstat -ano | findstr :8081
   # Kill it (replace <PID> with actual number)
   Stop-Process -Id <PID> -Force
   ```

2. **Java not found:**
   - Install Java 17+
   - Check: `java -version`

3. **Maven not found:**
   - Install Maven 3.6+
   - Check: `mvn -version`

### Frontend Issues:

1. **Dependencies not installed:**
   ```bash
   cd frontend
   npm install
   ```

2. **Node.js not found:**
   - Install Node.js 18+
   - Check: `node -v`

3. **Port 3000 already in use:**
   - Close other applications using port 3000
   - Or change port in `frontend/vite.config.js`

---

## 📋 Checklist

Before starting, make sure:
- [ ] Java 17+ installed
- [ ] Maven 3.6+ installed
- [ ] Node.js 18+ installed
- [ ] Port 8081 is free
- [ ] Port 3000 is free

---

## 🎉 Success!

Once both are running:
1. ✅ Backend: http://localhost:8081 (API)
2. ✅ Frontend: http://localhost:3000 (Web App)

**Open http://localhost:3000 in your browser and start using the application!**

---

## 💡 Tips

- **Keep both terminals open** while using the app
- **Backend must start first** before frontend
- **Wait 30 seconds** after starting backend before testing
- **Check terminal output** for any error messages

---

**Need more help?** See [TROUBLESHOOTING.md](TROUBLESHOOTING.md)


