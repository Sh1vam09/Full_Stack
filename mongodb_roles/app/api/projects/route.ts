import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

// ... GET function (keep existing) ...

export async function POST(request: Request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
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
    return NextResponse.json(
      { error: "Error creating project" },
      { status: 500 }
    );
  }
}