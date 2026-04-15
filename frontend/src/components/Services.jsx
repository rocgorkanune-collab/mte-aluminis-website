import React from 'react';
import { Frame, Square, Move, Layers, ShieldCheck, Ruler } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { services } from '../mock/data';

const iconMap = {
  'window': Frame,
  'square': Square,
  'move': Move,
  'square-stack': Layers,
  'shield-check': ShieldCheck,
  'ruler': Ruler
};

export const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider bg-sky-50 px-4 py-2 rounded-full">
              Nuestros Servicios
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Soluciones Completas en Carpintería Metálica
          </h2>
          <p className="text-xl text-slate-600">
            Ofrecemos una amplia gama de servicios especializados en aluminio y PVC para todo tipo de proyectos
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Frame;
            return (
              <Card 
                key={service.id}
                className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-sky-300 bg-white cursor-pointer"
                onClick={scrollToContact}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-900 group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="mt-4 flex items-center text-sky-600 font-semibold text-sm group-hover:gap-2 transition-all">
                    <span>Más información</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              Realizamos proyectos personalizados adaptados a tus necesidades específicas
            </p>
            <button 
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Consulta tu Proyecto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
