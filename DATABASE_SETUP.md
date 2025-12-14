# Database Username & Password Guide

## Current Setup: H2 Database (No Configuration Needed)
The application is currently using **H2 in-memory database** which requires **NO username/password configuration**. It works immediately!

## If You Want to Use MySQL Instead:

### Step 1: Find Your MySQL Credentials

**Common MySQL Defaults:**
- Username: `root`
- Password: Usually one of these:
  - Empty/blank (no password)
  - `root`
  - `password`
  - `123456`
  - The password you set during MySQL installation

### Step 2: Update Configuration

**Option A: Edit `application-mysql.properties`**

Open `src/main/resources/application-mysql.properties` and update:

```properties
spring.datasource.username=root          # Your MySQL username
spring.datasource.password=yourpassword  # Your MySQL password
```

**Option B: Use Environment Variables (Recommended)**

```powershell
# Windows PowerShell
$env:DB_USERNAME="root"
$env:DB_PASSWORD="your_mysql_password"
```

Then run:
```bash
mvn spring-boot:run -Dspring-boot.run.profiles=mysql
```

### Step 3: How to Find Your MySQL Password

**If you forgot your MySQL password:**

1. **Check MySQL installation notes** - you might have written it down
2. **Check if MySQL has no password:**
   - Try leaving password empty: `spring.datasource.password=`
   - Or try common defaults: `root`, `password`, `123456`

3. **Reset MySQL password** (if needed):
   ```sql
   -- Connect to MySQL as root
   ALTER USER 'root'@'localhost' IDENTIFIED BY 'newpassword';
   ```

### Step 4: Test MySQL Connection

Before running the app, test if your credentials work:

```bash
# Using MySQL command line
mysql -u root -p
# Enter your password when prompted
```

If this works, use the same username and password in the config file.

## For API Registration Endpoint:

When calling the registration API, you can use **any username and password** you want:

```json
{
  "username": "any_username_you_want",
  "password": "any_password_you_want",
  "role": "USER"
}
```

**Examples:**
- `{"username":"john","password":"secret123","role":"USER"}`
- `{"username":"admin","password":"mypassword","role":"ADMIN"}`
- `{"username":"testuser","password":"testpass","role":"USER"}`

These are the credentials for **creating new user accounts** in your application, NOT database credentials.


