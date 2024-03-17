import React from 'react';

export default function ModalPrograma({ isOpen, onClose, title, features }) {
  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="flex items-center justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0">
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div
          className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-lg transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ${
            isOpen ? 'opacity-100 translate-y-0 sm:scale-100' : 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          }`}
        >
          <div className="bg-indigo-600 text-white p-4">
            <div className="text-2xl font-bold mb-4">{title}</div>
            <ul>
              {features.map((feature, index) => (
                <li key={index} className="mb-2">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={onClose}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-white text-base font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}