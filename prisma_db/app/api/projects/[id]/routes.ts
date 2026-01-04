import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// PUT: Update a project by ID
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
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

// DELETE: Remove a project by ID
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
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
