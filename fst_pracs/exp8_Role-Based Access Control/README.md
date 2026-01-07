# Experiment 8: Role-Based Access Control

## Description
This experiment demonstrates role-based access control (RBAC) with Admin, User, and Guest roles, including secure session management.

## Features
- Three user roles: Admin, User, Guest
- Protected routes based on roles
- Secure session management
- API route protection
- Unauthorized access handling

## Setup
```bash
npm install
npm run dev
```

## Test Accounts
- **Admin:** admin@example.com / admin123
- **User:** user@example.com / user123
- **Guest:** guest@example.com / guest123

## Pages
- `/public` - Accessible to all authenticated users
- `/user` - Accessible to Users and Admins
- `/admin` - Accessible to Admins only
- `/unauthorized` - Shown when access is denied

## API Routes
- `/api/admin/example` - Admin-only API endpoint
