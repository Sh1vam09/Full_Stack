# Experiment 7: NextAuth.js Authentication

## Description
This experiment demonstrates Google and GitHub authentication using NextAuth.js.

## Setup
```bash
npm install

# Create .env.local with:
# NEXTAUTH_URL=http://localhost:3000
# NEXTAUTH_SECRET=your-secret-key-here
# GOOGLE_CLIENT_ID=your-google-client-id
# GOOGLE_CLIENT_SECRET=your-google-client-secret
# GITHUB_ID=your-github-client-id
# GITHUB_SECRET=your-github-client-secret

npm run dev
```

## OAuth Setup

### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`

### GitHub OAuth
1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Create a new OAuth App
3. Set Authorization callback URL: `http://localhost:3000/api/auth/callback/github`

## Features
- Google OAuth authentication
- GitHub OAuth authentication
- Protected routes
- Session management
- Custom sign-in page
