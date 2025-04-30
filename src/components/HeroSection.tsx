
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white">
            <img 
              src="/lovable-uploads/ef25b92d-db58-4afa-9f05-6740a2ddf752.png" 
              alt="Mirza Zarin Fatema" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="md:w-2/3 text-center md:text-left md:pl-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">MIRZA ZARIN FATEMA</h1>
          <h2 className="text-xl md:text-2xl mb-6">FRONTEND WEB DEVELOPER</h2>
          <p className="text-white/80 max-w-xl mb-8">
            I am an undergraduate student with experience in frontend web development.
            Passionate about creating responsive, user-friendly interfaces and
            implementing dynamic web applications.
          </p>
          <a href="/resume.pdf" download="Mirza_Zarin_Fatema_Resume.pdf">
            <Button className="bg-white text-primary hover:bg-white/90 px-6 py-2 rounded-md flex items-center gap-2">
              <Download size={18} /> Download Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
