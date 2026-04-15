import React from 'react';
import { Star, Quote } from 'lucide-react';
import { reviews, companyInfo } from '../mock/data';

export const Reviews = () => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} 
      />
    ));
  };

  return (
    <section id="opiniones" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider bg-sky-50 px-4 py-2 rounded-full">
              Opiniones
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-slate-600 mb-6">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
          
          {/* Overall Rating */}
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl shadow-lg px-8 py-4 border border-slate-200">
            <div className="flex">
              {renderStars(Math.floor(companyInfo.rating))}
            </div>
            <div className="border-l border-slate-300 pl-4">
              <div className="text-3xl font-bold text-slate-900">{companyInfo.rating}</div>
              <div className="text-sm text-slate-600">{companyInfo.reviewCount} opiniones</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={review.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 relative"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInScale 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-12 h-12 text-sky-100" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-slate-700 leading-relaxed mb-6 relative z-10">
                "{review.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <div className="font-bold text-slate-900">{review.author}</div>
                  <div className="text-sm text-slate-500">{review.date}</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-white font-bold text-lg">
                  {review.author.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              ¿Listo para unirte a nuestros clientes satisfechos?
            </h3>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              Contáctanos hoy y descubre por qué somos la elección preferida en Terrassa
            </p>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Solicita tu Presupuesto Gratis
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};
