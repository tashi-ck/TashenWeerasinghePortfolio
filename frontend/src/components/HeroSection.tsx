import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, GithubIcon } from 'lucide-react';
const HeroSection: React.FC = () => {
  return <section id="home" className="py-20 md:py-32 flex flex-col items-center">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Tashen Weerasinghe
        </h1>
        <h2 className="text-xl md:text-2xl text-blue-600 font-medium mb-6">
          Aspiring Fullstack Engineering Intern
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
          <div className="flex items-center">
            <MapPinIcon size={18} className="mr-2 text-gray-500" />
            <span>Gampaha, Sri Lanka</span>
          </div>
          <div className="flex items-center">
            <MailIcon size={18} className="mr-2 text-gray-500" />
            <a href="mailto:chamikatashen33@gmail.com" className="hover:text-blue-600 transition-colors">
              chamikatashen33@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <PhoneIcon size={18} className="mr-2 text-gray-500" />
            <a href="tel:+94773363109" className="hover:text-blue-600 transition-colors">
              +94 773 363 109
            </a>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="https://linkedin.com/in/tashen-weerasinghe-6711aa347" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center transition-colors">
            <LinkedinIcon size={20} className="mr-2" />
            LinkedIn
          </a>
          <a href="https://github.com/tashi-ck" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center transition-colors">
            <GithubIcon size={20} className="mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </section>;
};
export default HeroSection;