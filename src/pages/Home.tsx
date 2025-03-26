import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  DownloadIcon 
} from 'lucide-react'

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center">
      <div className="container mx-auto px-4">
        {/* Sección Principal */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Columna de Imagen */}
          <div 
            data-aos="fade-right"
            className="flex justify-center"
          >
            <div className="w-64 h-64 md:w-96 md:h-96 relative">
              <Image 
                src="/user1.jpeg"  // Reemplaza con tu imagen
                alt="Matias Prieto"
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-2xl"
              />
            </div>
          </div>

          {/* Columna de Texto */}
          <div data-aos="fade-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Hola, soy <span className="text-blue-600">Prieto Matías</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Desarrollador Web Full Stack apasionado por crear soluciones 
              digitales innovadoras y experiencias de usuario excepcionales.
            </p>

            {/* Botones de Acción */}
            <div className="flex space-x-4">
            <Link href="/CV.pdf" legacyBehavior>
        <a
          target='_blank'
          className="flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          download
        >
          <DownloadIcon className="mr-2" />
          Descargar CV
        </a>
      </Link>
              <Link href="/contact" className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">

                  Contáctame
                
              </Link>
            </div>
          </div>
        </div>

        {/* Sección de Habilidades */}
       
        {/* Resumen de Secciones */}
        <div 
          data-aos="fade-up"
          className="mt-16 bg-blue-50 rounded-xl p-8 text-center"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Un Vistazo a Mi Portafolio
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-4xl font-bold text-blue-600">2</h3>
              <p className="text-gray-600">Años de Experiencia</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">+5</h3>
              <p className="text-gray-600">Proyectos Completados</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">+5</h3>
              <p className="text-gray-600">Tecnologías Dominadas</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">100%</h3>
              <p className="text-gray-600">Compromiso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main