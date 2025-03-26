'use client'
import React, { useState } from 'react'
import { 
  MailIcon, 
  PhoneIcon, 
  MapPinIcon, 
  SendIcon, 
  LinkedinIcon, 
  GithubIcon, 
  FacebookIcon 
} from 'lucide-react'

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (data.message === "Correo enviado correctamente") {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Hubo un error al enviar el mensaje");
      };
    } catch (error) {
      console.error('Error al enviar el formulario', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { 
      icon: <LinkedinIcon className="w-6 h-6" />, 
      href: "https://linkedin.com/in/tuusuario" 
    },
    { 
      icon: <GithubIcon className="w-6 h-6" />, 
      href: "https://github.com/tuusuario" 
    },
    { 
      icon: <FacebookIcon className="w-6 h-6" />, 
      href: "https://www.facebook.com/share/1EZBEfmNkR/" 
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Contáctame
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? 
            Estoy abierto a nuevas oportunidades y conversaciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Información de Contacto
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <MailIcon className="w-6 h-6 text-blue-500 mr-4" />
                <span className="text-gray-700">matiasprietohernan@gmail.com</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="w-6 h-6 text-green-500 mr-4" />
                <span className="text-gray-700">+54 381 607-9212</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="w-6 h-6 text-red-500 mr-4" />
                <span className="text-gray-700">San Miguel de Tucuman, Argentina</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-medium text-gray-800 mb-4">
                Sígueme
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Envíame un Mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <SendIcon className="mr-2" /> Enviar Mensaje
                  </>
                )}
              </button>

              {submitSuccess && (
                <div className="mt-4 text-green-600 text-center">
                  ¡Mensaje enviado exitosamente!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact