import React from 'react'
import { GithubIcon, ExternalLinkIcon } from 'lucide-react'
import '@/app/globals.css';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "GestionCintaRosa",
      description: "A una aplicacion de escritorio que permite a los médicos gestionar sus pacientes y sus historiales médicos.",
      imageUrl: "/HistorialClinico.jpeg",
      githubLink: "https://github.com/MatiasPrietoHernan/GestionCintaRoja",
      technologies: ["QuestPDF", "EntityFramework", "OpenOfficeXML"]
    },
    {
      id: 2,
      title: "WebGestiónCintaRosa", 
      description: "Una aplicación web que permite a los pacientes programar citas y gestionar sus historiales médicos. En proceso.",
      imageUrl: "/GestionCintaRosaWeb.jpeg",
      githubLink: "https://github.com/MatiasPrietoHernan/WebCintaRosa",
      technologies: ["TypeScript", "Node.js", "React", "Tailwind"]
    },
    {
      id: 3,
      title: "Agenda de contactos básica",
      description: "Una agenda de contactos simple que permite marcar y desmarcar contactos como favoritos.",
      imageUrl: "/AgendaSimple.jpeg", 
      githubLink: "https://github.com/MatiasPrietoHernan/AgendaSimple",
      liveLink: "https://incandescent-piroshki-70c29b.netlify.app/",
      technologies: ["React", "Materialize", "LocalStorage"]
    },
    {
      id: 4,
      title: "Crud Básico",
      description: "Un crud simple para gestionar productos y hacer su respectiva alta, baja, modificación.",
      imageUrl: "/CrudBasico.jpeg", 
      githubLink: "https://github.com/MatiasPrietoHernan/ABMProductos",
      liveLink: "https://abmproductos.netlify.app/",
      technologies: ["React", "Materialize", "LocalStorage"]
    },
    {
      id: 5,
      title: "Aplicacion de Clima",
      description: "Una aplicacion simple que muestra el clima de una ubicación en tiempo real.",
      imageUrl: "/ClimaApp.jpeg", 
      githubLink: "https://github.com/MatiasPrietoHernan/ClimaApp",
      liveLink: "https://climamatiasprieto.netlify.app/",
      technologies: ["React", "Materialize", "LocalStorage"]
    },
    {
      id: 6,
      title: "Dashboard Streamlit",
      description: "A dashboard made with Streamlit that shows the analysis of a dataset.",
      imageUrl: "/DashboardStreamlit.jpeg", 
      githubLink: "https://github.com/MatiasPrietoHernan/streamlit",
      liveLink: "https://rtje9hegpctq33mfrcq6ed.streamlit.app/",
      technologies: ["Streamlit", "Pandas", "Numpy"]
    },
    {
      id: 7,
      title: "Supermarket Aplication",
      description: "A web application that allows users to manage a supermarket, sell products and print shopping receipts.",
      imageUrl: "/SupermercadoVacasFood.jpeg", 
      githubLink: "https://github.com/MatiasPrietoHernan/supermercado-crud",
      liveLink: "https://supermercadovacasfood.netlify.app/",
      technologies: ["React", "Materialize", "LocalStorage"]
    },
    {
      id: 8,
      title: "Pos System",
      description: "A Desktop application that allows users to manage a small business, sell products and print shopping receipts.",
      imageUrl: "/Polirubro.png", 
      githubLink: "https://github.com/AugusRojas/PolirubroNuevo",
      technologies: ["Windows Form", "SQLite3", "QuestPDF"]
    },
    {
      id: 9,
      title: "Sales estimate made with Streamlit",
      description: "A web application that allows users to estimate sales based on a dataset using artificial inteligence.",
      imageUrl: "/entrenamientoVentas.jpeg", 
      githubLink: "https://github.com/MatiasPrietoHernan/analisis-ia.git",
      liveLink: "https://matiasiaprieto.streamlit.app/",
      technologies: ["Streamlit", "Pandas", "Torch"]
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Mis proyectos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Una colección de proyectos que muestran mis habilidades en desarrollo web, escritorio, diseño y resolución de problemas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <Image 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-48 object-cover rounded-t-xl"
                width={500}
                height={600}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex items-center mb-4">
                  <span className="text-sm font-medium text-gray-500 mr-2">
                    Technologies:
                  </span>
                  <div className="flex space-x-2">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <GithubIcon className="w-6 h-6" />
                  </a>
                  { project.liveLink && <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Live Demo <ExternalLinkIcon className="w-4 h-4 ml-2" />
                  </a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects