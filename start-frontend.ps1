Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Starting Sweet Shop Frontend Server" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Set-Location frontend

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
}

Write-Host "Starting Vite development server..." -ForegroundColor Green
Write-Host ""

npm run dev


