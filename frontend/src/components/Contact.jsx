import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { companyInfo } from '../mock/data';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    // Reset form
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola, me gustaría solicitar información sobre sus servicios de carpintería metálica.');
    window.open(`https://wa.me/34673196231?text=${message}`, '_blank');
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider bg-sky-50 px-4 py-2 rounded-full">
              Contacto
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Hablemos de tu Proyecto
          </h2>
          <p className="text-xl text-slate-600">
            Estamos aquí para ayudarte. Contáctanos y solicita tu presupuesto sin compromiso
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-50 rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Nombre Completo *
                </label>
                <Input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Teléfono *
                </label>
                <Input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+34 XXX XXX XXX"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <Input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Mensaje *
                </label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  required
                  rows={5}
                  className="w-full"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white py-6 text-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </Button>
            </form>

            {/* WhatsApp Button */}
            <div className="mt-6">
              <Button 
                onClick={handleWhatsApp}
                variant="outline"
                className="w-full border-2 border-green-500 text-green-600 hover:bg-green-50 py-6 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contactar por WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              <a 
                href={`tel:${companyInfo.phone}`}
                className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 mb-1">Teléfono</div>
                  <div className="text-sky-600 font-semibold">{companyInfo.phone}</div>
                  <div className="text-sm text-slate-500 mt-1">Lun - Vie: 9:00 - 17:00</div>
                </div>
              </a>

              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md border border-slate-200">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 mb-1">Email</div>
                  <div className="text-slate-600">{companyInfo.email}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md border border-slate-200">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 mb-1">Dirección</div>
                  <div className="text-slate-600">{companyInfo.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md border border-slate-200">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="w-full">
                  <div className="font-bold text-slate-900 mb-3">Horario</div>
                  <div className="space-y-1.5 text-sm">
                    {Object.entries(companyInfo.businessHours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between text-slate-600">
                        <span className="font-medium">{day}:</span>
                        <span>{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.4987654321!2d2.0123456789!3d41.5654321098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDMzJzU1LjYiTiAywrAwMCc0NC40IkU!5e0!3m2!1ses!2ses!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de MTE ALUMINIS"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
