import { NextRequest, NextResponse } from 'next/server';
import blogs from '../data';

export async function GET() {
  return NextResponse.json(blogs);
}

// POST: Create a new blog
export async function POST(request: NextRequest) {
  const { title, content } = await request.json();
  const newBlog = {
    id: String(blogs.length + 1), // Simple unique ID generation
    title,
    content,
  };
  blogs.push(newBlog);

  return NextResponse.json(newBlog, { status: 201 });
}