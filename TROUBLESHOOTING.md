# 🔧 Troubleshooting Guide

## Application Not Starting

### Issue: Backend won't start

**Solution 1: Check Port Availability**
```powershell
netstat -ano | findstr :8081
```
If port is in use, kill the process:
```powershell
Stop-Process -Id <PID> -Force
```

**Solution 2: Check Java Installation**
```bash
java -version
```
Should show Java 17 or higher.

**Solution 3: Clean and Rebuild**
```bash
# Stop any running processes first
mvn clean
mvn compile
mvn spring-boot:run
```

**Solution 4: Check for Errors**
Look at the terminal output for:
- Port already in use
- Database connection errors
- Missing dependencies
- Compilation errors

### Issue: Frontend won't start

**Solution 1: Install Dependencies**
```bash
cd frontend
npm install
```

**Solution 2: Check Node.js**
```bash
node -v
```
Should be Node 18 or higher.

**Solution 3: Clear Cache**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

**Solution 4: Check Port 3000**
```powershell
netstat -ano | findstr :3000
```
If in use, kill the process or change port in `vite.config.js`.

### Issue: Can't Connect to Backend

**Check 1: Is Backend Running?**
```bash
curl http://localhost:8081/api/auth/ping
```
Should return: `OK`

**Check 2: CORS Issues**
- Backend should allow requests from http://localhost:3000
- Check SecurityConfig for CORS settings

**Check 3: Check Backend Logs**
Look for errors in the terminal where backend is running.

### Issue: Database Connection Errors

**For H2 (Default):**
- No setup needed, works automatically
- Check `application.properties` has H2 config

**For MySQL:**
- Ensure MySQL is running
- Check credentials in `application-mysql.properties`
- Test connection: `mysql -u root -p`

### Common Errors

**Error: "Port already in use"**
```powershell
# Find process
netstat -ano | findstr :8081
# Kill it
Stop-Process -Id <PID> -Force
```

**Error: "Cannot find module"**
```bash
cd frontend
npm install
```

**Error: "JWT token invalid"**
- Check token is being sent in Authorization header
- Verify token hasn't expired (24 hours default)
- Re-login to get new token

**Error: "Access denied"**
- Check user role (ADMIN required for some operations)
- Verify JWT token includes correct role

## Quick Fixes

### Restart Everything
1. Stop all running processes (Ctrl+C in terminals)
2. Kill any Java/Node processes:
   ```powershell
   Stop-Process -Name java -Force -ErrorAction SilentlyContinue
   Stop-Process -Name node -Force -ErrorAction SilentlyContinue
   ```
3. Start backend: `mvn spring-boot:run`
4. Start frontend: `cd frontend && npm run dev`

### Verify Installation
```bash
# Check Java
java -version

# Check Maven
mvn -version

# Check Node
node -v
npm -v
```

## Still Having Issues?

1. Check all terminal windows for error messages
2. Verify all prerequisites are installed
3. Try the manual start process step by step
4. Check the application logs


