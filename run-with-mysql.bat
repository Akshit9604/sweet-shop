@echo off
REM MySQL Setup Script for Windows
echo ========================================
echo Sweet Shop - MySQL Setup
echo ========================================
echo.

REM Check if environment variables are set
if "%DB_USERNAME%"=="" (
    echo MySQL username not set. Setting default: root
    set DB_USERNAME=root
)

if "%DB_PASSWORD%"=="" (
    echo.
    echo WARNING: MySQL password not set!
    echo Please set your MySQL password:
    echo   set DB_PASSWORD=your_mysql_password
    echo.
    echo Or set both username and password:
    echo   set DB_USERNAME=root
    echo   set DB_PASSWORD=your_password
    echo.
    echo Press any key to continue with default (root/root)...
    pause >nul
    set DB_PASSWORD=root
)

echo.
echo Starting application with MySQL...
echo Username: %DB_USERNAME%
echo.
echo ========================================
echo.

mvn spring-boot:run -Dspring-boot.run.profiles=mysql


