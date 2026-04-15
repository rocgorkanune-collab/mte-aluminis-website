import React from 'react';
import { Phone, MessageCircle, Star, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { companyInfo } from '../mock/data';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola, me gustaría solicitar información sobre sus servicios de carpintería metálica.');
    window.open(`https://wa.me/34673196231?text=${message}`, '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_mte-aluminis/artifacts/9ksgnn14_image.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(companyInfo.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-400'}`} 
                  />
                ))}
              </div>
              <span className="text-white font-semibold">{companyInfo.rating}/5</span>
              <span className="text-slate-300 text-sm">({companyInfo.reviewCount} opiniones)</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
                Expertos en
                <span className="block bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent">
                  Aluminio y PVC
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 font-light">
                Transformamos espacios con carpintería metálica de alta calidad en Terrassa
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4">
              {['Instalación Profesional', 'Materiales Premium', 'Eficiencia Energética', 'Atención Personalizada'].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white text-lg px-8 py-6 shadow-2xl hover:shadow-sky-500/50 transition-all duration-300 group"
              >
                Solicitar Presupuesto
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={handleWhatsApp}
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-2 text-slate-300">
              <Phone className="w-5 h-5 text-sky-400" />
              <a 
                href="tel:+34673196231" 
                className="text-lg font-semibold hover:text-sky-400 transition-colors"
              >
                +34 673 19 62 31
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://customer-assets.emergentagent.com/job_mte-aluminis/artifacts/9ksgnn14_image.png"
                alt="Instalación profesional de carpintería metálica"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 max-w-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-lg">Calidad Garantizada</div>
                  <div className="text-slate-600 text-sm">Proyectos de gran envergadura completados con éxito</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
