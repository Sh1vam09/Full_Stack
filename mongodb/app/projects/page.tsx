import Container from "@/components/Containers"; // Fixed the typo here
import Link from "next/link";
import { connectDB } from "@/lib/db";
import Project from "@/models/Project";

// This line ensures the page rebuilds every time you visit it
// so you see new projects immediately.
export const dynamic = "force-dynamic";

async function getProjects() {
  try {
    await connectDB();
    // Fetch projects and sort by newest first (-1)
    const projects = await Project.find({}).sort({ createdAt: -1 });

    // Mongoose returns complex objects. We convert them to plain JSON
    // to avoid warnings in Next.js
    return JSON.parse(JSON.stringify(projects));
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <Container>
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">My Projects</h1>
        <span className="text-gray-500 text-sm">
          {projects.length} {projects.length === 1 ? "Project" : "Projects"}{" "}
          Found
        </span>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-lg">
          <p className="text-xl text-gray-500">No projects found yet.</p>
          <p className="text-gray-400 mt-2">
            Use Postman to add some data via POST /api/projects
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: any) => (
            <div
              key={project._id}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition bg-white"
            >
              <h2 className="text-xl font-medium title-font mb-2 text-gray-900">
                {project.title}
              </h2>
              <p className="leading-relaxed text-base mb-4 text-gray-600 line-clamp-3">
                {project.description}
              </p>

              <div className="flex items-center flex-wrap">
                <Link
                  href={`/projects/${project._id}`}
                  className="text-indigo-500 inline-flex items-center hover:underline md:mb-2 lg:mb-0"
                >
                  View Details
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>

                {project.link && (
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-600"
                    >
                      External Link
                    </a>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}
