import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat = () => {
  const phoneNumber = '+252611273030';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="whatsapp-float" onClick={() => window.open(whatsappUrl, '_blank')}>
      <FaWhatsapp className="whatsapp-icon" />
    </div>
  );
};

export default WhatsAppFloat;