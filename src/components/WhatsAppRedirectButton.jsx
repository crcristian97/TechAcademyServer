import React from 'react';

const WhatsAppRedirectButton = ({ whatsappMessage }) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "3517528830";
    const message = encodeURIComponent(whatsappMessage); // Utiliza el mensaje personalizado

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, '_blank');
  };
  return (
    <button
      onClick={handleWhatsAppClick}
      className="bg-indigo-600 hover:bg-indigo-700 focus:ring focus:ring-indigo-400 text-white py-2 px-4 rounded-lg text-center text-sm font-semibold shadow-md"
    >
      Contactarse al WhatsApp
    </button>
  );
};

export default WhatsAppRedirectButton;