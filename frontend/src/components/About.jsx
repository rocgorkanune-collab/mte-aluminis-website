import React from 'react';
import { CheckCircle2, Award, Users, Wrench } from 'lucide-react';
import { aboutText } from '../mock/data';

export const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block mb-2">
              <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider bg-sky-50 px-4 py-2 rounded-full">
                Sobre Nosotros
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
              {aboutText.title}
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              {aboutText.description}
            </p>

            <div className="bg-sky-50 border-l-4 border-sky-500 p-6 rounded-r-lg">
              <p className="text-slate-700 leading-relaxed">
                {aboutText.highlight}
              </p>
            </div>

            {/* Values List */}
            <div className="space-y-3 pt-4">
              {aboutText.values.map((value, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">{value}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-600">20+</div>
                <div className="text-sm text-slate-600 mt-1">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-600">100%</div>
                <div className="text-sm text-slate-600 mt-1">Satisfacción</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-600">4.0</div>
                <div className="text-sm text-slate-600 mt-1">Valoración</div>
              </div>
            </div>
          </div>

          {/* Image & Features */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://customer-assets.emergentagent.com/job_mte-aluminis/artifacts/9ksgnn14_image.png"
                alt="Equipo de MTE ALUMINIS en acción"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <Award className="w-8 h-8 text-sky-600 mb-3" />
                <h4 className="font-bold text-slate-900 mb-1">Calidad Premium</h4>
                <p className="text-sm text-slate-600">Materiales de primera categoría</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <Users className="w-8 h-8 text-sky-600 mb-3" />
                <h4 className="font-bold text-slate-900 mb-1">Equipo Experto</h4>
                <p className="text-sm text-slate-600">Profesionales cualificados</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow col-span-2">
                <Wrench className="w-8 h-8 text-sky-600 mb-3" />
                <h4 className="font-bold text-slate-900 mb-1">Instalación Profesional</h4>
                <p className="text-sm text-slate-600">Desde el diseño hasta el acabado final, gestionamos todo el proceso</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
