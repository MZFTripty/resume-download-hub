
import React from 'react';

const EducationSection = () => {
  const education = [
    {
      period: "2020-2025",
      institution: "MYMENSINGH ENGINEERING COLLEGE",
      degree: "Computer Science & Engineering",
      details: "4-2 running",
      gpa: "CGPA: 3.52 / 4.00"
    },
    {
      period: "2018-2019",
      institution: "RDA LAB. SCHOOL & COLLEGE, BOGURA",
      degree: "Science Group, HSC",
      gpa: "GPA: 5.00 / 5.00"
    },
    {
      period: "2016-2017",
      institution: "RDA LAB. SCHOOL & COLLEGE, BOGURA",
      degree: "Science Group, SSC",
      gpa: "GPA: 5.00 / 5.00"
    }
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">EDUCATION</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="font-bold text-lg">{edu.institution}</h3>
                  <p className="text-gray-600">{edu.degree}</p>
                  {edu.details && <p className="text-gray-500 text-sm">{edu.details}</p>}
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="text-primary font-medium">{edu.period}</span>
                  <p className="text-gray-700">{edu.gpa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
