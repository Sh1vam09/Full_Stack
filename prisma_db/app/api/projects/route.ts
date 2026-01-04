import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Import from our new helper

// GET: Fetch all projects from DB
export async function GET() {
  try {
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching projects" },
      { status: 500 },
    );
  }
}

// POST: Create a new project in DB
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const newProject = await prisma.project.create({
      data: {
        title: body.title,
        description: body.description,
      },
    });

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating project" },
      { status: 500 },
    );
  }
}
