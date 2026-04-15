import React from 'react';
import { Building2, Calendar } from 'lucide-react';
import { projects } from '../mock/data';

export const Projects = () => {
  return (
    <section id="proyectos" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-sky-400 font-semibold text-sm uppercase tracking-wider bg-sky-500/10 px-4 py-2 rounded-full border border-sky-500/20">
              Nuestros Proyectos
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Trabajos Realizados con Éxito
          </h2>
          <p className="text-xl text-slate-300">
            Experiencia demostrada en proyectos residenciales y comerciales de gran envergadura
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-slate-800 hover:transform hover:scale-[1.02] transition-all duration-300"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: 'slideInUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 pt-2 text-sm text-slate-400">
                  <div className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" />
                    <span>{project.category}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-300 text-lg mb-6">
            ¿Quieres ver tu proyecto realizado con la misma calidad?
          </p>
          <button 
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/30"
          >
            Solicita tu Presupuesto
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
