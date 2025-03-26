import React from 'react';
import Link from 'next/link';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Github, 
  Twitter, 
  Mail 
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <Facebook className="w-6 h-6" />, 
      href: "https://www.facebook.com/share/1EZBEfmNkR/",
      label: "Facebook" 
    },
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      href: "https://www.linkedin.com/in/matias-prieto-75218a342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn" 
    },
    { 
      icon: <Instagram className="w-6 h-6" />, 
      href: "https://instagram.com/mattiprieto00",
      label: "Instagram" 
    },
    { 
      icon: <Github className="w-6 h-6" />, 
      href: "https://github.com/MatiasPrietoHernan",
      label: "GitHub" 
    }
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <footer className="bg-gray-50 text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Columna de Información */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Prieto Matías</h3>
            <p className="text-gray-600 mb-4">
              Creando soluciones digitales innovadoras que transforman ideas en realidad.
            </p>
            <a 
              href="mailto:contact@pgdev.com" 
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Mail className="mr-2 w-5 h-5" />
              matiasprietohernan@gmail.com
            </a>
          </div>

          {/* Columna de Enlaces Rápidos */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-800">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna de Redes Sociales */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-800">Sígueme</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;