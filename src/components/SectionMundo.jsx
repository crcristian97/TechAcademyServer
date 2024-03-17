import React from 'react';
import videoFile from '../assets/earth_-_1236 (720p).mp4'
const SectionMundo = () => {
  return (
    <section style={{ position: 'relative', height: '100vh', marginTop: '4rem' }}>
      <video
        className="object-cover w-full h-full absolute top-0 left-0 z-0"
        autoPlay
        muted
        loop
        poster=""
        src={videoFile}
      >
        <source src="/videos/mundo.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold">¡Bienvenido al Mundo Digital!</h1>
        <p className="mt-4 text-lg md:text-xl">Explora un mundo lleno de posibilidades.</p>
      </div>
    </section>
  );
};

export default SectionMundo;
