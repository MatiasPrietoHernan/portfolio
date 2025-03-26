import React from 'react'
import Image from 'next/image'
import { 
  CodeIcon, 
  DatabaseIcon, 
  ServerIcon, 
  BookOpenIcon, 
  TargetIcon, 
  SmileIcon 
} from 'lucide-react'

const About = () => {
  const skills = [
    { 
      icon: <CodeIcon className="w-8 h-8 text-blue-500" />, 
      title: "Frontend Development", 
      description: "Creación de interfaces modernas y responsivas usando React, Next.js y Tailwind CSS." 
    },
    { 
      icon: <ServerIcon className="w-8 h-8 text-green-500" />, 
      title: "Backend Development", 
      description: "Desarrollo de APIs robustas con Node.js, Express, .Net Web Api." 
    },
    { 
      icon: <DatabaseIcon className="w-8 h-8 text-purple-500" />, 
      title: "Database Management", 
      description: "Diseño e implementación de esquemas de bases de datos eficientes y escalables en bases de datos como MongoDB y SQLServer." 
    }
  ]

  const personalQualities = [
    { 
      icon: <BookOpenIcon className="w-6 h-6 text-indigo-500" />, 
      text: "Aprendizaje continuo" 
    },
    { 
      icon: <TargetIcon className="w-6 h-6 text-green-500" />, 
      text: "Orientado a resultados" 
    },
    { 
      icon: <SmileIcon className="w-6 h-6 text-yellow-500" />, 
      text: "Trabajo en equipo" 
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen y Perfil */}
          <div className="flex flex-col items-center">
            <div className="w-64 h-64 mb-6 relative">
              <Image 
                src="/user1.jpeg"  // Reemplaza con tu imagen
                alt="Tu Nombre"
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-lg"
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Prieto Matías Hernán
            </h2>
            <p className="text-gray-600 text-center max-w-md">
              Desarrollador web y de escritorio apasionado por crear soluciones innovadoras, escalables y 
              experiencias digitales excepcionales. Continuamente aprendiendo y adaptándome a nuevas tecnologías para ofrecer soluciones de alta calidad.
            </p>
          </div>

          {/* Contenido Principal */}
          <div>
            {/* Habilidades */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Mis Habilidades
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center mb-3">
                      {skill.icon}
                      <h4 className="ml-4 text-xl font-medium text-gray-800">
                        {skill.title}
                      </h4>
                    </div>
                    <p className="text-gray-600">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cualidades Personales */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Mis Cualidades
              </h3>
              <div className="flex space-x-4">
                {personalQualities.map((quality, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md w-full"
                  >
                    {quality.icon}
                    <span className="mt-2 text-gray-700">
                      {quality.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About