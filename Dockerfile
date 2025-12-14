# Multi-stage build: Frontend + Backend
FROM node:18-alpine AS frontend-build
WORKDIR /app/frontend

# Copy frontend files
COPY frontend/package*.json ./
RUN npm install

COPY frontend/ ./
RUN npm run build

# Backend build stage
FROM maven:3.9-eclipse-temurin-17 AS backend-build
WORKDIR /app

# Copy pom.xml and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy source code
COPY src ./src

# Copy frontend build to static resources
COPY --from=frontend-build /app/frontend/dist ./src/main/resources/static

# Build backend
RUN mvn clean package -DskipTests

# Runtime stage
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Copy jar from build stage
COPY --from=backend-build /app/target/*.jar app.jar

# Expose port (use PORT env var for cloud platforms)
EXPOSE ${PORT:-8081}

# Run the application
ENTRYPOINT ["sh", "-c", "java -jar app.jar --server.port=${PORT:-8081}"]

