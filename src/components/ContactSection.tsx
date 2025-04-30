
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = {
    phone: "01779639096",
    email: "zarinfartemartripty@gmail.com",
    location: "Sherpur, Bogura"
  };

  const reference = {
    name: "Rawnak Ara Chawdhury",
    position: "Dept. Head of CSE, Mymensingh Engineering college",
    phone: "01487659700"
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">CONTACT</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="info-item">
              <Phone size={18} className="text-primary" />
              <span>{contactInfo.phone}</span>
            </div>
            
            <div className="info-item">
              <Mail size={18} className="text-primary" />
              <span>{contactInfo.email}</span>
            </div>
            
            <div className="info-item">
              <MapPin size={18} className="text-primary" />
              <span>{contactInfo.location}</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">REFERENCE</h3>
            <p className="font-medium">{reference.name}</p>
            <p className="text-gray-700">{reference.position}</p>
            <p className="text-gray-700">Phone: {reference.phone}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
