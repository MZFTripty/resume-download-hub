
import React from 'react';

const SkillsSection = () => {
  const skills = {
    professional: [
      "Project Management",
      "Public Relations",
      "Teamwork",
      "Time Management",
      "Leadership", 
      "Effective Communication"
    ],
    technical: [
      "HTML", "CSS", "JS", "React",
      "Figma", "Canva", "Some AI tools"
    ],
    languages: ["Bangla", "English"]
  };

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">SKILLS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-4 text-primary">Professional Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.professional.map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-4 text-primary">Technical Skills</h3>
            <h4 className="font-medium mb-2">Programming Languages:</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.technical.slice(0, 4).map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
            
            <h4 className="font-medium mb-2">Tools:</h4>
            <div className="flex flex-wrap gap-2">
              {skills.technical.slice(4).map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-4 text-primary">Languages</h3>
            <div className="flex flex-col gap-2">
              {skills.languages.map((language, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-primary rounded-full"></span>
                  <span>{language}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
