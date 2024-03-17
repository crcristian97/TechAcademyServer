import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import imgIA from '../assets/IA-Blog.jpg';

export default function BlogDescripction() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Programacion</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">La IA se va a quedar con todo el empleo?</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              ¿Por qué tememos a la IA en lugar de aprovecharla como una aliada en nuestro desarrollo profesional?
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={imgIA}
            alt="La inteligencia Artificial nos va a sacar el empleo"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              Desde la aparición de CHATGPT el 30 de noviembre de 2022, ha generado un impacto masivo en la sociedad, lo que algunos llaman la cuarta revolución industrial. Estar contemporáneos a este evento nos plantea muchas preguntas, especialmente basadas en nuestras inseguridades.
              <br/>
              La primera pregunta que surge es: ¿Voy a perder mi trabajo? La respuesta es NO. Por el contrario, después de dos años de investigación y observación sobre el impacto de la IA en nuestras vidas, respaldados por estadísticas a nivel mundial, podemos afirmar que la IA ha generado más empleo que desempleo. ¿Cómo es esto posible? La IA tiene la capacidad de generar textos, campañas publicitarias e incluso responder preguntas sobre temas que desconocemos. Y ni hablar de su impacto en el área de la programación.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Bajo el desempleo:</strong> La tasa media de desempleo en los países del G7 se sitúa en un 3,8%.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Evolución constante:</strong> La naturaleza de nuestro trabajo está experimentando un cambio constante, como ha ocurrido a lo largo de la historia. Sin embargo, es importante destacar que, en última instancia, la inteligencia artificial generará más empleos de los que eliminará.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Nuevas tecnologías:</strong> El impacto de la IA ha redefinido roles en áreas como el aprendizaje automático, análisis de datos, ciencia de datos, entre otras, a partir del año 2023.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
              Todo esto demuestra que, al igual que ocurrió con la pandemia de COVID-19, donde nuestro día a día se vio alterado y nos adaptamos, la IA presenta una situación similar. Aunque el miedo puede persistir, al observar las estadísticas, podemos apreciar que es diferente a los desafíos mentales que enfrentamos.
              </p>
              {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
