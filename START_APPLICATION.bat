@echo off
echo ========================================
echo Starting Sweet Shop Management System
echo ========================================
echo.

echo [1/2] Starting Backend Server...
start "Backend Server" cmd /k "mvn spring-boot:run"

echo Waiting for backend to start...
timeout /t 30 /nobreak >nul

echo [2/2] Starting Frontend...
cd frontend
start "Frontend Server" cmd /k "npm run dev"

echo.
echo ========================================
echo Application Starting!
echo ========================================
echo.
echo Backend: http://localhost:8081
echo Frontend: http://localhost:3000
echo.
echo Press any key to exit this window...
pause >nul


