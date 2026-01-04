export default function ProjectsPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">My Projects</h1>
      <p>Here is a list of my work:</p>
      {/* We will make these links clickable later */}
      <ul className="list-disc ml-5 mt-4">
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </div>
  );
}
