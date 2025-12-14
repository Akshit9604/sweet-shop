Write-Host "Testing Backend Connection..." -ForegroundColor Cyan
Write-Host ""

# Test 1: Health Check
Write-Host "Test 1: Health Check" -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:8081/api/auth/ping" -UseBasicParsing -TimeoutSec 5
    if ($response.Content -eq "OK") {
        Write-Host "✅ Backend is running!" -ForegroundColor Green
    } else {
        Write-Host "⚠️ Backend responded but with unexpected content" -ForegroundColor Yellow
    }
} catch {
    Write-Host "❌ Backend is not responding" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""

# Test 2: Register User
Write-Host "Test 2: Register User" -ForegroundColor Yellow
$registerBody = @{
    username = "testuser_$(Get-Date -Format 'HHmmss')"
    password = "test123"
    role = "USER"
} | ConvertTo-Json

try {
    $response = Invoke-WebRequest -Uri "http://localhost:8081/api/auth/register" -Method POST -Body $registerBody -ContentType "application/json" -UseBasicParsing -TimeoutSec 5
    Write-Host "✅ Registration successful!" -ForegroundColor Green
    Write-Host "Response: $($response.Content)" -ForegroundColor Gray
} catch {
    Write-Host "❌ Registration failed" -ForegroundColor Red
    if ($_.Exception.Response) {
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        $responseBody = $reader.ReadToEnd()
        Write-Host "Error: $responseBody" -ForegroundColor Red
    } else {
        Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Backend Status Check Complete!" -ForegroundColor Cyan


