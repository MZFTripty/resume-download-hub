
import React from 'react';
import { FileText } from 'lucide-react';

const ResumeDownloadCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-primary max-w-md mx-auto">
      <div className="flex items-center justify-center mb-4">
        <FileText size={48} className="text-primary" />
      </div>
      
      <h3 className="text-xl font-bold text-center mb-2">My Resume</h3>
      <p className="text-gray-600 text-center">
        Please contact me directly for my complete resume and portfolio details.
      </p>
    </div>
  );
};

export default ResumeDownloadCard;
