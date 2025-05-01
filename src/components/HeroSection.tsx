
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
          <Avatar className="w-64 h-64 border-4 border-white">
            <AvatarImage 
              src="/lovable-uploads/2f47325d-baf1-429e-8553-b0437a4c6dba.png" 
              alt="Mirza Zarin Fatema" 
            />
            <AvatarFallback>MZF</AvatarFallback>
          </Avatar>
        </div>
        
        <div className="md:w-2/3 text-center md:text-left md:pl-10">
          <h1 className="text-4xl md:text-4xl font-bold mb-2">MIRZA ZARIN FATEMA TRIPTY</h1>
          <h2 className="text-xl md:text-2xl mb-6">FRONTEND WEB DEVELOPER</h2>
          <p className="text-white/80 max-w-xl mb-8">
            I am an undergraduate student with experience in frontend web development.
            Passionate about creating responsive, user-friendly interfaces and
            implementing dynamic web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
