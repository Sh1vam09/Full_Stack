"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/Containers";
import { authClient } from "@/lib/auth-client";

export default function CreateProjectPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const { data: session } = authClient.useSession();
  
  if (!session) {
     return (
       <Container>
         <div className="text-center py-20 text-red-500">
           Please sign in to create a project.
         </div>
       </Container>
     );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/projects");
        router.refresh();
      } else {
        const errorData = await res.json();
        setMessage(errorData.error || "Failed to create project");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="max-w-2xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Create New Project</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md border">
          {message && (
            <div className="p-3 mb-4 bg-red-100 text-red-700 rounded text-sm">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none transition"
                placeholder="e.g. My New Idea"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={4}
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none transition"
                placeholder="Describe your project..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 rounded-md text-white font-medium transition ${
                loading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {loading ? "Creating..." : "Create Project"}
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}