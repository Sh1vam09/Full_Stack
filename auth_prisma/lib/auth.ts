import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@/lib/prisma"; // Use the helper we created earlier

export const auth = betterAuth({
  // Tell Better Auth to use Prisma
  database: prismaAdapter(prisma, {
    provider: "sqlite", // Change this to "postgresql" if you switch DBs later
  }),

  // Social Providers (Same as before)
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
});
