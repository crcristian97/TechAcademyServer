import React, { useState } from 'react';

const FAQ = () => {
  const faqData = [
    {
      question: "¿Cómo es la modalidad de cursada?",
      answer: "En Tech Academy, la modalidad de la cursada es de 4 horas semanales, 2 días a la semana."
    },
    {
      question: "¿Por dónde se da la clase?",
      answer: "Las clases se hacen mediante Meet."
    },
    {
      question: "¿Cómo comprar el curso?",
      answer: "Podés hacerlo seleccionando el botón 'Comprar Curso', llenar tus datos o mediante WhatsApp."
    },
    {
      question: "¿Cuáles son los medios de pago?",
      answer: "Podés pagar con Mercado Pago o hacer una transferencia."
    },
    {
      question: "¿Qué pasa después de pagar?",
      answer: "Una vez que envíes el comprobante, se te agregará a nuestra base de datos. Días antes de que arranques la cursada, se te enviará el link de Meet junto con toda la documentación."
    },
    {
      question: "¿Quiero saber más del curso?",
      answer: "Al costado de la página, tenés un botón de WhatsApp donde podrás comunicarte con nosotros."
    },
];


  const [openItem, setOpenItem] = useState(null);

  return (
    <section className="bg-gray-100 py-12" id='PreguntaFrecuentes'>
    <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Preguntas Frecuentes</h1>
        <div className="shadow-lg bg-white rounded-xl">
            {faqData.map((item, index) => (
                <div key={index} className="border-b">
                    <button
                        className="flex items-center justify-between w-full p-4 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        onClick={() => setOpenItem(openItem === index ? null : index)}
                    >
                        <span className="text-lg font-medium">{item.question}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-6 transform transition-transform ${openItem === index ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                    {openItem === index && (
                        <div className="p-4 text-gray-700 border-t">{item.answer}</div>
                    )}
                </div>
            ))}
        </div>
    </div>
</section>
  );
};

export default FAQ;