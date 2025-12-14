# 🚀 Quick Start - Full System

## Complete Sweet Shop Management System

This guide will help you run the complete full-stack application.

## Prerequisites

- Java 17+
- Maven 3.6+
- Node.js 18+
- MySQL 8.0+ (optional - H2 works by default)

## Step 1: Start Backend

```bash
# Navigate to project root
cd sweet-shop

# Build and run backend
mvn spring-boot:run
```

Backend will start on **http://localhost:8081**

## Step 2: Start Frontend

```bash
# Open new terminal
cd frontend

# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

Frontend will start on **http://localhost:3000**

## Step 3: Access Application

1. Open browser: **http://localhost:3000**
2. Register a new user (or login if exists)
3. Start using the application!

## Default Test Users

### Regular User
- Username: `user`
- Password: `password123`
- Role: `USER`

### Admin User
- Username: `admin`
- Password: `admin123`
- Role: `ADMIN`

## Features to Test

### As Regular User:
1. ✅ View all sweets
2. ✅ Search sweets (by name, category, price)
3. ✅ Purchase sweets
4. ✅ See out-of-stock items disabled

### As Admin:
1. ✅ All user features +
2. ✅ Add new sweets
3. ✅ Edit existing sweets
4. ✅ Delete sweets
5. ✅ Restock inventory

## API Testing

### Register User
```bash
curl -X POST http://localhost:8081/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"test123","role":"USER"}'
```

### Login
```bash
curl -X POST http://localhost:8081/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"test123"}'
```

### Get Sweets (with token)
```bash
curl http://localhost:8081/api/sweets \
  -H "Authorization: Bearer <your-token>"
```

## Troubleshooting

### Backend won't start
- Check if port 8081 is available
- Verify Java 17 is installed
- Check application logs

### Frontend won't start
- Run `npm install` first
- Check Node.js version (18+)
- Clear node_modules and reinstall

### API calls fail
- Ensure backend is running
- Check CORS configuration
- Verify JWT token is valid

## Production Build

### Backend
```bash
mvn clean package
java -jar target/sweet-shop-0.0.1-SNAPSHOT.jar
```

### Frontend
```bash
cd frontend
npm run build
# Serve dist/ folder with any static server
```

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment instructions.

---

**Enjoy your Sweet Shop Management System! 🍬**


