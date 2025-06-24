import React from 'react';
import Badge from './Badge';
const ProjectsSection: React.FC = () => {
  const projects = [{
    title: 'Automated Coconut Husk Chips Processing System',
    description: 'IoT-based system with real-time sensor data monitoring.',
    tech: [{
      name: 'Spring Boot',
      color: 'green'
    }, {
      name: 'React',
      color: 'blue'
    }, {
      name: 'Arduino',
      color: 'purple'
    }],
    imageUrl: 'https://images.unsplash.com/photo-1580706483913-b6ea7db483a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    title: 'Vehicle Rental System',
    description: 'Platform for renting and listing vehicles.',
    tech: [{
      name: 'Java',
      color: 'red'
    }, {
      name: 'HTML',
      color: 'blue'
    }, {
      name: 'CSS',
      color: 'purple'
    }],
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    title: 'Online Pet Care System',
    description: 'Pet care portal for items and consultations.',
    tech: [{
      name: 'PHP',
      color: 'blue'
    }, {
      name: 'HTML',
      color: 'yellow'
    }, {
      name: 'JavaScript',
      color: 'green'
    }],
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }];
  return <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800 rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={index} className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md transition-transform hover:transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => <Badge key={techIndex} text={tech.name} color={tech.color as any} />)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ProjectsSection;