#!/bin/bash
# MySQL Setup Script for Linux/macOS

echo "========================================"
echo "Sweet Shop - MySQL Setup"
echo "========================================"
echo ""

# Check if environment variables are set
if [ -z "$DB_USERNAME" ]; then
    echo "MySQL username not set. Setting default: root"
    export DB_USERNAME=root
fi

if [ -z "$DB_PASSWORD" ]; then
    echo ""
    echo "WARNING: MySQL password not set!"
    echo "Please set your MySQL password:"
    echo "  export DB_PASSWORD=your_mysql_password"
    echo ""
    echo "Or set both username and password:"
    echo "  export DB_USERNAME=root"
    echo "  export DB_PASSWORD=your_password"
    echo ""
    read -p "Press Enter to continue with default (root/root) or Ctrl+C to cancel..."
    export DB_PASSWORD=root
fi

echo ""
echo "Starting application with MySQL..."
echo "Username: $DB_USERNAME"
echo ""
echo "========================================"
echo ""

mvn spring-boot:run -Dspring-boot.run.profiles=mysql


