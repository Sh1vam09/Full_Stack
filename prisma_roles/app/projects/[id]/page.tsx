import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth"; // Import Auth
import { headers } from "next/headers";

// PUT: Update a project (Protected)
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    // 1. Security Check: Must be Admin
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    // 2. Update Logic
    const { id } = await params;
    const body = await request.json();

    const updatedProject = await prisma.project.update({
      where: { id: id },
      data: {
        title: body.title,
        description: body.description,
      },
    });

    return NextResponse.json(updatedProject);
  } catch (error) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }
}

// DELETE: Remove a project (Protected)
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    // 1. Security Check: Must be Admin
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    // 2. Delete Logic
    const { id } = await params;

    await prisma.project.delete({
      where: { id: id },
    });

    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting project" },
      { status: 500 },
    );
  }
}
