import Container from "@/components/Containers";
import Link from "next/link";
import clientPromise from "@/lib/mongodb"; // Direct MongoDB access
import DeleteButton from "@/components/DeleteButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  // 1. Fetch data (Native MongoDB)
  const client = await clientPromise;
  const db = client.db();
  
  const rawProjects = await db
    .collection("projects")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  // Map _id to id for the UI
  const projects = rawProjects.map((p) => ({
    ...p,
    id: p._id.toString(),
  }));

  // 2. Check Real Session
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const isAdmin = session?.user?.role === "admin";

  return (
    <Container>
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">My Projects</h1>
        {isAdmin && (
          <Link
            href="/admin"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
          >
            + Add New
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.length === 0 ? (
          <p className="text-gray-500 col-span-3 text-center">
            No projects found.
          </p>
        ) : (
          projects.map((project: any) => (
            <div
              key={project.id}
              className="border rounded-lg bg-white shadow-sm hover:shadow-md transition flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h2>
                  {isAdmin && <DeleteButton projectId={project.id} />}
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>
              <div className="p-4 bg-gray-50 border-t mt-auto">
                <Link
                  href={`/projects/${project.id}`}
                  className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </Container>
  );
}