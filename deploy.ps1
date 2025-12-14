# Quick Deployment Script for Sweet Shop
# This script helps you prepare for deployment

Write-Host "🚀 Sweet Shop Deployment Preparation" -ForegroundColor Cyan
Write-Host ""

# Check if git is initialized
if (-not (Test-Path .git)) {
    Write-Host "📦 Initializing Git repository..." -ForegroundColor Yellow
    git init
    Write-Host "✅ Git initialized" -ForegroundColor Green
} else {
    Write-Host "✅ Git repository already exists" -ForegroundColor Green
}

Write-Host ""
Write-Host "📝 Next Steps:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Add all files to git:" -ForegroundColor White
Write-Host "   git add ." -ForegroundColor Gray
Write-Host ""
Write-Host "2. Commit your code:" -ForegroundColor White
Write-Host "   git commit -m 'Ready for deployment'" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Create a repository on GitHub.com" -ForegroundColor White
Write-Host ""
Write-Host "4. Push to GitHub:" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/sweet-shop.git" -ForegroundColor Gray
Write-Host "   git branch -M main" -ForegroundColor Gray
Write-Host "   git push -u origin main" -ForegroundColor Gray
Write-Host ""
Write-Host "5. Deploy on Railway:" -ForegroundColor White
Write-Host "   - Go to railway.app" -ForegroundColor Gray
Write-Host "   - New Project → Deploy from GitHub repo" -ForegroundColor Gray
Write-Host "   - Select your repository" -ForegroundColor Gray
Write-Host ""
Write-Host "📚 See DEPLOY_STEPS.md for complete instructions" -ForegroundColor Cyan
Write-Host ""

