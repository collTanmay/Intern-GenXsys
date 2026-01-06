interface SkillsProps {
  darkMode: boolean;
}

export default function Skills({ darkMode }: SkillsProps) {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', level: 100 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React.js', level: 75 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 70 },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', level: 70 },
        { name: 'SQL', level: 65 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 80 },
        { name: 'DSA', level: 70 },
        { name: 'REST APIs', level: 75 },
        { name: 'Authentication', level: 65 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-[#FFECD9]'}`}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Technical <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl ${
                darkMode ? 'bg-gray-900' : 'bg-white shadow-md'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-6 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className={`font-medium ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${
                        darkMode ? 'text-gray-500' : 'text-gray-500'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${
                      darkMode ? 'bg-gray-800' : 'bg-gray-200'
                    }`}>
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          darkMode
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                            : 'bg-gradient-to-r from-blue-500 to-blue-600'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 p-6 rounded-xl text-center ${
          darkMode ? 'bg-gray-900' : 'bg-white shadow-md'
        }`}>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            💡 <strong>Always learning</strong> and exploring new technologies to stay updated with industry trends
          </p>
        </div>
      </div>
    </section>
  );
}
