// src/app/page.tsx
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  // Double check session on server side for safety
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth");
  }

  return (
    <main className="min-h-screen p-8 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-8">Secret Gallery 🔒</h1>
      <p className="mb-8">
        Welcome, {session.user.name}. You are authorized to see this.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* These images only show if logged in */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="h-40 bg-gray-700 rounded flex items-center justify-center">
            SECRET IMAGE 1
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="h-40 bg-gray-700 rounded flex items-center justify-center">
            SECRET IMAGE 2
          </div>
        </div>
      </div>
    </main>
  );
}
