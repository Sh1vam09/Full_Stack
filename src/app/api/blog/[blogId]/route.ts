// app/api/blogs/[blogId]/route.ts
import blogs from '../../data';

import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { blogId: string } }
) {
  const blogId = params.blogId;
  const blog = blogs.find(b => b.id === blogId);

  if (!blog) {
    return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
  }

  return NextResponse.json(blog);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { blogId: string } }
) {
  const blogId = params.blogId;
  const blogIndex = blogs.findIndex(b => b.id === blogId);

  if (blogIndex === -1) {
    return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
  }

  const { title, content } = await request.json();
  const updatedBlog = { ...blogs[blogIndex], title, content };
  blogs[blogIndex] = updatedBlog;

  return NextResponse.json(updatedBlog);
}

export async function DELETE(
  request: Request,
  { params }: { params: { blogId: string } }
) {
  const blogId = params.blogId;
  const blogIndex = blogs.findIndex(b => b.id === blogId);

  if (blogIndex === -1) {
    return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
  }

  // Use splice() to remove the item, which mutates the original array
  blogs.splice(blogIndex, 1);

  return new NextResponse(null, { status: 204 });
}