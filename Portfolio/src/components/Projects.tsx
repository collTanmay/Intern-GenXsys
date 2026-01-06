import { ExternalLink, Github, Folder } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

export default function Projects({ darkMode }: ProjectsProps) {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management system with real-time updates, team workspaces, and deadline tracking.',
      tech: ['React', 'Express', 'SQL', 'REST API'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard displaying real-time weather data, forecasts, and location-based insights.',
      tech: ['JavaScript', 'REST API', 'CSS'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section
      id="projects"
      className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-[#FFECD9]'}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-4 text-center ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Featured <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Projects</span>
        </h2>
        <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Here are some of my recent works
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl transition-all transform hover:scale-105 ${
                darkMode
                  ? 'bg-gray-900 hover:bg-gray-850'
                  : 'bg-white hover:shadow-xl shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${
                  darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  <Folder size={24} />
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className={`transition-colors ${
                      darkMode
                        ? 'text-gray-400 hover:text-blue-400'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className={`transition-colors ${
                      darkMode
                        ? 'text-gray-400 hover:text-blue-400'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className={`text-xl font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {project.title}
              </h3>

              <p className={`text-sm mb-4 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      darkMode
                        ? 'bg-gray-800 text-gray-300'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 p-6 rounded-xl text-center border-2 border-dashed ${
          darkMode ? 'border-gray-700 bg-gray-900' : 'border-orange-200 bg-white'
        }`}>
          <p className={`text-lg mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            More projects coming soon!
          </p>
          <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            Currently working on exciting new projects to showcase here
          </p>
        </div>
      </div>
    </section>
  );
}
