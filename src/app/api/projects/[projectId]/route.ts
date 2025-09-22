import Link from "next/link";

type Project = {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  githubLink: string;
  demoLink: string;
};

export default async function Projects() {
  const res = await fetch('http://localhost:3000/api/projects', { cache: 'no-store' });
  const projects: Project[] = await res.json();

  return (
    <div>
      <section className="text-gray-400 body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">My Projects</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Here are some of the projects I've worked on.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <div className="lg:w-1/3 sm:w-1/2 p-4" key={project.id}>
                <div className="flex relative">
                  <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={project.coverImage} />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-primary mb-1">{project.title}</h2>
                    <p className="leading-relaxed">{project.description}</p>
                    <div className="mt-4">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-primary inline-flex items-center">GitHub
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-primary inline-flex items-center ml-4">Watch Demo
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}