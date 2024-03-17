// Carousel.js

import React, { useCallback } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TagManager from 'react-gtm-module';

const Carousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
    {
      title: 'Javascript Basico',
      description: 'Embárcate en un emocionante viaje de aprendizaje en nuestro curso, donde dominarás los fundamentos del lenguaje de programación más relevante hoy en día, capacitándote para crear diversas aplicaciones. Explorarás las herramientas nativas, trabajarás con jQuery y aprenderás a desarrollar aplicaciones web modernas utilizando AJAX. Al graduarte, serás capaz de construir soluciones web interactivas y aplicar estos conocimientos a cualquier framework JavaScript. ¡Únete y desata tu potencial!',
      includedFeatures: ['Cupos Limitados para una mejor especialización','Duración: 7 semanas', 'Dedicación Alta', 'No es necesario tener conocimientos previos', 'Implementación de IA', 'Hasta 60 personas', 'Certificado'],
      hoursCourses: ['Inicia: 06/03/2023','Finaliza: 20/04/2024', 'Lunes y Miercoles 19:00 - 21:00 PM' ],
      priceBefore: '89999 antes',
      price: '69999',
    },
    {
      title: 'Javascript Avanzado',
      description: 'Sumérgete en nuestro curso de JavaScript Avanzado, donde perfeccionarás tus habilidades en el lenguaje de programación más influyente. Aprenderás a aplicar las mejores prácticas, incluyendo la refactorización de código, la creación de sitios web seguros con HTTPS y el uso efectivo de Promesas con bloques Try-Catch. Explorarás la programación asíncrona, y cómo manejar errores de manera eficiente, lo que te capacitará para desarrollar aplicaciones robustas y de alto rendimiento. Al concluir, serás un experto en JavaScript, listo para afrontar desafíos avanzados y destacarte en el mundo del desarrollo web.',
      includedFeatures: ['Cupos Limitados para una mejor especialización', 'Duración: 7 semanas', 'Dedicación Alta', 'Necesitar tener conocimiento de Javascript', 'Implementación de IA', 'Hasta 40 personas', 'Certificado' ],
      hoursCourses: ['Inicia: 05/03/2024','Finaliza: 19/04/2024', 'Martes y Jueves 19:00 - 21:00 PM' ],
      priceBefore: '110000 antes',
      price: '89999',
    },
    {
      title: 'Excel Basico',
      description: '¿Quieres darle un impulso a tu carrera profesional? ¡Aprende Excel básico con nosotros y desbloquea un mundo de posibilidades! Nuestro curso de Excel básico está diseñado para aquellos que desean adquirir o mejorar sus habilidades en esta poderosa herramienta de hojas de cálculo.      En este curso, te llevaremos paso a paso a través de los conceptos fundamentales de Excel, desde la navegación básica hasta la creación de fórmulas y funciones indispensables para realizar cálculos, análisis de datos y presentaciones efectivas. Aprenderás a manejar hojas de cálculo de manera eficiente, organizar datos, realizar gráficos simples y mucho más.',
      includedFeatures: ['Cupos Limitados para una mejor especialización', 'Duración: 4 semanas', 'Dedicación Alta', 'Implementación de IA en Excel', 'Hasta 30 personas', 'Certificado' ],
      hoursCourses: ['Inicia: 11/03/2024','Finaliza: 11/04/2024', 'Lunes y Miercoles 19:00 - 21:00 PM' ],
      priceBefore: '45000 antes',
      price: '25000',
    },
    {
      title: 'Mentorias Privadas',
      description: '¡Eleva tu Potencial con Sesiones Privadas de Mentoría de 1 Hora vía Zoom para resolver cualquier duda!',
      includedFeatures: ['Sesiones privadas de mentoría de 1 hora vía Zoom', 'Orientación personalizada para tu desarrollo', 'Revisión de código', 'Sesiones de Preguntas y Respuestas', 'Enfoque a tus pruebas técnicas', 'Preparación para Entrevistas de Trabajo', 'Armado de CV y Linkedin'],
      hoursCourses: ['Coordinar con la Academia mediante WhatsApp'],
      priceBefore: '25000 antes',
      price: '13999',
    },
    // Add more slides as needed
  ];

  const handleOpenGoogleDrive = useCallback((title) => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'programButtonClick',
        title: title 
      }
    });

    openGoogleDrive(title);
  }, []);

  const eventClickDataLayer = (title, price) => {
    // Envía un evento a Google Tag Manager cuando se hace clic en el enlace
    TagManager.dataLayer({
      dataLayer: {
        event: 'comprarCursoCarrousel',
        title: title,
        price: price
      }
    });
  };

  const openGoogleDrive = (title) => {
    let url;
    switch (title) {
      case 'Javascript Basico':
        url = 'https://drive.google.com/file/d/1343Gq1ISUEa89JDwVDKT8pn2n4wueSqp/view?usp=sharing';
        break;
      case 'Javascript Avanzado':
        url = 'https://drive.google.com/file/d/1WYuAdZAT1dwafqGNj9Qfr_u19b9yi1uP/view?usp=sharing';
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

  

  const renderFeaturesList = (features) => (
    <ul className="list-disc pl-5 mt-2">
      {features.map((feature, index) => (
        <li key={index} className="text-sm text-gray-700">{feature}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8" id="Cursos">Mira todos nuestros cursos</h2>
      <Slider {...settings} >
        {slides.map((slide, index) => (
          <div key={index} className="bg-white py-4" id={`Cursos-${index}`}>
            {/* Your existing content structure */}
            {/* ... */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8" >
              <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                {/* Main content */}
                <div className="p-8 sm:p-10 lg:flex-auto">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">{slide.title}</h3>
                  <p className="mt-6 text-base leading-7 text-gray-600">{slide.description}</p>
                  <h4 className="mt-10 text-sm font-semibold leading-6 text-indigo-600">Que incluye</h4>
                  {renderFeaturesList(slide.includedFeatures)}
                  <h4 className="mt-10 text-sm font-semibold leading-6 text-indigo-600">Dias y Horarios</h4>
                  {renderFeaturesList(slide.hoursCourses)}
                </div>
                {/* Pricing section */}
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                      <p className="mt-3 text-md leading-5 text-gray-600">
                        <span className="text-lg text-red-400 line-through">{slide.priceBefore}</span>
                      </p>
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">{slide.price}</span>
                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">$ARS</span>
                      </p>
                      <Link
                        target='_blank'
                        to={`/cursobasicojs/${slide.title}/${slide.price}/`}                  
                        className="mt-4 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                        onClick={() => eventClickDataLayer(slide.title, slide.price)}
                      >
                        Comprar Curso
                      </Link>
                      <button
                         onClick={() => handleOpenGoogleDrive(slide.title)}
                        className="mt-4 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                      >
                        Ver Programa
                      </button>
                      <p className="mt-6 text-xs leading-5 text-gray-600">
                        Mira nuestro programa
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faArrowRight} className="text-4xl text-gray-700" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer"
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faArrowLeft} className="text-4xl text-gray-700" />
  </div>
);

export default Carousel;
