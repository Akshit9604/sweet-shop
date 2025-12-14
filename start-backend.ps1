Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Starting Sweet Shop Backend Server" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if port is in use
$portCheck = netstat -ano | findstr :8081
if ($portCheck) {
    Write-Host "Port 8081 is already in use!" -ForegroundColor Yellow
    Write-Host "Stopping existing process..." -ForegroundColor Yellow
    $portCheck | ForEach-Object {
        if ($_ -match '\s+(\d+)\s*$') {
            $pid = $matches[1]
            Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
        }
    }
    Start-Sleep -Seconds 2
}

Write-Host "Starting Spring Boot application..." -ForegroundColor Green
Write-Host "This will take about 30 seconds..." -ForegroundColor Yellow
Write-Host ""

# Start the application
mvn spring-boot:run


