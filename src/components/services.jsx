import React, { useCallback } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import WhatsAppRedirectButton from './WhatsAppRedirectButton';

export default function Services({ 
  title, 
  price, 
  priceBefore, 
  link, 
  description, 
  includedFeatures, 
  hoursCourses 
}) {

  const handleOpenGoogleDrive = useCallback(() => {
      openGoogleDrive(title);
  }, [title]);

  const openGoogleDrive = (title) => {
    let url;
    switch (title) {
        case 'Javascript Basico':
            url = 'https://drive.google.com/file/d/1EjMk18jMRuyvL3aAGj_6briT37YWnZAp/view?usp=sharing';
            break;
        case 'Javascript Avanzado':
            url = 'https://drive.google.com/file/d/15aY5YBDiVZcleYgTkIRF1IQjmKbyDAaD/view?usp=drive_link';
            break;
        case 'Mentorias Privadas':
            url = 'https://drive.google.com/file/d/1CNVEFbIpHL6DvESQYu9ul1j66OjbwMT5/view?usp=drive_link';
            break;
        case 'Excel Basico':
            url = 'https://drive.google.com/file/d/1dAcut_UkQ5KYB8dvuhOC3u6Tvgg4IjXA/view?usp=sharing';
            break;
        default:
            console.error('Título no reconocido');
            return;
    }

    window.open(url, '_blank');
};

  const generateWhatsAppMessage = () => {
    const messages = {
      'Javascript Basico': '¡Hola! Estoy interesado en comprar el Curso de Javascript Básico.',
      'Javascript Avanzado': '¡Hola! Estoy interesado en comprar el Curso de Javascript Avanzado.',
      'Excel Basico': '¡Hola! Estoy interesado en comprar el Curso de Excel Basico.',
      default: '¡Hola! Estoy interesado comprar una Mentoria.',
    };

    return messages[title] || messages.default;
  };
  
  const renderFeaturesList = (features) => (
    <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
      {features.map((feature) => (
        <li key={feature} className="flex gap-x-3">
          <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
          {feature}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="bg-white py-2" id='Cursos'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          {/* Main content */}
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">{description}</p>
            <h4 className="mt-10 text-sm font-semibold leading-6 text-indigo-600">Que incluye</h4>
            {renderFeaturesList(includedFeatures)}
            
            <h4 className="mt-10 text-sm font-semibold leading-6 text-indigo-600">Dias y Horarios</h4>
            {renderFeaturesList(hoursCourses)}

            <div className="mt-8 flex justify-center">
              <button
                onClick={handleOpenGoogleDrive}
                className="bg-indigo-600 hover:bg-indigo-700 focus:ring focus:ring-indigo-400 text-white py-2 px-4 rounded-lg text-center text-sm font-semibold shadow-md mx-2"
              >
                Ver Programa
              </button>
              <WhatsAppRedirectButton whatsappMessage={generateWhatsAppMessage()} />
            </div>
          </div>
          
          {/* Pricing section */}
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
              <p className="mt-3 text-md leading-5 text-gray-600">
                  <span className="text-lg text-red-400 line-through">{priceBefore}</span>
              </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">{price}</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">$ARS</span>
                </p>
                <Link
                  target='_blank'
                  to={`/cursobasicojs/${title}/${price}/`}                  
                  className="mt-4 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  Comprar Curso
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Mira nuestro programa
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
