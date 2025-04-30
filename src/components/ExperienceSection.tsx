
import React from 'react';

const ExperienceSection = () => {
  const projects = [
    {
      title: "Car Servicing",
      link: "https://github.com/MZFTripty/car-servicing"
    },
    {
      title: "Book Review",
      link: "https://github.com/MZFTripty/book-review"
    },
    {
      title: "Dragon News Resources",
      link: "https://github.com/MZFTripty/dragon-news-resources"
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">WORK EXPERIENCE</h2>
        
        <div className="mb-6">
          <p className="text-gray-700">No experience yet now</p>
          <p className="mt-4 text-gray-700">
            But I practiced some projects, here is my github link:
            <a href="https://github.com/MZFTripty" className="text-blue-600 hover:underline ml-2" target="_blank" rel="noreferrer">
              https://github.com/MZFTripty
            </a>
          </p>
        </div>
        
        <h3 className="font-bold text-lg mt-8 mb-4">Projects:</h3>
        <ul className="space-y-2">
          {projects.map((project, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              <a href={project.link} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">
                {project.title} - {project.link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ExperienceSection;
