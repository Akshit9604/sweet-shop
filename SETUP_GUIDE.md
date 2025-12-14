# 🚀 Complete Setup Guide - Sweet Shop Management System

## Quick Start (5 Minutes)

### Step 1: Backend Setup

```bash
# Navigate to project root
cd sweet-shop

# Build and run backend
mvn spring-boot:run
```

Backend will start on **http://localhost:8081**

### Step 2: Frontend Setup (New Terminal)

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start frontend
npm run dev
```

Frontend will start on **http://localhost:3000**

### Step 3: Access Application

1. Open browser: **http://localhost:3000**
2. Register a new user (or login if exists)
3. Start using the application!

---

## Detailed Setup

### Prerequisites Check

```bash
# Check Java version (should be 17+)
java -version

# Check Maven version
mvn -version

# Check Node.js version (should be 18+)
node -v
npm -v
```

### Backend Configuration

#### Option 1: H2 Database (Default - No Setup)

The application uses H2 in-memory database by default. No configuration needed!

#### Option 2: MySQL Database

1. **Install MySQL** (if not installed)
2. **Update `src/main/resources/application.properties`:**

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/sweetshop
spring.datasource.username=root
spring.datasource.password=your_password
```

3. **Run with MySQL profile:**
```bash
mvn spring-boot:run -Dspring-boot.run.profiles=mysql
```

### Frontend Configuration

The frontend is configured to proxy API requests to `http://localhost:8081`.

If your backend runs on a different port, update `frontend/vite.config.js`:

```javascript
proxy: {
  '/api': {
    target: 'http://localhost:YOUR_PORT',
    changeOrigin: true
  }
}
```

---

## Testing

### Backend Tests

```bash
# Run all tests
mvn test

# Run specific test class
mvn test -Dtest=SweetServiceTest

# Run with coverage
mvn test jacoco:report
```

### Frontend Tests (if added)

```bash
cd frontend
npm test
```

---

## Creating Test Users

### Via API

```bash
# Register Admin User
curl -X POST http://localhost:8081/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123","role":"ADMIN"}'

# Register Regular User
curl -X POST http://localhost:8081/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"user","password":"user123","role":"USER"}'
```

### Via Frontend

1. Go to http://localhost:3000/register
2. Fill in the form
3. Select role (USER or ADMIN)
4. Click Register

---

## Adding Sample Data

### Via API (After Login)

```bash
# Get JWT token first
TOKEN=$(curl -X POST http://localhost:8081/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}' | jq -r '.token')

# Add a sweet
curl -X POST http://localhost:8081/api/sweets \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "name": "Chocolate Bar",
    "category": "Chocolate",
    "price": 2.50,
    "quantity": 100
  }'
```

### Via Frontend

1. Login as ADMIN user
2. Go to Admin Panel
3. Click "Add New Sweet"
4. Fill in the form and submit

---

## Troubleshooting

### Backend Won't Start

**Port 8081 already in use:**
```bash
# Find process using port 8081
netstat -ano | findstr :8081

# Kill the process (Windows)
taskkill /PID <PID> /F
```

**Database connection error:**
- Check MySQL is running
- Verify credentials in `application.properties`
- Try H2 database instead (default)

### Frontend Won't Start

**Port 3000 already in use:**
```bash
# Change port in vite.config.js
server: {
  port: 3001  // Change to available port
}
```

**API connection error:**
- Ensure backend is running on port 8081
- Check proxy configuration in `vite.config.js`
- Verify CORS settings (if needed)

### Authentication Issues

**JWT token expired:**
- Tokens expire after 24 hours (default)
- Simply login again

**403 Forbidden:**
- Check user role (some endpoints require ADMIN)
- Verify JWT token is included in request headers

---

## Development Tips

### Hot Reload

**Backend:**
- Spring Boot DevTools enables hot reload
- Changes to Java files require restart

**Frontend:**
- Vite provides instant hot reload
- Changes appear immediately

### Database Reset

**H2 Database:**
- Restart application to reset

**MySQL:**
```sql
DROP DATABASE sweetshop;
CREATE DATABASE sweetshop;
```

---

## Production Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for production deployment instructions.

---

## Next Steps

1. ✅ Backend running on port 8081
2. ✅ Frontend running on port 3000
3. ✅ Register/Login working
4. ✅ Add some sweets via Admin Panel
5. ✅ Test purchase functionality
6. ✅ Explore all features!

---

**Need Help?** Check the main [README.md](README.md) or open an issue.

