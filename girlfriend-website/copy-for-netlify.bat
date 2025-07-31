@echo off
echo Creating folder for Netlify deployment...
mkdir netlify-deploy
echo Copying HTML files...
copy *.html netlify-deploy\
echo Copying CSS files...
copy *.css netlify-deploy\
echo Copying JavaScript files...
copy *.js netlify-deploy\
echo Copying images folder...
xcopy images netlify-deploy\images\ /E /I /Y
echo Copying song folder...
xcopy song netlify-deploy\song\ /E /I /Y
echo.
echo ✅ All files copied to 'netlify-deploy' folder!
echo.
echo 🚀 Now go to https://app.netlify.com/drop
echo 📁 Drag the 'netlify-deploy' folder to deploy!
echo.
pause 