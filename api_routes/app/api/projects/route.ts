import { NextResponse } from "next/server";
import { projects, setProjects } from "@/lib/db";

// 3. PUT - Update a specific project
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }, // Params are async in Next.js 15
) {
  const { id } = await params;
  const body = await request.json();

  const projectIndex = projects.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }

  // Update the project
  projects[projectIndex] = {
    ...projects[projectIndex], // Keep existing data
    ...body, // Overwrite with new data
  };

  return NextResponse.json({
    message: "Project updated",
    project: projects[projectIndex],
  });
}

// 4. DELETE - Remove a specific project
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const projectIndex = projects.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }

  // Remove the project from the array
  const updatedProjects = projects.filter((p) => p.id !== id);
  setProjects(updatedProjects); // Update our DB

  return NextResponse.json({ message: "Project deleted successfully" });
}
