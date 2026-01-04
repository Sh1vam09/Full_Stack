import Container from "@/components/Containers";
import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { notFound } from "next/navigation";
import DeleteButton from "@/components/DeleteButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;

  if (!ObjectId.isValid(id)) {
    return notFound();
  }

  const client = await clientPromise;
  const db = client.db();

  const project = await db
    .collection("projects")
    .findOne({ _id: new ObjectId(id) });

  if (!project) {
    return notFound();
  }

  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const isAdmin = session?.user?.role === "admin";

  return (
    <Container>
      <div className="max-w-3xl mx-auto py-10">
        <Link
          href="/projects"
          className="text-indigo-600 hover:text-indigo-800 mb-6 inline-block font-medium"
        >
          ← Back to Projects
        </Link>

        <div className="bg-white rounded-lg shadow-sm border p-8">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
            {isAdmin && <DeleteButton projectId={id} />}
          </div>

          <div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
            {project.description}
          </div>

          <div className="mt-8 pt-6 border-t text-sm text-gray-500">
            <p>Created: {new Date(project.createdAt).toLocaleDateString()}</p>
            <p className="text-xs text-gray-400">ID: {id}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}