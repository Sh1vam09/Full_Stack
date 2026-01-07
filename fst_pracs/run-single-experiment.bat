@echo off
if "%1"=="" (
    echo Usage: run-single-experiment.bat [1-10]
    echo Example: run-single-experiment.bat 1
    exit /b 1
)

set EXP_NUM=%1

echo Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo.
echo ========================================
echo Running Experiment %EXP_NUM%
echo ========================================
echo.

cd exp%EXP_NUM%

if not exist "package.json" (
    echo ERROR: Experiment %EXP_NUM% not found!
    pause
    exit /b 1
)

echo Installing dependencies...
call npm install
if errorlevel 1 (
    echo Failed to install dependencies
    pause
    exit /b 1
)

if "%EXP_NUM%"=="5" (
    echo Generating Prisma Client...
    call npx prisma generate
    if errorlevel 1 (
        echo Failed to generate Prisma client
        pause
        exit /b 1
    )
    echo Running database migrations...
    call npx prisma migrate dev --name init
    if errorlevel 1 (
        echo Failed to run migrations
        pause
        exit /b 1
    )
)

if "%EXP_NUM%"=="6" (
    echo NOTE: Make sure MongoDB is running and MONGODB_URI is set in .env.local
)

echo.
echo Starting dev server...
echo Open http://localhost:3000 in your browser
echo Press Ctrl+C to stop the server
echo.
call npm run dev
