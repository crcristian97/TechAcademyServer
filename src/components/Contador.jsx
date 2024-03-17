import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Countdown from 'react-countdown-now';

Modal.setAppElement('#root'); // Necesario para evitar errores de accesibilidad

const Contador = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [email, setEmail] = useState('');
  const countdownDate = new Date('2024-01-18T19:00:00');
  const [isRegistered, setIsRegistered] = useState(false);
  const googleFormsLink = 'https://docs.google.com/forms/d/e/1FAIpQLSfbKFPEK0feOXzmj0anhuBGex8Jl1QJD00fV6wNeBctl6_Y1w/viewform?usp=sf_link';

  useEffect(() => {
    const closeModalOnEscape = (e) => {
      if (e.key === 'Escape') {
        setModalIsOpen(false);
      }
    };

    window.addEventListener('keydown', closeModalOnEscape);

    return () => {
      window.removeEventListener('keydown', closeModalOnEscape);
    };
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignUp = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Por favor, introduce una dirección de correo electrónico válida.');
      return;
    }
    setIsRegistered(true);
    setModalIsOpen(false);
    window.open(googleFormsLink, '_blank');
  };

  const renderRegistrationMessage = () => {
    debugger
    if (isRegistered) {
      return (
        <p style={{ fontSize: '20px', color: '#333' }}>
          Ya estás registrado. Se te enviará el enlace más cerca de la fecha.
        </p>
      );
    }

    return null;
  };

  const rendererDays = ({ days }) => (
    <span className="simply-amount" style={{ fontSize: '40px', fontWeight: '700', color: '#007BFF' }}>{days}</span>
  );
  
  const rendererHours = ({ hours }) => (
    <span className="simply-amount" style={{ fontSize: '40px', fontWeight: '700', color: '#007BFF' }}>{hours}</span>
  );

  const rendererMinutes = ({ minutes }) => (
    <span className="simply-amount" style={{ fontSize: '40px', fontWeight: '700', color: '#007BFF' }}>{minutes}</span>
  );
  
  const rendererSeconds = ({ seconds }) => (
    <span className="simply-amount" style={{ fontSize: '40px', fontWeight: '700', color: '#007BFF' }}>{seconds}</span>
  );

  return (
    <Modal
    isOpen={modalIsOpen}
    onRequestClose={() => setModalIsOpen(false)}
    style={{
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      content: {
        width: '50%',
        height: '50%',
        margin: 'auto',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        textAlign: 'center',
        background: 'linear-gradient(to right, #F5F5F5, #c9abe5)',
      },
    }}
  >
    <h2 style={{ marginBottom: '10px', fontSize: '40px', color: 'black' }}>¡Regístrate para nuestra Masterclass Gratuita!</h2>
    {renderRegistrationMessage()}
    <p style={{ fontSize: '20px', color: '#333' }}>Comienza: 18 de enero a las 19:00</p>
    <p style={{ fontSize: '20px', color: '#333' }}>Armado de CV, Conseguir Trabajo IT, Creacion de marca y mucho mas</p>
    <input
      type="email"
      placeholder="Tu correo electrónico"
      onChange={handleEmailChange}
      style={{ margin: '10px', padding: '10px', fontSize: '18px', width: '60%', borderRadius: '5px' }}
    />
      <div id="cuenta" style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
        <div className="simply-section" style={{ width: '120px', height: '120px', margin: '0 20px', borderRadius: '5px', background: 'none' }}>
          <Countdown date={countdownDate} renderer={rendererDays} />
          <span className="simply-word" style={{ fontWeight: '300', fontSize: '20px', color: '#333' }}>Días</span>
        </div>
        <div className="simply-section" style={{ width: '120px', height: '120px', margin: '0 20px', borderRadius: '5px', background: 'none' }}>
          <Countdown date={countdownDate} renderer={rendererHours} />
          <span className="simply-word" style={{ fontWeight: '300', fontSize: '20px', color: '#333' }}>Horas</span>
        </div>
        <div className="simply-section" style={{ width: '120px', height: '120px', margin: '0 20px', borderRadius: '5px', background: 'none' }}>
          <Countdown date={countdownDate} renderer={rendererMinutes} />
          <span className="simply-word" style={{ fontWeight: '300', fontSize: '20px', color: '#333' }}>Minutos</span>
        </div>
        <div className="simply-section" style={{ width: '120px', height: '120px', margin: '0 20px', borderRadius: '5px', background: 'none' }}>
          <Countdown date={countdownDate} renderer={rendererSeconds} />
          <span className="simply-word" style={{ fontWeight: '300', fontSize: '20px', color: '#333' }}>Segundos</span>
        </div>
      </div>
      <button
        onClick={handleSignUp}
        style={{
          background: '#007BFF',
          color: 'white',
          padding: '15px 30px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '17px',
          marginTop: '10px',
          marginRight: '10px'
        }}
      >
        Registrarse
      </button>
      <button
        style={{
          background: 'red',
          color: 'white',
          padding: '15px 30px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '17px',
          marginTop: '10px',
        }}
        onClick={() => setModalIsOpen(false)}
      >
        Cerrar
      </button>
      
    </Modal>
  );
};

export default Contador;
