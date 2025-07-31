# Girlfriend Website Deployment Script
# This script will help you deploy your website to Vercel

Write-Host "🚀 Girlfriend Website Deployment Script" -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green

# Check if Git is configured
Write-Host "`n📋 Checking Git configuration..." -ForegroundColor Yellow
$gitUser = git config --global user.name
$gitEmail = git config --global user.email

if (-not $gitUser -or -not $gitEmail) {
    Write-Host "⚠️  Git not configured. Please run:" -ForegroundColor Red
    Write-Host "   git config --global user.name 'Your Name'" -ForegroundColor Cyan
    Write-Host "   git config --global user.email 'your.email@example.com'" -ForegroundColor Cyan
    exit 1
}

Write-Host "✅ Git configured: $gitUser ($gitEmail)" -ForegroundColor Green

# Check if all files are committed
Write-Host "`n📋 Checking Git status..." -ForegroundColor Yellow
$gitStatus = git status --porcelain

if ($gitStatus) {
    Write-Host "⚠️  Uncommitted changes found. Committing..." -ForegroundColor Yellow
    git add .
    git commit -m "Update website files"
    Write-Host "✅ Changes committed" -ForegroundColor Green
} else {
    Write-Host "✅ All changes committed" -ForegroundColor Green
}

# Instructions for GitHub and Vercel
Write-Host "`n🎯 Next Steps:" -ForegroundColor Green
Write-Host "=============" -ForegroundColor Green

Write-Host "`n1️⃣ Create GitHub Repository:" -ForegroundColor Cyan
Write-Host "   • Go to https://github.com/new" -ForegroundColor White
Write-Host "   • Repository name: girlfriend-website" -ForegroundColor White
Write-Host "   • Make it Public" -ForegroundColor White
Write-Host "   • Don't initialize with README" -ForegroundColor White
Write-Host "   • Click 'Create repository'" -ForegroundColor White

Write-Host "`n2️⃣ Push to GitHub:" -ForegroundColor Cyan
Write-Host "   • Copy the repository URL from GitHub" -ForegroundColor White
Write-Host "   • Run these commands:" -ForegroundColor White
Write-Host "     git remote add origin https://github.com/YOUR_USERNAME/girlfriend-website.git" -ForegroundColor Yellow
Write-Host "     git branch -M main" -ForegroundColor Yellow
Write-Host "     git push -u origin main" -ForegroundColor Yellow

Write-Host "`n3️⃣ Deploy on Vercel:" -ForegroundColor Cyan
Write-Host "   • Go to https://vercel.com" -ForegroundColor White
Write-Host "   • Sign up/Login with GitHub" -ForegroundColor White
Write-Host "   • Click 'New Project'" -ForegroundColor White
Write-Host "   • Import your girlfriend-website repository" -ForegroundColor White
Write-Host "   • Click 'Deploy'" -ForegroundColor White

Write-Host "`n4️⃣ Get Your Live URL:" -ForegroundColor Cyan
Write-Host "   • Vercel will give you a URL like: https://girlfriend-website.vercel.app" -ForegroundColor White
Write-Host "   • Share this URL with Priyanshi! 💕" -ForegroundColor White

Write-Host "`n🎉 Your website will be live and ready to share!" -ForegroundColor Green
Write-Host "💖 Priyanshi will love it! ✨" -ForegroundColor Magenta

# Wait for user input
Write-Host "`nPress any key to continue..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 