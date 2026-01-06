import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      darkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-[#FFF5ED]/95 border-orange-100'
    } backdrop-blur-sm border-b`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-xl font-bold transition-colors ${
              darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
            }`}
          >
            Tanmay Shete
          </button>

          <div className="hidden md:flex items-center gap-8">
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors ${
                  darkMode
                    ? 'text-gray-300 hover:text-blue-400'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all ${
                darkMode
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all ${
                darkMode
                  ? 'bg-gray-800 text-yellow-400'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 rounded-lg transition-all ${
                darkMode
                  ? 'bg-gray-800 text-gray-300'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left py-2 px-4 capitalize transition-colors ${
                  darkMode
                    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
