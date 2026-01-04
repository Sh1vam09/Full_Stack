import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Project from "@/models/Project";

// GET: Get single project details
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();
    const { id } = await params;

    const project = await Project.findById(id);
    if (!project)
      return NextResponse.json({ error: "Project not found" }, { status: 404 });

    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching project" },
      { status: 500 },
    );
  }
}

// PUT: Update a project
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await req.json();

    const updatedProject = await Project.findByIdAndUpdate(id, body, {
      new: true, // Return the new updated version
      runValidators: true,
    });

    if (!updatedProject)
      return NextResponse.json({ error: "Project not found" }, { status: 404 });

    return NextResponse.json(updatedProject);
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating project" },
      { status: 500 },
    );
  }
}

// DELETE: Remove a project
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();
    const { id } = await params;

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject)
      return NextResponse.json({ error: "Project not found" }, { status: 404 });

    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting project" },
      { status: 500 },
    );
  }
}
