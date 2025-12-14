# MySQL Setup Guide

## Prerequisites for MySQL

### 1. Install MySQL

**Windows:**
- Download MySQL Installer from: https://dev.mysql.com/downloads/installer/
- Run the installer and follow the setup wizard
- Remember the root password you set during installation!

**macOS:**
```bash
brew install mysql
brew services start mysql
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install mysql-server
sudo mysql_secure_installation
```

### 2. Verify MySQL Installation

Check if MySQL is running:

```bash
# Windows
# Check in Services (services.msc) for "MySQL80" or "MySQL"

# Linux/macOS
sudo systemctl status mysql
# or
mysql --version
```

### 3. Start MySQL Service

**Windows:**
- Open Services (Win + R, type `services.msc`)
- Find "MySQL80" or "MySQL"
- Right-click → Start (if not running)

**Linux/macOS:**
```bash
sudo systemctl start mysql
# or
sudo service mysql start
```

### 4. Test MySQL Connection

```bash
mysql -u root -p
# Enter your MySQL root password when prompted
```

If this works, you're ready to use MySQL!

### 5. Create Database (Optional)

The application will create the database automatically, but you can create it manually:

```sql
CREATE DATABASE IF NOT EXISTS sweetshop;
```

## Configuration

### Option 1: Update application-mysql.properties

Edit `src/main/resources/application-mysql.properties`:

```properties
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD
```

### Option 2: Use Environment Variables (Recommended)

**Windows PowerShell:**
```powershell
$env:DB_USERNAME="root"
$env:DB_PASSWORD="your_mysql_password"
```

**Windows CMD:**
```cmd
set DB_USERNAME=root
set DB_PASSWORD=your_mysql_password
```

**Linux/macOS:**
```bash
export DB_USERNAME=root
export DB_PASSWORD=your_mysql_password
```

### Option 3: Create application-local.properties

Create `src/main/resources/application-local.properties` (this file is gitignored):

```properties
spring.datasource.username=root
spring.datasource.password=your_actual_password
```

Then run:
```bash
mvn spring-boot:run -Dspring-boot.run.profiles=mysql,local
```

## Run with MySQL

```bash
mvn spring-boot:run -Dspring-boot.run.profiles=mysql
```

## Troubleshooting

### Error: "Access denied for user 'root'@'localhost'"

**Solution 1:** Check your password
- Make sure you're using the correct MySQL root password
- Try common defaults: `root`, empty, `password`, `123456`

**Solution 2:** Reset MySQL password
```sql
-- Connect to MySQL
mysql -u root -p

-- Then run:
ALTER USER 'root'@'localhost' IDENTIFIED BY 'newpassword';
FLUSH PRIVILEGES;
```

**Solution 3:** Create a new MySQL user
```sql
CREATE USER 'sweetshop'@'localhost' IDENTIFIED BY 'yourpassword';
GRANT ALL PRIVILEGES ON sweetshop.* TO 'sweetshop'@'localhost';
FLUSH PRIVILEGES;
```

Then use `sweetshop` as username in your config.

### Error: "Can't connect to MySQL server"

**Check:**
1. MySQL service is running
2. MySQL is listening on port 3306
3. Firewall allows connections to port 3306

**Windows:**
```powershell
# Check if MySQL is running
Get-Service | Where-Object {$_.Name -like "*mysql*"}
```

**Linux/macOS:**
```bash
sudo systemctl status mysql
# or
sudo service mysql status
```

### Error: "Unknown database 'sweetshop'"

The application should create it automatically. If not:
```sql
CREATE DATABASE sweetshop;
```

## MySQL Requirements Summary

✅ **Required:**
- MySQL Server 8.0 or higher installed
- MySQL service running
- Root password (or user credentials with database privileges)

✅ **Recommended:**
- MySQL Workbench (for database management)
- Port 3306 available (default MySQL port)

✅ **Optional:**
- MySQL Command Line Client
- phpMyAdmin (web-based MySQL management)


