import imgProfile from '../assets/1578750284142.webp'
import TagManager from 'react-gtm-module';


export default function OurTeam() {
  const handleClick = () => {
    // Envía un evento a Google Tag Manager cuando se hace clic en el botón
    TagManager.dataLayer({
      dataLayer: {
        event: 'linkedinButtonClick'
      }
    });
    // Abre el enlace en una nueva pestaña
    window.open('https://www.linkedin.com/in/cristian-cabrera-304500183/', '_blank');
  };
    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                  “¡Potencia tu carrera y abre las puertas al mercado laboral aprendiendo programación! En Tech Academy, estamos aquí para impulsar tus proyectos personales al máximo nivel.”
                </p>
              </blockquote>
              <figcaption className="mt-10">
                <img
                  className="mx-auto h-10 w-10 rounded-full"
                  src={imgProfile}
                  alt="Javascript ceo"
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">Cristian Cabrera</div>
                  <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-gray-600">CEO of Tech Academy</div>
                </div>
               
              </figcaption>
              <div className="mt-4 flex items-center justify-center">
                <button
                  onClick={handleClick}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out hover:shadow"
                >
                  Visitar mi Linkedin
                </button>
              </div>
            </figure>
          </div>
         </section>
    )
  }
  