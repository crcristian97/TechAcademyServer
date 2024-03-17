import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12" id='Contacto'>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

                    {/* Nombre y marca */}
                    <div className="text-center md:text-left">
                        <span className="text-2xl font-bold">Cristian Cabrera</span>
                    </div>

                    {/* Derechos reservados */}
                    <div className="text-center">
                        <span className="block text-sm">©2023 TechAcademy. Todos los derechos reservados.</span>
                    </div>

                    {/* Redes sociales */}
                    
                </div>

                {/* Sección de contacto */}
                <div className="border-t border-gray-700 pt-8 mt-8 text-center">
                    <span className="block text-sm mb-4">¿Tienes consultas? Contáctame directamente:</span>
                    <a href="mailto:techacademycourses@gmail.com.ar" className="text-blue-400 hover:underline">techacademycourses@gmail.com.ar</a>
                </div>
            </div>
        </footer>
    );
};
