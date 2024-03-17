import imgTestimonios from '../assets/man-5545030_1280.webp';
import imgTestimonios2 from '../assets/selfie-4255884_640.webp'
import imgTestimonios3 from '../assets/photographer-640419_1280.webp'
import imgTestimonios4 from '../assets/happy-4158123_1280.webp'
import imgTestimonios5 from '../assets/friendship-day-3104635_1280.webp'
import imgTestimonios6 from '../assets/man-5545030_1280.webp'

const posts = [
    {
      id: 1,
      title: 'Testimonios',
      
      description:
        'Muy buena clase desde lo teórico a lo práctico. Cristian tiene una muy buena manera de hacer muy fluida la clase y siempre aportar conocimientos',
      date: 'Sep 03, 2023',
      datetime: '2020-03-16',
      category: { title: 'Marketing', },
      author: {
        name: 'Juan Carlos Rodríguez',
        role: 'Javascript Basico',
        
        imageUrl:
          imgTestimonios,
      },  
    },
    {
      id: 1,
      title: 'Testimonios',
      
      description:
        'Es mi primer profesor en la plataforma, pero literalmente tiene un dinamismo que es excelente. Hace que la clase sea llevadera y siempre está atento a despejar las dudas que podamos tener.',
      date: 'Sep 03, 2023',
      datetime: '2020-03-16',
      category: { title: 'Desarrollador Front', },
      author: {
        name: 'María Lopez',
        role: 'Javascript Avanzado',      
        imageUrl:
          imgTestimonios2
      },  
    },
    {
      id: 1,
      title: 'Testimonios',
      
      description:
        'La verdad que la documentacion que te brinda me ayudo a potenciar mi carrera, un genio',
      date: 'Ago 23, 2023',
      datetime: '2020-03-16',
      category: { title: 'Abogado', },
      author: {
        name: 'Luis González',
        role: 'Javascript Avanzado',       
        imageUrl:
          imgTestimonios3
      },  
    },
   
    {
      id: 1,
      title: 'Testimonios',
      
      description:
        'Me preparo excelente para una entrevista tecnica y el review Code ',
      date: 'Oct 16, 2023',
      datetime: '2020-03-16',
      category: { title: 'Desarrollador Junior', },
      author: {
        name: 'Laura Fernanda Silva',
        role: 'Tutoria',       
        imageUrl:
          imgTestimonios5
      },  
    },
    {
      id: 1,
      title: 'Testimonios',
      
      description:
        'Un crack, super dinamico, sincero, ejemplifica muy bien, es claro y rápido con lo que enseña',
      date: 'Oct 16, 2023',
      datetime: '2020-03-16',
      category: { title: 'Full stack', },
      author: {
        name: 'Valentin Aireta',
        role: 'Javascript Basico',     
        imageUrl:
         imgTestimonios4
      },  
    },
    // More posts...
  ]
export default function Clients() {
    return (
      <div className="bg-white py-24 sm:py-32" id="Testimonios">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lo que dicen los estudiantes</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Se como ellos y aprovecha este curso de Javascript
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
    )
  }
  