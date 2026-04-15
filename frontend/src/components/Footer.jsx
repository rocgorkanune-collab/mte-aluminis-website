import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { companyInfo } from '../mock/data';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="https://customer-assets.emergentagent.com/job_mte-aluminis/artifacts/44s57hvq_image.png"
              alt="MTE ALUMINIS"
              className="h-12 w-auto mb-4"
            />
            <p className="text-slate-400 text-sm leading-relaxed">
              Especialistas en carpintería de aluminio y PVC en Terrassa. Calidad, profesionalidad y atención al detalle en cada proyecto.
            </p>
            <div className="flex gap-3 pt-2">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-sky-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-sky-600 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-sky-600 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {[
                { label: 'Inicio', id: 'hero' },
                { label: 'Servicios', id: 'servicios' },
                { label: 'Proyectos', id: 'proyectos' },
                { label: 'Sobre Nosotros', id: 'nosotros' },
                { label: 'Opiniones', id: 'opiniones' },
                { label: 'Contacto', id: 'contacto' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Servicios</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Ventanas de Aluminio</li>
              <li>Ventanas de PVC</li>
              <li>Puertas Correderas</li>
              <li>Cerramientos de Cristal</li>
              <li>Aislamiento Térmico</li>
              <li>Carpintería a Medida</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${companyInfo.phone}`} className="text-slate-300 hover:text-sky-400 transition-colors text-sm">
                    {companyInfo.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href={`mailto:${companyInfo.email}`} className="text-slate-300 hover:text-sky-400 transition-colors text-sm">
                    {companyInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {companyInfo.address}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} MTE ALUMINIS. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <button className="hover:text-sky-400 transition-colors">
                Política de Privacidad
              </button>
              <button className="hover:text-sky-400 transition-colors">
                Aviso Legal
              </button>
              <button className="hover:text-sky-400 transition-colors">
                Política de Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
