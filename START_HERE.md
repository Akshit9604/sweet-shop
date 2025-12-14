# 🚀 START HERE - Sweet Shop Management System

## ✅ Application is Ready to Start!

Follow these **simple steps** to get everything running:

---

## 📋 Step-by-Step Instructions

### Step 1: Start Backend (Terminal 1)

**Option A: Using PowerShell Script**
```powershell
.\start-backend.ps1
```

**Option B: Manual Command**
```bash
mvn spring-boot:run
```

**Wait for:** `Started SweetShopApplication` message (takes ~30 seconds)

**✅ Backend will be at:** http://localhost:8081

---

### Step 2: Start Frontend (Terminal 2 - NEW TERMINAL)

**Open a NEW terminal window!**

**Option A: Using PowerShell Script**
```powershell
.\start-frontend.ps1
```

**Option B: Manual Command**
```bash
cd frontend
npm install  # First time only
npm run dev
```

**Wait for:** `Local: http://localhost:3000` message

**✅ Frontend will be at:** http://localhost:3000

---

### Step 3: Open in Browser

1. Open your web browser
2. Go to: **http://localhost:3000**
3. You should see the **Login/Register page**!

---

## 🎯 Quick Test

### Test Backend:
```bash
curl http://localhost:8081/api/auth/ping
```
Should return: `OK`

### Test Frontend:
- Visit: http://localhost:3000
- Should see beautiful login page

---

## ⚠️ Important Notes

1. **Keep both terminals open** while using the app
2. **Backend must start first** (wait 30 seconds)
3. **Use separate terminals** for backend and frontend
4. **Don't close the terminals** - they're running the servers

---

## 🐛 If Something Doesn't Work

### Backend Not Starting?

1. **Check if port 8081 is free:**
   ```powershell
   netstat -ano | findstr :8081
   ```

2. **Kill process if needed:**
   ```powershell
   Stop-Process -Id <PID> -Force
   ```

3. **Try again:**
   ```bash
   mvn spring-boot:run
   ```

### Frontend Not Starting?

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Check Node.js:**
   ```bash
   node -v
   ```
   Should be 18+

---

## ✅ Success Checklist

- [ ] Backend terminal shows "Started SweetShopApplication"
- [ ] Frontend terminal shows "Local: http://localhost:3000"
- [ ] Browser shows login page at http://localhost:3000
- [ ] Can register a new user
- [ ] Can login with credentials

---

## 🎉 You're All Set!

Once both servers are running:
- **Backend API:** http://localhost:8081
- **Frontend App:** http://localhost:3000

**Start using your Sweet Shop Management System!**

---

**Need help?** See [HOW_TO_START.md](HOW_TO_START.md) or [TROUBLESHOOTING.md](TROUBLESHOOTING.md)


