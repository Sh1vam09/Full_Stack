import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Project from "@/models/Project";

// GET: Get all projects
export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find({}).sort({ createdAt: -1 }); // Newest first
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 },
    );
  }
}

// POST: Create a new project
export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();

    const newProject = await Project.create(body);

    return NextResponse.json(
      { message: "Project created", project: newProject },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 },
    );
  }
}
