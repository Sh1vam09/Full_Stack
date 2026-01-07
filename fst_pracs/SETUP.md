# Setup Instructions

## Prerequisites

Before running the experiments, you need to install Node.js and npm:

1. **Install Node.js** (version 18 or higher):
   - Download from: https://nodejs.org/
   - Choose the LTS version
   - During installation, make sure to check "Add to PATH"

2. **Verify Installation**:
   ```bash
   node --version
   npm --version
   ```

## Running Experiments 1-5

### Option 1: Run Each Experiment Individually

Open separate terminal windows for each experiment:

**Experiment 1:**
```bash
cd fst_pracs/exp1
npm install
npm run dev
```
Then open http://localhost:3000

**Experiment 2:**
```bash
cd fst_pracs/exp2
npm install
npm run dev
```
Then open http://localhost:3001 (or stop exp1 first)

**Experiment 3:**
```bash
cd fst_pracs/exp3
npm install
npm run dev
```

**Experiment 4:**
```bash
cd fst_pracs/exp4
npm install
npm run dev
```

**Experiment 5:**
```bash
cd fst_pracs/exp5
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

### Option 2: Use the Batch Scripts

After installing Node.js, you can use the provided batch scripts (see run-experiments.bat)

## Notes

- Each experiment runs on port 3000 by default
- To run multiple experiments simultaneously, you'll need to change the port in each `package.json` or use different terminals
- Experiment 5 requires Prisma setup (database migrations)
- Make sure to install dependencies (`npm install`) in each experiment folder before running
