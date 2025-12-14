# Deployment Guide - Make Your Application Live

This guide will help you deploy your Spring Boot application to various cloud platforms.

## Quick Deploy Options

### 🚀 Option 1: Railway (Easiest - Recommended)

**Railway** is the easiest platform to deploy Spring Boot apps.

#### Steps:

1. **Sign up** at [railway.app](https://railway.app)

2. **Create New Project:**
   - Click "New Project"
   - Select "Deploy from GitHub repo" (connect your GitHub)
   - OR select "Empty Project" and connect later

3. **Add Database:**
   - Click "New" → "Database" → "Add MySQL"
   - Railway will create a MySQL database automatically

4. **Deploy Application:**
   - Click "New" → "GitHub Repo" (or upload code)
   - Select your repository
   - Railway will auto-detect the Dockerfile

5. **Set Environment Variables:**
   - Go to your service → Variables
   - Add:
     ```
     SPRING_PROFILES_ACTIVE=prod
     DATABASE_URL=<from MySQL service>
     DB_USERNAME=<from MySQL service>
     DB_PASSWORD=<from MySQL service>
     PORT=8081
     ```

6. **Deploy:**
   - Railway will automatically build and deploy
   - Your app will be live at: `https://your-app-name.up.railway.app`

**Cost:** Free tier available, then pay-as-you-go

---

### 🌐 Option 2: Render

**Render** offers free tier with automatic deployments.

#### Steps:

1. **Sign up** at [render.com](https://render.com)

2. **Create New Web Service:**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

3. **Configure:**
   - **Name:** sweet-shop
   - **Environment:** Java
   - **Build Command:** `mvn clean package -DskipTests`
   - **Start Command:** `java -jar target/*.jar`
   - **Plan:** Free (or paid)

4. **Add Database:**
   - Click "New +" → "PostgreSQL" (or MySQL)
   - Render will provide connection string

5. **Set Environment Variables:**
   ```
   SPRING_PROFILES_ACTIVE=prod
   DATABASE_URL=<from database>
   DB_USERNAME=<from database>
   DB_PASSWORD=<from database>
   PORT=8081
   ```

6. **Deploy:**
   - Click "Create Web Service"
   - Render will build and deploy automatically
   - Your app will be live at: `https://sweet-shop.onrender.com`

**Cost:** Free tier available (spins down after inactivity)

---

### 🐳 Option 3: Docker (Any Platform)

Deploy using Docker to any platform that supports it.

#### Build Docker Image:

```bash
docker build -t sweet-shop:latest .
```

#### Run Locally:

```bash
docker run -p 8081:8081 \
  -e SPRING_PROFILES_ACTIVE=prod \
  -e DATABASE_URL=jdbc:mysql://host:3306/sweetshop \
  -e DB_USERNAME=root \
  -e DB_PASSWORD=password \
  sweet-shop:latest
```

#### Push to Docker Hub:

```bash
docker tag sweet-shop:latest yourusername/sweet-shop:latest
docker push yourusername/sweet-shop:latest
```

Then deploy to:
- **Railway** (supports Docker)
- **Render** (supports Docker)
- **AWS ECS/Fargate**
- **Google Cloud Run**
- **Azure Container Instances**
- **DigitalOcean App Platform**

---

### ☁️ Option 4: Heroku

**Heroku** is a popular PaaS platform.

#### Steps:

1. **Install Heroku CLI:**
   ```bash
   # Windows
   # Download from: https://devcenter.heroku.com/articles/heroku-cli
   
   # macOS
   brew tap heroku/brew && brew install heroku
   ```

2. **Login:**
   ```bash
   heroku login
   ```

3. **Create App:**
   ```bash
   heroku create sweet-shop-app
   ```

4. **Add MySQL Database:**
   ```bash
   heroku addons:create cleardb:ignite
   # or
   heroku addons:create jawsdb:kitefin
   ```

5. **Set Environment Variables:**
   ```bash
   heroku config:set SPRING_PROFILES_ACTIVE=prod
   heroku config:set PORT=8081
   ```

6. **Deploy:**
   ```bash
   git push heroku main
   ```

**Cost:** Free tier discontinued, paid plans start at $7/month

---

### 🖥️ Option 5: VPS (DigitalOcean, AWS EC2, etc.)

Deploy to your own server.

#### Steps:

1. **Create VPS:**
   - DigitalOcean Droplet (Ubuntu 22.04)
   - AWS EC2 instance
   - Any Linux VPS

2. **Install Java & Maven:**
   ```bash
   sudo apt update
   sudo apt install openjdk-17-jdk maven -y
   ```

3. **Install MySQL:**
   ```bash
   sudo apt install mysql-server -y
   sudo mysql_secure_installation
   ```

4. **Clone & Build:**
   ```bash
   git clone <your-repo>
   cd sweet-shop
   mvn clean package -DskipTests
   ```

5. **Run as Service:**
   ```bash
   # Create systemd service
   sudo nano /etc/systemd/system/sweet-shop.service
   ```

   Add:
   ```ini
   [Unit]
   Description=Sweet Shop Application
   After=network.target mysql.service

   [Service]
   User=your-user
   WorkingDirectory=/path/to/sweet-shop
   ExecStart=/usr/bin/java -jar target/sweet-shop-0.0.1-SNAPSHOT.jar
   Restart=always

   [Install]
   WantedBy=multi-user.target
   ```

6. **Start Service:**
   ```bash
   sudo systemctl enable sweet-shop
   sudo systemctl start sweet-shop
   ```

7. **Configure Nginx (Reverse Proxy):**
   ```bash
   sudo apt install nginx -y
   sudo nano /etc/nginx/sites-available/sweet-shop
   ```

   Add:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:8081;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
       }
   }
   ```

   Enable:
   ```bash
   sudo ln -s /etc/nginx/sites-available/sweet-shop /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

---

## Environment Variables for Production

Set these in your hosting platform:

```bash
SPRING_PROFILES_ACTIVE=prod
PORT=8081
DATABASE_URL=jdbc:mysql://host:port/database
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

## Pre-Deployment Checklist

- [ ] Application builds successfully: `mvn clean package`
- [ ] Tests pass: `mvn test`
- [ ] Database credentials configured
- [ ] Environment variables set
- [ ] Security settings reviewed (CSRF, CORS if needed)
- [ ] Logging configured
- [ ] Health check endpoint working (`/api/auth/ping`)

## Post-Deployment

### Test Your Live Application:

```bash
# Health check
curl https://your-app-url.com/api/auth/ping

# Register user
curl -X POST https://your-app-url.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"testpass","role":"USER"}'
```

### Monitor Your Application:

- Check application logs
- Monitor database connections
- Set up error tracking (optional: Sentry, LogRocket)
- Monitor uptime (UptimeRobot, Pingdom)

## Troubleshooting

### Application Won't Start:
- Check logs: `heroku logs --tail` or platform logs
- Verify environment variables
- Check database connectivity
- Verify port configuration

### Database Connection Issues:
- Verify database credentials
- Check database is accessible from hosting platform
- Verify connection string format
- Check firewall/security groups

### 502 Bad Gateway:
- Application might not be running
- Check if port matches platform requirements
- Verify reverse proxy configuration

## Recommended Platforms by Use Case

- **Quick Start:** Railway or Render
- **Free Tier:** Render (with limitations)
- **Production:** Railway, AWS, or VPS
- **Enterprise:** AWS, Azure, GCP

## Next Steps

1. Choose a platform
2. Follow platform-specific steps above
3. Deploy your application
4. Test endpoints
5. Share your live URL!

---

**Need Help?** Check platform-specific documentation or create an issue in the repository.


