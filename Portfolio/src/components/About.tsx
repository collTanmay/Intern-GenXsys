import { Code, Database, Server, Layers } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const interests = [
    { icon: Code, text: 'Full Stack Development' },
    { icon: Server, text: 'Backend Systems' },
    { icon: Database, text: 'Cloud & Databases' },
    { icon: Layers, text: 'DSA & Problem Solving' },
  ];

  return (
    <section
      id="about"
      className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-[#FFF5ED]'}`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          About <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Me</span>
        </h2>

        <div className={`p-6 sm:p-8 rounded-2xl mb-8 ${
          darkMode ? 'bg-gray-800' : 'bg-[#FFECD9]'
        }`}>
          <p className={`text-base sm:text-lg leading-relaxed mb-4 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            I am a passionate <strong>Full Stack Developer</strong> and <strong>Data Structures & Algorithms (DSA)</strong> problem solver,
            currently pursuing Computer Engineering. I enjoy transforming complex problems into clean, efficient, and scalable solutions.
          </p>
          <p className={`text-base sm:text-lg leading-relaxed mb-4 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            I have hands-on experience in building full-stack web applications using modern technologies such as
            JavaScript, React, Node.js, Express, MongoDB, and SQL. My strong problem-solving mindset, developed
            through continuous DSA practice, helps me write optimized code and think critically.
          </p>
          <p className={`text-base sm:text-lg leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            I value <strong>teamwork</strong>, <strong>adaptability</strong>, and <strong>continuous learning</strong>,
            and I am always excited to explore new technologies, contribute to impactful projects, and grow within the IT and Software industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {interests.map((interest, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition-all transform hover:scale-105 ${
                darkMode
                  ? 'bg-gray-800 hover:bg-gray-750'
                  : 'bg-white hover:bg-orange-50 shadow-md'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-lg ${
                  darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  <interest.icon size={24} />
                </div>
                <span className={`font-medium ${
                  darkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  {interest.text}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-8 p-6 rounded-xl border-2 border-dashed ${
          darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-orange-200 bg-[#FFECD9]'
        }`}>
          <div className="flex items-start gap-3">
            <span className="text-2xl">📍</span>
            <div>
              <h3 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Location
              </h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                Kalyan Rural, Maharashtra, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
