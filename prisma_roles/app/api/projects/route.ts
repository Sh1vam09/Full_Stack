import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";       // Import auth
import { headers } from "next/headers";  // Import headers

// GET: Fetch all projects (Public or User - allowed for everyone based on your request)
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

// POST: Create a new project (ADMIN ONLY)
export async function POST(request: Request) {
  // 1. Check Auth
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // 2. Verify Admin Role
  if (session?.user?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

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