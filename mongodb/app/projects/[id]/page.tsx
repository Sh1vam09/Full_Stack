// We need to grab the 'params' to see what the ID is
export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // In Next.js 15+, params is a Promise, so we await it
  const { id } = await params;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Project Details</h1>
      <p className="text-xl mt-4">
        You are viewing project ID: <span className="text-blue-500">{id}</span>
      </p>
    </div>
  );
}
