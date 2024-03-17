import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola, quisiera más información sobre los curso de JS");
    const phoneNumber = "3517528830";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div
      id='whatsappButton'
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full cursor-pointer"
      onClick={handleWhatsAppClick}
    >
      <FontAwesomeIcon icon={['fab', 'whatsapp']} size="3x" />
    </div>
  );
};

export default WhatsAppButton;
