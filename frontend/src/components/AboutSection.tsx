import React from 'react';
const AboutSection: React.FC = () => {
  return <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800 rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto text-lg">
          <p className="mb-4 leading-relaxed">
            I'm an IT undergraduate with a strong interest in backend
            development and full-stack web applications. I enjoy building
            functional, scalable solutions and continuously learning new
            technologies.
          </p>
          <p className="leading-relaxed">
            I'm currently seeking an internship opportunity to gain real-world
            experience and grow as a developer.
          </p>
        </div>
      </div>
    </section>;
};
export default AboutSection;