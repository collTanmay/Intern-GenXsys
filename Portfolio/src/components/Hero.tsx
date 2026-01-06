import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full Stack & AI Developer';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center px-4 pt-16 ${
        darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-[#FFF8F3] via-[#FFF5ED] to-[#FFE8D6]'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center mb-8">
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <div className={`absolute inset-0 rounded-3xl ${
                darkMode
                  ? 'bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500'
                  : 'bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-400'
              } blur-3xl opacity-50 animate-pulse`} />

              <div className={`relative w-full h-full rounded-3xl overflow-hidden border-4 ${
                darkMode ? 'border-blue-500' : 'border-blue-400'
              } shadow-2xl flex items-center justify-center ${
                darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-white to-blue-50'
              }`}>
                <div className="text-center p-8">
                  <div className={`text-9xl mb-4 animate-bounce ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    💼
                  </div>
                  <p className={`text-sm font-bold tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    PROFESSIONAL DEVELOPER
                  </p>
                  <p className={`text-xs mt-3 font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Add your professional photo
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left order-1 md:order-2">
            <div className={`inline-block mb-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${
              darkMode ? 'bg-blue-900/40 text-blue-300 border border-blue-500/50' : 'bg-blue-100 text-blue-700 border border-blue-300'
            }`}>
              👋 Welcome to my portfolio
            </div>

            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Hi, I'm <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Tanmay Shete</span>
            </h1>

            <div className="h-16 sm:h-20 mb-8">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {typedText}
                <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>|</span>
              </h2>
            </div>

            <p className={`text-lg sm:text-xl font-semibold mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              TypeScript & PHP (Beginner) | DSA Enthusiast
            </p>

            <p className={`text-base sm:text-lg mb-10 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Passionate about building scalable end-to-end systems
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
              <a
                href="mailto:vu4f2324045@pvppcoe.ac.in"
                className={`inline-flex items-center gap-2 px-7 py-3 rounded-lg font-bold transition-all ${
                  darkMode
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                } transform hover:scale-105 active:scale-95`}
              >
                <Mail size={20} />
                Get in Touch
              </a>
              <button
                onClick={() => scrollToSection('projects')}
                className={`inline-flex items-center gap-2 px-7 py-3 rounded-lg font-bold transition-all ${
                  darkMode
                    ? 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 shadow-lg'
                    : 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 shadow-lg'
                } transform hover:scale-105 active:scale-95`}
              >
                View Projects
              </button>
            </div>

            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://linkedin.com/in/tanmay-shete-249461321"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full transition-all transform hover:scale-110 ${
                  darkMode
                    ? 'bg-gray-700 text-blue-400 hover:bg-gray-600 shadow-lg'
                    : 'bg-white text-blue-600 hover:bg-gray-50 shadow-lg border border-gray-200'
                }`}
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full transition-all transform hover:scale-110 ${
                  darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg border border-gray-200'
                }`}
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:vu4f2324045@pvppcoe.ac.in"
                className={`p-4 rounded-full transition-all transform hover:scale-110 ${
                  darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg border border-gray-200'
                }`}
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => scrollToSection('about')}
            className={`mt-12 animate-bounce ${
              darkMode ? 'text-gray-500 hover:text-gray-400' : 'text-gray-400 hover:text-gray-500'
            } transition-colors`}
          >
            <ChevronDown size={36} />
          </button>
        </div>
      </div>
    </section>
  );
}
