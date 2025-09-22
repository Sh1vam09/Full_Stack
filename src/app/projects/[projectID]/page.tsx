import Link from "next/link";

type Project = {
   id: string;
   title: string;
   description: string;
   coverImage: string;
   githubLink: string;
   demoLink: string;
};

interface ProjectPageProps {
   params: {
      projectID: string;
   };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
   const { projectID } = params;
   const res = await fetch(`http://localhost:3000/api/projects/${projectID}`, { cache: 'no-store' });

   if (!res.ok) {
    if (res.status === 404) {
      return <div>Project not found.</div>;
    }
      return <div>An error occurred.</div>;
   }

   const project: Project = await res.json();

   // Extract YouTube video ID from link
   const videoId = project.demoLink.split('v=')[1];
   const embedUrl = `https://www.youtube.com/embed/${videoId}`;

   return (
      <div className="container px-5 py-24 mx-auto">
         <article className="prose lg:prose-xl text-white">
            <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">{project.title}</h1>
            <div className="rounded-lg h-96 overflow-hidden">
                <iframe
                    width="100%"
                    height="100%"
                    src={embedUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <p className="text-gray-400">{project.description}</p>
            <div className="mt-4">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-primary inline-flex items-center">
                GitHub
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <Link href={`/projects`} className="mt-4 inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Back to Projects</Link>
         </article>
      </div>
   );
}