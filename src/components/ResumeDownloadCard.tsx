
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, FileText } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ResumeDownloadCard = () => {
  const { toast } = useToast();
  
  const handleDownload = () => {
    toast({
      title: "Download started",
      description: "Your resume download has started!",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-primary max-w-md mx-auto">
      <div className="flex items-center justify-center mb-4">
        <FileText size={48} className="text-primary" />
      </div>
      
      <h3 className="text-xl font-bold text-center mb-2">My Resume</h3>
      <p className="text-gray-600 text-center mb-6">
        Download my full resume to learn more about my experience and skills.
      </p>
      
      <a 
        href="/resume.pdf" 
        download="Mirza_Zarin_Fatema_Resume.pdf" 
        onClick={handleDownload}
        className="block w-full"
      >
        <Button className="btn-primary w-full">
          <Download size={18} /> Download Resume
        </Button>
      </a>
    </div>
  );
};

export default ResumeDownloadCard;
