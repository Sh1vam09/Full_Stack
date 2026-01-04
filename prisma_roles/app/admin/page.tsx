import { auth } from "@/lib/auth"; // Import backend auth
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Container from "@/components/Containers";

export default async function AdminDashboard() {
  // 1. Get session on the server
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // 2. Security Check: Kick them out if not Admin
  if (!session || session.user.role !== "admin") {
    redirect("/"); // Send them back home
  }

  return (
    <Container>
      <div className="py-20">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Admin Dashboard
        </h1>
        <p className="text-gray-700">
          Welcome, {session.user.name}. Because your role is
          <span className="font-bold"> {session.user.role}</span>, you have full
          control here.
        </p>

        <div className="mt-8 p-6 bg-gray-100 rounded border">
          <h3 className="font-bold mb-2">Manage Content</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add New Project
          </button>
        </div>
      </div>
    </Container>
  );
}
