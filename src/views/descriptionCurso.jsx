import React, {  useState } from 'react';
import { useParams } from 'react-router-dom';
import certificadoIMG from '../assets/CertificadodeFInalizacion.png';
import TagManager from 'react-gtm-module';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios';

const DescriptionCurso = ({ course }) => {
  const { title, price, priceBefore } = useParams();
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    curso: title
  });

  const [showWallet, setShowWallet] = useState(false);

  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago('APP_USR-12107288-38fd-42a0-b0af-3d59728032e6', {
    locale: "es-AR"
  });

  const isFormValid = () => {
    return formData.nombre && formData.apellido && formData.email;
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // const message = `Hola, me gustaría inscribirme en el curso: ${title}. Mis datos son: Nombre: ${formData.nombre}, Apellido: ${formData.apellido}, Email: ${formData.email}`;
    // const whatsappUrl = `https://api.whatsapp.com/send?phone=[TuNúmeroDeWhatsApp]&text=${encodeURIComponent(message)}`;
    // window.open(whatsappUrl, '_blank');
  };

  
  // Define las propiedades para cada curso
  const courseDescriptions = {
    'Javascript Basico': '¿Alguna vez te has preguntado cómo funcionan las páginas web interactivas que visitas todos los días? Descubre el fascinante mundo de la programación web con nuestro curso de JavaScript Básico. Sumérgete en un viaje de aprendizaje que te llevará a través de los fundamentos de este lenguaje de programación esencial. En este curso, te adentrarás en los conceptos clave que sustentan la web moderna. Desde la introducción a JavaScript hasta la manipulación avanzada del Document Object Model (DOM), explorarás cada faceta de esta poderosa tecnología.',
    'Javascript Avanzado': '¿Listo para llevar tus habilidades de programación al siguiente nivel? Nuestro curso de JavaScript Avanzado te llevará por un emocionante viaje de aprendizaje que abarca desde los conceptos fundamentales hasta las técnicas más avanzadas. Este curso te capacitará para enfrentar desafíos avanzados en el desarrollo web y convertirte en un experto en JavaScript. ¿Estás listo para superar tus límites y destacarte en el mundo de la programación? ¡Únete a nosotros en este emocionante viaje!',
    'Excel Basico': '¿Quieres darle un impulso a tu carrera profesional? ¡Aprende Excel básico con nosotros y desbloquea un mundo de posibilidades! Nuestro curso de Excel básico está diseñado para aquellos que desean adquirir o mejorar sus habilidades en esta poderosa herramienta de hojas de cálculo.En este curso, te llevaremos paso a paso a través de los conceptos fundamentales de Excel, desde la navegación básica hasta la creación de fórmulas y funciones indispensables para realizar cálculos, análisis de datos y presentaciones efectivas. Aprenderás a manejar hojas de cálculo de manera eficiente, organizar datos, realizar gráficos simples y mucho más.',
    default: 'Nuestras sesiones privadas de mentoría de 1 hora vía Zoom están diseñadas para impulsar tu éxito en el mundo de la programación. Nuestra mentoría te brindará el apoyo y la guía necesarios para alcanzar tus metas en el desarrollo web y la programación. Estamos aquí para impulsar tu éxito. ¡Únete a nosotros y da el siguiente paso en tu carrera!',
  };

  
  const infoAdicional = courseDescriptions[title] || courseDescriptions.default;
  
  const planCarreraPorTitulo = {
    'Javascript Basico': [
      'Introduccion a JS',
      'Sintaxis y variables',
      'Control de flujos',
      'Ciclo e iteraciones',
      'Funciones',
      'Objectos',
      'Arrays',
      'DOM y Eventos',
      'Storage y JSON',
      'Consola',
      'Librerias',
      'Fetch y creacion de promesas',
      'Framework'
    ],
    'Javascript Avanzado': [
      'Repaso Fundamentos',
      'Principios SOLID',
      'Git',
      'Expresiones Regulares',
      'Objeto/Arrays II',
      'Async, await junto con try y catch',
      'Clean Code',
      'API Fetch y XMLHttpRequest',
      'Test y Depuración',
      'Ejercicios tipicos de Programacion',
      'React',
      'SPA con React'
    ],
    'Excel Basico': [
      'Introduccion Excel',
      'Formatos de datos',
      'Fórmulas y funciones basicas',
      'Funciones de texto y fecha',
      'Tabla',
      'Validación de datos',
      'Función SI',
      'Funciones condicionales y formato condicional',
      'Funciones lógicas anidadas',
      'Tablas dinámicas y segmentadores',
      'Gráficos dinámicos y minigráficos',
      'Macros',
    ],
    'Mentorias Privadas': [
      'Sesiones privadas de mentoría de 1 hora vía Zoom',
      'Respuestas a todas tus dudas y consultas',
      'Orientación personalizada para tu desarrollo',
      'Enfoque a tus pruebas técnicas',
      'Revisión de código',
      'Preparación para Entrevistas de Trabajo',
      'Sesiones de Preguntas y Respuestas',
      'Armado de CV y Linkedin'
    ]
  };

  const handleClickDataLayerComprarCurso = (title) => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'formComprarCurso',
        title: title
      }
    });
  };
  
  const temas = planCarreraPorTitulo[title] || [];


  const createPreference = async (title, price) => {
    try{  
    console.log("Esto es nuevo con cjs");

      const response = await axios.post("/api/create_preference",{
        title: title,
        quantity: 1,
        price: price,
      });
      const { id } = response.data
      return id;
    }catch(error){
      console.error(error)
    }
  }

  const handleBuy = async (title, price) => {
    const { nombre, apellido, email, } = formData;
    console.log("Migracias carpeta back");
    try {
      await axios.post("/api/save_email", { nombre, apellido, email, title });
    } catch (error) {
      console.error("Error al guardar el correo electrónico en Firebase:", error);
    }

    const id = await createPreference(title, price);
    if (id) { 
      setPreferenceId(id); 
      setShowWallet(true); }
  };

  return (
    <div className="flex justify-center">
      <div className="w-3/5 p-4">
      <h1 className="text-4xl font-extrabold mb-6 text-indigo-700">{title}</h1>
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Temas del Curso:</h2>
      <ul className="list-disc pl-6 list-inside bg-gray-100 p-4 rounded-lg shadow-lg">
        {temas.length > 0 ? (
            temas.map((tema, index) => (
                <li key={index} className="mb-2 flex items-center p-2 hover:bg-indigo-100 rounded">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-indigo-600 mr-2 transform -rotate-90"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 9.293a1 1 0 011.414 0L10 13.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="font-medium text-gray-700">{tema}</span>
                </li>
            ))
        ) : (
            <li className="text-gray-500 p-2 rounded hover:bg-red-100">No hay temas disponibles.</li>
        )}
    </ul>
      <h2 className="text-2xl font-semibold text-indigo-600 mt-6 mb-4">Información Adicional:</h2>
      <p className="text-lg text-gray-800 leading-relaxed">{infoAdicional}</p>
      <h2 className="text-2xl font-semibold text-indigo-600 mt-6 mb-4">Certificado</h2>
      <div className="flex justify-center items-center bg-gray-100 border border-gray-300 p-4 rounded-lg shadow-lg">
          <img 
          src={certificadoIMG} 
          alt="Certificado de Finalización del Curso de JavaScript" 
          className="max-w-full h-auto rounded-md"
          loading="lazy" />
      </div>
      </div>

      <div className="w-2/5 p-4">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-6">Realizar el Pago</h2>
      <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleFormSubmit}>
          <div className="mb-6">
              <label htmlFor="nombre" className="block text-md font-medium text-gray-800 mb-2">Nombre:</label>
              <input type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre" onChange={handleInputChange} className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div className="mb-6">
              <label htmlFor="apellido" className="block text-md font-medium text-gray-800 mb-2">Apellido:</label>
              <input type="text" id="apellido" name="apellido" placeholder="Escribe tu apellido" onChange={handleInputChange} className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div className="mb-6">
              <label htmlFor="email" className="block text-md font-medium text-gray-800 mb-2">Correo Electrónico:</label>
              <input type="email" id="email" name="email" placeholder="Ejemplo: juan@gmail.com" onChange={handleInputChange} className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div className="mb-6">
              <label htmlFor="costo" className="block text-md font-medium text-gray-800 mb-2">Precio del Curso:</label>
              <div className="relative mt-1 rounded-md shadow-sm">
                  <p className="text-xs leading-5 text-gray-600 mb-1">
                      <span className="text-red-400 line-through">{priceBefore}</span>
                  </p>
                  <p className="text-2xl font-bold text-indigo-600">${price}</p>
              </div>
          </div>

          {!isFormValid() && (
            <p className="text-red-600 text-sm mb-4">
              Por favor, completa todos los campos para comprar el curso.
            </p>
          )}

          {!showWallet && ( 
              <button 
                type="submit" 
                disabled={!isFormValid()} 
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg text-center font-semibold shadow-md transform transition hover:scale-105"  
                onClick={() => {
                  handleClickDataLayerComprarCurso(title);
                  handleBuy(title, price); 
                }}
                >
              Si queres pagar con Mercado Pago/Tarjeta, haz click aqui
            </button>
            )}
      </form>
      {showWallet && (
        <Wallet initialization={{ preferenceId: preferenceId, redirectMode: 'blank' }} />
      )}
      </div>
    </div>
  );
};

export default DescriptionCurso;