@echo off
echo ========================================
echo Running Next.js Experiments 1-5
echo ========================================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js found!
echo.

echo ========================================
echo Experiment 1: Multi-Page App
echo ========================================
cd exp1
echo Installing dependencies...
call npm install
if errorlevel 1 (
    echo Failed to install dependencies for exp1
    pause
    exit /b 1
)
echo Starting dev server...
start "Experiment 1" cmd /k "npm run dev"
cd ..
timeout /t 3 /nobreak >nul

echo ========================================
echo Experiment 2: Tailwind CSS
echo ========================================
cd exp2
echo Installing dependencies...
call npm install
if errorlevel 1 (
    echo Failed to install dependencies for exp2
    pause
    exit /b 1
)
echo Starting dev server...
start "Experiment 2" cmd /k "npm run dev"
cd ..
timeout /t 3 /nobreak >nul

echo ========================================
echo Experiment 3: Layout Component
echo ========================================
cd exp3
echo Installing dependencies...
call npm install
if errorlevel 1 (
    echo Failed to install dependencies for exp3
    pause
    exit /b 1
)
echo Starting dev server...
start "Experiment 3" cmd /k "npm run dev"
cd ..
timeout /t 3 /nobreak >nul

echo ========================================
echo Experiment 4: API Routes CRUD
echo ========================================
cd exp4
echo Installing dependencies...
call npm install
if errorlevel 1 (
    echo Failed to install dependencies for exp4
    pause
    exit /b 1
)
echo Starting dev server...
start "Experiment 4" cmd /k "npm run dev"
cd ..
timeout /t 3 /nobreak >nul

echo ========================================
echo Experiment 5: Prisma ORM
echo ========================================
cd exp5
echo Installing dependencies...
call npm install
if errorlevel 1 (
    echo Failed to install dependencies for exp5
    pause
    exit /b 1
)
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
echo Starting dev server...
start "Experiment 5" cmd /k "npm run dev"
cd ..

echo.
echo ========================================
echo All experiments are starting!
echo ========================================
echo.
echo Each experiment will open in a separate window.
echo They will run on port 3000 (you may need to change ports manually)
echo.
echo Press any key to exit this window (experiments will continue running)...
pause >nul
