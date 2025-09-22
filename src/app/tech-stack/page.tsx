import {
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaDatabase, FaCode, FaSpider 
} from 'react-icons/fa';
import { SiCplusplus, SiNumpy, SiPandas, SiScikitlearn, SiTensorflow, SiKeras, SiPytorch, SiSelenium } from 'react-icons/si';
import { GrGraphQl } from 'react-icons/gr';

const languages = [
  { name: 'Python', icon: <FaPython size={40} /> },
  { name: 'Java', icon: <FaJava size={40} /> },
  { name: 'C++', icon: <SiCplusplus size={40} /> },
  { name: 'HTML/CSS', icon: <div className="flex items-center"><FaHtml5 size={40} /><FaCss3Alt size={40} /></div> },
  { name: 'SQL', icon: <FaDatabase size={40} /> },
];

const technologies = [
  { name: 'Numpy', icon: <SiNumpy size={40} /> },
  { name: 'Pandas', icon: <SiPandas size={40} /> },
  { name: 'Matplotlib', icon: <GrGraphQl size={40} /> }, 
  { name: 'Seaborn', icon: <GrGraphQl size={40} /> },
  { name: 'Scikit-learn', icon: <SiScikitlearn size={40} /> },
  { name: 'TensorFlow', icon: <SiTensorflow size={40} /> },
  { name: 'Keras', icon: <SiKeras size={40} /> },
  { name: 'PyTorch', icon: <SiPytorch size={40} /> },
  { name: 'XGBoost', icon: <FaCode size={40} /> },      
  { name: 'FastAPI', icon: <FaCode size={40} /> },      
  { name: 'BeautifulSoup', icon:<FaSpider size={40}/> },               
  { name: 'Selenium', icon: <SiSelenium size={40} /> },
];

export default function TechStack() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">My Tech Stack</h1>
        <p className="mx-auto mt-4 max-w-xl text-[var(--muted-foreground)]">
          The languages, frameworks, and technologies I use to build my projects.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Languages</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {languages.map((lang) => (
            <div key={lang.name} className="flex flex-col items-center p-6 rounded-lg bg-[var(--card-background)] border border-[var(--border-color)] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-[var(--accent-blue)] mb-4">
                {lang.icon || <div className="w-10 h-10"></div>}
              </div>
              <h3 className="text-lg font-semibold">{lang.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Technologies & Frameworks</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center p-6 rounded-lg bg-[var(--card-background)] border border-[var(--border-color)] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-[var(--accent-purple)] mb-4">
                {tech.icon || <div className="w-10 h-10"></div>}
              </div>
              <h3 className="text-lg font-semibold">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
