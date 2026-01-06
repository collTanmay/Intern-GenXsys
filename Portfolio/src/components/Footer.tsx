import { Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`py-8 px-4 border-t ${
      darkMode ? 'bg-gray-900 border-gray-800' : 'bg-[#FFF5ED] border-orange-200'
    }`}>
      <div className="max-w-6xl mx-auto text-center">
        <p className={`flex items-center justify-center gap-2 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Tanmay Shete
        </p>
        <p className={`text-sm mt-2 ${
          darkMode ? 'text-gray-500' : 'text-gray-500'
        }`}>
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}
