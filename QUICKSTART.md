# Quick Start Guide

## Run Immediately (No MySQL Setup Required)

Use H2 in-memory database - works out of the box:

```bash
mvn spring-boot:run -Dspring-boot.run.profiles=h2
```

The application will start on **http://localhost:8081**

## Test the Registration Endpoint

Once running, test with:

```bash
curl -X POST http://localhost:8081/api/auth/register -H "Content-Type: application/json" -d "{\"username\":\"testuser\",\"password\":\"testpass123\",\"role\":\"USER\"}"
```

Or use Postman:
- **URL:** `POST http://localhost:8081/api/auth/register`
- **Body:**
```json
{
  "username": "testuser",
  "password": "testpass123",
  "role": "USER"
}
```

## Run with MySQL

If you have MySQL running:

1. Update `src/main/resources/application.properties` with your MySQL credentials
2. Or set environment variables:
   ```bash
   # Windows PowerShell
   $env:DB_USERNAME="your_username"
   $env:DB_PASSWORD="your_password"
   
   # Then run:
   mvn spring-boot:run
   ```

## H2 Database Console (when using H2 profile)

Access H2 console at: http://localhost:8081/h2-console
- JDBC URL: `jdbc:h2:mem:sweetshop`
- Username: `sa`
- Password: (leave empty)


