# PowerShell script to check MySQL status on Windows

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "MySQL Status Check" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if MySQL service is running
$mysqlServices = Get-Service | Where-Object {$_.Name -like "*mysql*"}

if ($mysqlServices) {
    Write-Host "MySQL Services Found:" -ForegroundColor Green
    foreach ($service in $mysqlServices) {
        $status = if ($service.Status -eq "Running") { "RUNNING" } else { "STOPPED" }
        $color = if ($service.Status -eq "Running") { "Green" } else { "Red" }
        Write-Host "  - $($service.Name): $status" -ForegroundColor $color
    }
    Write-Host ""
} else {
    Write-Host "No MySQL services found!" -ForegroundColor Red
    Write-Host "Please install MySQL first." -ForegroundColor Yellow
    Write-Host ""
    exit 1
}

# Check if MySQL is listening on port 3306
Write-Host "Checking port 3306..." -ForegroundColor Cyan
$portCheck = Test-NetConnection -ComputerName localhost -Port 3306 -WarningAction SilentlyContinue

if ($portCheck.TcpTestSucceeded) {
    Write-Host "  Port 3306: OPEN" -ForegroundColor Green
} else {
    Write-Host "  Port 3306: CLOSED or MySQL not running" -ForegroundColor Red
}

Write-Host ""
Write-Host "To test MySQL connection, run:" -ForegroundColor Yellow
Write-Host "  mysql -u root -p" -ForegroundColor White
Write-Host ""


