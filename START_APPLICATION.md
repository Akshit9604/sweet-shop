# 🚀 How to Start the Application

## Quick Start (Windows)

**Double-click:** `START_APPLICATION.bat`

This will automatically:
1. Start the backend server
2. Wait for it to initialize
3. Start the frontend server

## Manual Start

### Step 1: Start Backend

Open a terminal and run:
```bash
mvn spring-boot:run
```

Wait for: `Started SweetShopApplication` message

### Step 2: Start Frontend

Open a **new terminal** and run:
```bash
cd frontend
npm run dev
```

Wait for: `Local: http://localhost:3000` message

## Access the Application

1. Open your browser
2. Go to: **http://localhost:3000**
3. Register a new user or login

## Troubleshooting

### Backend won't start?

1. **Check if port 8081 is free:**
   ```powershell
   netstat -ano | findstr :8081
   ```

2. **Kill process using port 8081:**
   ```powershell
   # Find the PID from above, then:
   Stop-Process -Id <PID> -Force
   ```

3. **Check Java version:**
   ```bash
   java -version
   ```
   Should be Java 17+

4. **Try compiling first:**
   ```bash
   mvn clean compile
   ```

### Frontend won't start?

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Check Node.js version:**
   ```bash
   node -v
   ```
   Should be Node 18+

3. **Clear cache and reinstall:**
   ```bash
   cd frontend
   rm -rf node_modules
   npm install
   ```

### Application not responding?

1. **Check backend is running:**
   ```bash
   curl http://localhost:8081/api/auth/ping
   ```
   Should return: `OK`

2. **Check frontend is running:**
   - Visit: http://localhost:3000
   - Should see login page

3. **Check browser console:**
   - Press F12
   - Look for errors in Console tab

## Verification

### Backend Health Check
```bash
curl http://localhost:8081/api/auth/ping
```
Expected: `OK`

### Test Registration
```bash
curl -X POST http://localhost:8081/api/auth/register -H "Content-Type: application/json" -d "{\"username\":\"test\",\"password\":\"test123\",\"role\":\"USER\"}"
```

## Default Ports

- **Backend:** http://localhost:8081
- **Frontend:** http://localhost:3000

## Need Help?

Check the application logs in the terminal windows where you started the servers.
