# Project Requirements

## System Requirements

### Essential (Required to Run):
- ✅ **Java 17 or higher**
  - Check version: `java -version`
  - Download: [Oracle JDK](https://www.oracle.com/java/technologies/downloads/) or [OpenJDK](https://openjdk.org/)
  
- ✅ **Maven 3.6+**
  - Check version: `mvn -version`
  - Download: [Apache Maven](https://maven.apache.org/download.cgi)

### Database Options:

#### Option 1: H2 Database (Default - No Setup Required)
- ✅ **H2 Database** (included in dependencies)
- ✅ **No installation needed** - works immediately
- ✅ **In-memory database** - data resets on restart
- ✅ **Perfect for development and testing**

#### Option 2: MySQL Database (Production Ready)
- ✅ **MySQL 8.0 or higher**
  - Download: [MySQL Downloads](https://dev.mysql.com/downloads/)
  - Installation guides: [MYSQL_SETUP.md](MYSQL_SETUP.md)

- ✅ **MySQL Service Running**
  - Windows: Check Services (services.msc)
  - Linux: `sudo systemctl status mysql`
  - macOS: `brew services list | grep mysql`

- ✅ **MySQL Credentials**
  - Username: Usually `root`
  - Password: The password set during MySQL installation
  - Port: `3306` (default)

## Installation Checklist

### Step 1: Install Java
- [ ] Java 17+ installed
- [ ] `JAVA_HOME` environment variable set (optional but recommended)
- [ ] Verify: `java -version`

### Step 2: Install Maven
- [ ] Maven 3.6+ installed
- [ ] `MAVEN_HOME` or `M2_HOME` set (optional)
- [ ] Verify: `mvn -version`

### Step 3: Choose Database

**For H2 (Quick Start):**
- [ ] No additional setup needed
- [ ] Ready to run!

**For MySQL:**
- [ ] MySQL 8.0+ installed
- [ ] MySQL service running
- [ ] MySQL root password known
- [ ] Test connection: `mysql -u root -p`
- [ ] Configure credentials in `application-mysql.properties`

### Step 4: Verify Setup
```bash
# Check Java
java -version

# Check Maven
mvn -version

# Check MySQL (if using MySQL)
mysql --version
mysql -u root -p
```

## Quick Start Commands

### With H2 (Default):
```bash
mvn spring-boot:run
```

### With MySQL:
```bash
# Set credentials
$env:DB_USERNAME="root"
$env:DB_PASSWORD="your_password"

# Run
mvn spring-boot:run -Dspring-boot.run.profiles=mysql
```

## Platform-Specific Notes

### Windows:
- Use PowerShell or Command Prompt
- MySQL service name: Usually "MySQL80" or "MySQL"
- Check services: `services.msc`

### macOS:
- Use Terminal
- Install MySQL: `brew install mysql`
- Start MySQL: `brew services start mysql`

### Linux:
- Use Terminal
- Install MySQL: `sudo apt install mysql-server`
- Start MySQL: `sudo systemctl start mysql`
- Enable on boot: `sudo systemctl enable mysql`

## Troubleshooting

### Java Issues:
- **"java: command not found"**: Install Java and add to PATH
- **Wrong Java version**: Update JAVA_HOME or install Java 17+

### Maven Issues:
- **"mvn: command not found"**: Install Maven and add to PATH
- **Build failures**: Check internet connection (Maven downloads dependencies)

### MySQL Issues:
- **"Access denied"**: Check username/password in config
- **"Can't connect"**: Ensure MySQL service is running
- **Port 3306 in use**: Check if another MySQL instance is running

See [MYSQL_SETUP.md](MYSQL_SETUP.md) for detailed MySQL troubleshooting.

## Recommended Tools (Optional)

- **IDE**: IntelliJ IDEA, Eclipse, or VS Code
- **Database Client**: MySQL Workbench, DBeaver, or phpMyAdmin
- **API Testing**: Postman, Insomnia, or curl
- **Version Control**: Git

## Next Steps

1. ✅ Verify all requirements are met
2. ✅ Clone/download the project
3. ✅ Run `mvn clean install` to build
4. ✅ Start the application
5. ✅ Test the API endpoints

For detailed setup instructions, see:
- [README.md](README.md) - Main documentation
- [MYSQL_SETUP.md](MYSQL_SETUP.md) - MySQL setup guide
- [QUICKSTART.md](QUICKSTART.md) - Quick start guide


