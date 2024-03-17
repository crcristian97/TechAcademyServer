import { Link } from "react-router-dom"
import imgCristian from '../assets/1578750284142.webp'


const posts = [
  {
    id: 1,
    title: 'La IA se va a quedar con todo el empleo?',
    href: '#',
    description:
      'Escuche muchos decir que la IA nos va a quitar empleo, sobre todo a las personas que trabajamos desde una computadora.Te cuento mi punto de vista en este Blog',
    date: 'Feb 19, 2024',
    datetime: '19-02-2024',
    category: { title: 'Programacion', href: '#' },
    author: {
      name: 'Cristian Cabrera',
      role: 'CEO',
      href: '#',
      imageUrl: imgCristian,
    },
  },
  
  // More posts...
]

export default function Blog() {
  return (
    <div className="bg-white py-24 sm:py-32" id="Blog">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mira nuestro Blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Fijate lo que opinan nuestros expertos sobre tematicas cotidianas
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <Link  
                    target='_blank'
                    to={`/blog/${post.category.title}/`}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {post.category.title}
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link 
                      target='_blank'
                      to={`/blog/${post.category.title}/`}
                      >
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <Link 
                        target='_blank'
                        to={`/blog/${post.category.title}/`}
                      >
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </Link>
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
