import Container from "@/components/Containers";
import Link from "next/link";
import { prisma } from "@/lib/prisma"; // 1. Import your DB helper

// 2. This line forces the page to reload data every time you visit it
// (Useful so you see your Prisma Studio updates immediately)
export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  // 3. Fetch the data directly from the Database
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc", // Newest projects first
    },
  });

  return (
    <Container>
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <span className="text-gray-500 text-sm">
          {projects.length} Projects found
        </span>
      </div>

      {/* 4. If no projects exist, show a message */}
      {projects.length === 0 && (
        <p className="text-gray-500">
          No projects found. Add some in Prisma Studio!
        </p>
      )}

      {/* 5. Loop through the real data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 border rounded-lg hover:shadow-lg transition bg-white"
          >
            <h2 className="text-xl font-medium title-font mb-2 text-gray-900">
              {project.title}
            </h2>
            <p className="leading-relaxed text-base mb-4 text-gray-600">
              {project.description}
            </p>
            <Link
              href={`/projects/${project.id}`}
              className="text-indigo-500 inline-flex items-center hover:underline"
            >
              View Details
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}
