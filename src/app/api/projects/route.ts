import { NextRequest, NextResponse } from 'next/server';
import projects from '../data';

export async function GET() {
  return NextResponse.json(projects);
}

// POST: Create a new project
export async function POST(request: NextRequest) {
  const { title, description, coverImage, githubLink, demoLink } = await request.json();
  const newProject = {
    id: String(projects.length + 1), // Simple unique ID generation
    title,
    description,
    coverImage,
    githubLink,
    demoLink,
  };
  projects.push(newProject);

  return NextResponse.json(newProject, { status: 201 });
}