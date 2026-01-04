// This acts as a temporary database
export let projects = [
  { id: "1", title: "Project Alpha", description: "Built with Next.js" },
  { id: "2", title: "Project Beta", description: "E-commerce dashboard" },
];

// Helper to update the array (simulating a DB write)
export function setProjects(newProjects: typeof projects) {
  projects = newProjects;
}
