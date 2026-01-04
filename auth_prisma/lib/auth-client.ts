import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL, // http://localhost:3000
});

// Helper hook for easy usage in components
export const { useSession, signIn, signOut } = authClient;
