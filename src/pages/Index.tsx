
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import ResumeDownloadCard from '@/components/ResumeDownloadCard';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="section-title text-center">DOWNLOAD RESUME</h2>
            <div className="mt-8">
              <ResumeDownloadCard />
            </div>
          </div>
        </section>
        
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
