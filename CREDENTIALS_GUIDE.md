# 🔐 Credentials Guide

## What Username/Password Do You Need?

### 1. For Registering Users in the Application (Web Interface/API)

**You can use ANY username and password you want!**

The application is a **registration system** - you create new users with any credentials you choose.

**Examples:**
- Username: `john`
- Password: `mypassword123`
- Role: `USER` or `ADMIN`

**Try these:**
- Username: `testuser`, Password: `test123`
- Username: `admin`, Password: `admin123`
- Username: `demo`, Password: `demo123`

**There's no default login** - you register new users through the web interface or API.

---

### 2. For H2 Database Console (Current Setup)

Since you're using **H2 database** (default), you can view the database:

**Access:** http://localhost:8081/h2-console

**Credentials:**
- **JDBC URL:** `jdbc:h2:mem:sweetshop`
- **Username:** `sa`
- **Password:** (leave empty/blank)

---

### 3. For MySQL Database (If You Switch to MySQL)

If you want to use MySQL instead of H2, you'll need:

**Your MySQL Root Credentials:**
- **Username:** Usually `root`
- **Password:** The password you set when installing MySQL

**Common Defaults (if you forgot):**
- Username: `root`
- Password: `root` (common default)
- Password: (empty/blank) - some installations
- Password: `password` - another common default
- Password: `123456` - sometimes used

**To find your MySQL password:**
1. Check your MySQL installation notes
2. Try common defaults above
3. Or reset it if needed

**To test MySQL connection:**
```bash
mysql -u root -p
# Enter your password when prompted
```

---

### 4. For Railway/Cloud Deployment

When deploying to Railway or other platforms:

**No credentials needed for the app itself** - users register with their own credentials.

**Database credentials** are automatically provided by the platform:
- Railway auto-configures MySQL credentials
- You don't need to set them manually
- They're available as environment variables

---

## 🎯 Quick Answer

### For Testing the Application Right Now:

**Use any username/password you want!**

**Example:**
1. Open: http://localhost:8081
2. Enter:
   - Username: `myuser`
   - Password: `mypassword123`
   - Role: `USER`
3. Click "Register"

**That's it!** No default credentials needed.

---

## 📝 Summary

| What | Username | Password | Notes |
|------|----------|----------|-------|
| **Application Registration** | Any you want | Any you want | Create new users |
| **H2 Console** | `sa` | (empty) | Current database |
| **MySQL (if using)** | `root` | Your MySQL password | If you switch to MySQL |
| **Railway/Cloud** | Auto-configured | Auto-configured | Platform handles it |

---

## 🧪 Test Credentials

Try registering these users:

```json
{
  "username": "testuser",
  "password": "test123",
  "role": "USER"
}
```

```json
{
  "username": "admin",
  "password": "admin123",
  "role": "ADMIN"
}
```

```json
{
  "username": "demo",
  "password": "demo123",
  "role": "USER"
}
```

All of these will work! There's no "default" user - you create them as you go.

---

## ❓ Which One Do You Need?

- **To register a user?** → Use any username/password you want
- **To access H2 database?** → Username: `sa`, Password: (empty)
- **To configure MySQL?** → Your MySQL root password
- **For cloud deployment?** → Auto-configured by platform

**Most likely you need:** Just pick any username and password to test registration! 🎉


