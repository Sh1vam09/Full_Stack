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
              <div className="p-4 md:w-1/3" key={project.id}>
                <div className="h-full border-2 border-gray-800 border-opacity-60 rounded-lg overflow-hidden">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={project.coverImage} alt="project cover" />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">PROJECT</h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">{project.title}</h1>
                    <p className="leading-relaxed mb-3">{project.description}</p>
                    <div className="flex items-center flex-wrap ">
                      <Link href={`/projects/${project.id}`} className="text-primary inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                      <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub</a>
                      </span>
                      <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Watch Demo</a>
                      </span>
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