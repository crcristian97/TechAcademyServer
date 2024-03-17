import imgLaNacion from '../assets/lanacionç.webp';
import imgGoogle from '../assets/google-doodle_862x485.webp';
import imgInclusion from '../assets/inclusionCompany.png';
import imgSSBinternacional from '../assets/ssbinternacional.jpg';
import imgUpwork from '../assets/upwork.png';
export default function LogoCloud() {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Empresas que avalan nuestros cursos
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={imgGoogle}
              alt="Logo de Google"
              width={158}
              height={48}
              loading="lazy"
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={imgInclusion}
              alt="Logo de Inclusion Company"
              width={158}
              height={48}
              loading="lazy"
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={imgSSBinternacional}
              alt="Logo de SSB Internacional"
              width={158}
              height={48}
              loading="lazy"
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={imgUpwork}
              alt="Logo de Upwork"
              width={158}
              height={48}
              loading="lazy"
            />
            <img
              src={imgLaNacion}
              alt="Logo de La Nación"
              width={250}
              height={500}
              loading="lazy"
            />
          </div>
          
        </div>
      </div>
    )
  }
  