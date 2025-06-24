import React from 'react';
import { BookOpenIcon, AwardIcon } from 'lucide-react';
const EducationSection: React.FC = () => {
  return <section id="education" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Education & Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <BookOpenIcon size={24} className="mr-3 text-blue-600" />
              Education
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold">
                  BSc (Hons) in Information Technology
                </h4>
                <p className="text-blue-600">Specializing in Data Science</p>
                <p className="text-gray-600 dark:text-gray-300">
                  SLIIT – 3rd Year
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  June 2023 – Present
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">G.C.E. Advanced Level</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Physical Science
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2022 – 1B, 1C, 1S
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">G.C.E. Ordinary Level</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2019 – 9As
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <AwardIcon size={24} className="mr-3 text-blue-600" />
              Certifications
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold">
                  Java Programming Master Online Course
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">2023</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-sm italic">
                  I'm continuously expanding my skills through online courses
                  and self-learning. I focus on practical applications and
                  building real-world projects to strengthen my knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default EducationSection;