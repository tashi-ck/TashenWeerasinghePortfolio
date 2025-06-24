import React from 'react';
import { GlobeIcon, HeartIcon } from 'lucide-react';
const SkillsSection: React.FC = () => {
  const skills = {
    programming: ['Java', 'Python', 'C', 'C++', 'JavaScript'],
    web: ['HTML', 'CSS', 'PHP'],
    tools: ['GitHub', 'Postman', 'Figma', 'MySQL'],
    soft: ['Teamwork', 'Leadership', 'Time Management', 'Communication']
  };
  return <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <div size={24} className="mr-3 text-blue-600" />
                Programming
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill, index) => <span key={index} className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-1 rounded-md text-sm">
                    {skill}
                  </span>)}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <GlobeIcon size={24} className="mr-3 text-blue-600" />
                Web Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.web.map((skill, index) => <span key={index} className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-3 py-1 rounded-md text-sm">
                    {skill}
                  </span>)}
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <div size={24} className="mr-3 text-blue-600" />
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => <span key={index} className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 px-3 py-1 rounded-md text-sm">
                    {skill}
                  </span>)}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <HeartIcon size={24} className="mr-3 text-blue-600" />
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill, index) => <span key={index} className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 px-3 py-1 rounded-md text-sm">
                    {skill}
                  </span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SkillsSection;