@echo off
echo.
echo ========================================
echo    GIRLFRIEND WEBSITE DEPLOYMENT
echo ========================================
echo.

echo Step 1: Opening GitHub to create repository...
start https://github.com/new

echo.
echo Please create a new repository with these settings:
echo - Repository name: girlfriend-website
echo - Make it Public
echo - Don't initialize with README
echo - Click "Create repository"
echo.

pause

echo.
echo Step 2: Pushing code to GitHub...
echo Please copy the repository URL from GitHub and run:
echo git remote add origin https://github.com/sybscit59/girlfriend-website.git
echo git branch -M main
echo git push -u origin main
echo.

set /p repo_url="Enter the repository URL from GitHub: "
git remote add origin %repo_url%
git branch -M main
git push -u origin main

echo.
echo Step 3: Opening Vercel for deployment...
start https://vercel.com

echo.
echo Please follow these steps on Vercel:
echo 1. Sign up/Login with GitHub
echo 2. Click "New Project"
echo 3. Import your girlfriend-website repository
echo 4. Click "Deploy"
echo.

echo Your website will be live at: https://girlfriend-website.vercel.app
echo Share this URL with Priyanshi! ^_^
echo.

pause 