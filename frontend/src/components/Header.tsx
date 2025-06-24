import React, { useState } from 'react';
import { MoonIcon, SunIcon, MenuIcon, XIcon } from 'lucide-react';
interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}
const Header: React.FC<HeaderProps> = ({
  theme,
  toggleTheme
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className={`sticky top-0 z-50 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">
            <span className="text-blue-600">Tashen</span> Weerasinghe
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <a href="#home" className="hover:text-blue-600 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-blue-600 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#education" className="hover:text-blue-600 transition-colors">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-blue-600 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-blue-600 transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-600 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <button onClick={toggleTheme} className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-yellow-300' : 'bg-gray-100 text-gray-700'}`} aria-label="Toggle theme">
              {theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleTheme} className={`p-2 rounded-full mr-2 ${theme === 'dark' ? 'bg-gray-700 text-yellow-300' : 'bg-gray-100 text-gray-700'}`} aria-label="Toggle theme">
              {theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
            </button>
            <button onClick={toggleMenu} className={`p-2 rounded-md ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`} aria-label="Toggle menu">
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="#home" className="block hover:text-blue-600 transition-colors" onClick={toggleMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="block hover:text-blue-600 transition-colors" onClick={toggleMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#education" className="block hover:text-blue-600 transition-colors" onClick={toggleMenu}>
                  Education
                </a>
              </li>
              <li>
                <a href="#projects" className="block hover:text-blue-600 transition-colors" onClick={toggleMenu}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="block hover:text-blue-600 transition-colors" onClick={toggleMenu}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="block hover:text-blue-600 transition-colors" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>}
      </div>
    </header>;
};
export default Header;