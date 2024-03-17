import { Helmet } from 'react-helmet';
import SectionHeader from './components/sectionHeader';
import OurTeam from './components/ourTeam';
import LogoCloud from './components/logoCloud';
import SectionMundo from './components/SectionMundo';
import FAQ from './components/FAQ';
import Clients from './components/clients';
import WhatsAppButton from './components/whatsApp';
import Carousel from './components/Carousel';
import Blog from './components/blog'

function Home() {

  return (
    <>
     <Helmet>
        <title> Tech Academy Courses</title>
        <meta name="description" content="Descubre nuestros cursos básicos de JavaScript diseñados para principiantes. Aprende de manera accesible y efectiva con lecciones prácticas. ¡Cursos de alta calidad a precios económicos!" />
      </Helmet>
      <SectionHeader />
      <LogoCloud />
      <OurTeam id="ourteam" />
      <Clients />
      <Carousel />
      <Blog /> 
      <SectionMundo/>
      <FAQ/>
      <WhatsAppButton />
    </>
  )
}

export default Home;
