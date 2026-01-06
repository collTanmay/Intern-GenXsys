import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

export default function Experience({ darkMode }: ExperienceProps) {
  const experience = {
    title: 'Full Stack Web Development Trainee',
    company: 'Orivon Technologies',
    location: 'Maharashtra, India',
    duration: 'August 2025 – November 2025 (4 Months)',
    achievements: [
      'Completed Full Stack Web Development training',
      'Built end-to-end web applications',
      'Worked on frontend & backend development',
      'Developed REST APIs and authentication systems',
      'Implemented responsive UI/UX designs',
      'Used Git/GitHub for version control',
      'Learned industry-standard development practices',
    ],
  };

  const education = [
    {
      degree: 'Bachelor of Engineering (BE)',
      major: 'Information Technology',
      institution: "Vasantdada Patil Pratishthan's College of Engineering and Visual Arts (VPPCOEVA)",
      duration: 'September 2023 – June 2027',
      status: 'Pursuing',
    },
    {
      degree: 'Higher Secondary Education',
      major: 'Arts, Science and Commerce',
      institution: 'B. K. Birla College',
      duration: '2021 – 2023',
      status: 'Completed',
    },
  ];

  return (
    <section
      id="experience"
      className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-[#FFF5ED]'}`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Experience & <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Education</span>
        </h2>

        <div className={`p-6 sm:p-8 rounded-xl mb-12 ${
          darkMode ? 'bg-gray-800' : 'bg-[#FFECD9] shadow-md'
        }`}>
          <div className="flex items-start gap-4 mb-4">
            <div className={`p-3 rounded-lg ${
              darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
            }`}>
              <Briefcase size={24} />
            </div>
            <div className="flex-1">
              <h3 className={`text-xl font-bold mb-1 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {experience.title}
              </h3>
              <p className={`text-lg font-semibold mb-2 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {experience.company}
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className={`flex items-center gap-1 text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <Calendar size={16} />
                  {experience.duration}
                </span>
                <span className={`flex items-center gap-1 text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <MapPin size={16} />
                  {experience.location}
                </span>
              </div>
            </div>
          </div>
          <ul className="space-y-2 ml-4">
            {experience.achievements.map((achievement, idx) => (
              <li
                key={idx}
                className={`flex items-start gap-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>▹</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-[#FFECD9] shadow-md'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className={`text-xl font-bold mb-1 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {edu.degree}
                      </h3>
                      <p className={`font-semibold mb-1 ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {edu.major}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
                      edu.status === 'Pursuing'
                        ? darkMode
                          ? 'bg-green-900/30 text-green-400'
                          : 'bg-green-100 text-green-700'
                        : darkMode
                        ? 'bg-gray-700 text-gray-300'
                        : 'bg-gray-200 text-gray-700'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className={`mb-2 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {edu.institution}
                  </p>
                  <span className={`flex items-center gap-1 text-sm ${
                    darkMode ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    <Calendar size={16} />
                    {edu.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
