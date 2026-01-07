# Experiments Status

## ✅ All Experiments 1-5 Are Now Running!

Five separate PowerShell windows should have opened, each running one experiment.

### Access URLs

**Note:** By default, all experiments try to use port 3000. Only one can run on port 3000 at a time. Here's how to access them:

1. **Experiment 1** - Multi-Page App with Dynamic Routes
   - URL: http://localhost:3000
   - Check the PowerShell window for the actual port if 3000 is busy

2. **Experiment 2** - Responsive Web Design with Tailwind CSS
   - URL: http://localhost:3000 (or next available port)
   - Check the PowerShell window for the actual port

3. **Experiment 3** - Reusable Layout Component
   - URL: http://localhost:3000 (or next available port)
   - Check the PowerShell window for the actual port

4. **Experiment 4** - API Routes with CRUD Operations
   - URL: http://localhost:3000 (or next available port)
   - Check the PowerShell window for the actual port

5. **Experiment 5** - Prisma ORM Integration
   - URL: http://localhost:3000 (or next available port)
   - Database: SQLite (dev.db) is ready
   - Check the PowerShell window for the actual port

### To Run Experiments on Different Ports

If you want to run multiple experiments simultaneously, you can modify the port:

1. Stop the current server (Ctrl+C in the PowerShell window)
2. Run with a custom port:
   ```bash
   PORT=3001 npm run dev
   ```
   Or on Windows PowerShell:
   ```powershell
   $env:PORT=3001; npm run dev
   ```

### What to Test

**Experiment 1:**
- Navigate to http://localhost:3000
- Try the links: About, Products, Blog
- Test dynamic routes: /products/1, /blog/first-post

**Experiment 2:**
- View responsive design
- Resize browser window to see responsive behavior
- Check Tailwind CSS styling

**Experiment 3:**
- See consistent layout across pages
- Navigate between Home, About, Contact
- Notice shared header and footer

**Experiment 4:**
- Test CRUD operations
- Create, Read, Update, Delete users
- Check API endpoints in browser dev tools

**Experiment 5:**
- Test Prisma CRUD operations
- Create users with Prisma ORM
- Database is SQLite (file-based, no setup needed)

### Stopping the Servers

To stop any experiment:
1. Go to its PowerShell window
2. Press `Ctrl+C`
3. The server will stop

### Troubleshooting

- **Port already in use:** Only one server can use port 3000. Stop others or use different ports
- **Module not found:** Make sure `npm install` completed successfully
- **Database errors (exp5):** Prisma migrations have been run, database should be ready

All experiments are ready to use! 🚀
