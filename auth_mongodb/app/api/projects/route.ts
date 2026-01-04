import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

// GET: Fetch all projects (Public)
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    
    const rawProjects = await db
      .collection("projects")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    const projects = rawProjects.map((p) => ({
      ...p,
      id: p._id.toString(),
    }));

    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching projects" }, { status: 500 });
  }
}

// POST: Create a new project (ANY LOGGED IN USER)
export async function POST(request: Request) {
  // 1. Check if user is logged in
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db();

    const newProject = {
      title: body.title,
      description: body.description,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection("projects").insertOne(newProject);

    return NextResponse.json(
      { ...newProject, id: result.insertedId.toString() },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Error creating project" }, { status: 500 });
  }
}