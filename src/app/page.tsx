'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['servicios', 'productos', 'ubicaciones', 'contacto'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="relative mr-4">
                <Image
                  src="/logo-regis.png"
                  alt="Logo Farmacias Regis"
                  width={60}
                  height={60}
                  className="rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-green-800 hover:text-green-600 transition-colors">
                  Farmacias Regis
                </h1>
                <p className="text-green-600 text-sm md:text-base">Tu salud es nuestra prioridad</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              {[
                { href: '#servicios', label: 'Servicios' },
                { href: '#productos', label: 'Productos' },
                { href: '#ubicaciones', label: 'Ubicaciones' },
                { href: '#contacto', label: 'Contacto' }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === item.href.slice(1)
                      ? 'text-green-600 border-b-2 border-green-600'
                      : 'text-green-700 hover:text-green-900'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-green-600 to-green-700 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                  Cuidamos tu salud
                </span>
                <span className="block text-green-200 mt-2">con excelencia</span>
              </h2>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl md:text-2xl mb-12 text-green-100 max-w-4xl mx-auto leading-relaxed">
                Más de 20 años brindando servicios farmacéuticos de calidad con profesionales altamente capacitados
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button className="group bg-white text-green-700 px-10 py-5 rounded-full font-semibold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Encuentra tu farmacia
                </span>
              </button>
              <button className="group border-2 border-white text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Servicios 24/7
                </span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Animated wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="animate-fade-in-up">
              <h3 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
                Nuestros Servicios
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-6"></div>
              <p className="text-xl text-green-600 max-w-3xl mx-auto leading-relaxed">
                Ofrecemos una amplia gama de servicios farmacéuticos para cuidar tu salud y la de tu familia
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Venta de Medicamentos",
                description: "Amplio stock de medicamentos genéricos y de marca con precios competitivos"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Asesoría Farmacéutica",
                description: "Consulta gratuita con farmacéuticos certificados para el mejor cuidado de tu salud"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Servicio a Domicilio",
                description: "Entrega rápida y segura de medicamentos directamente en tu hogar"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Control de Presión",
                description: "Monitoreo gratuito de presión arterial y asesoría para el control de hipertensión"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Productos de Belleza",
                description: "Amplia variedad de productos de cuidado personal y cosméticos de calidad"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Atención 24/7",
                description: "Servicio de emergencia las 24 horas para casos urgentes"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-green-200 hover:border-green-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-r from-green-600 to-green-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-semibold text-green-800 mb-4 group-hover:text-green-700 transition-colors">
                  {service.title}
                </h4>
                <p className="text-green-600 leading-relaxed group-hover:text-green-700 transition-colors">
                  {service.description}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section id="productos" className="py-20 bg-green-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="animate-fade-in-up">
              <h3 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
                Productos Destacados
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-6"></div>
              <p className="text-xl text-green-600 max-w-3xl mx-auto leading-relaxed">
                Los medicamentos y productos más solicitados con los mejores precios
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Analgésicos", description: "Para el alivio del dolor", price: "$5.000" },
              { name: "Vitaminas", description: "Suplementos nutricionales", price: "$8.000" },
              { name: "Antibióticos", description: "Con receta médica", price: "$12.000" },
              { name: "Cuidado Personal", description: "Higiene y belleza", price: "$3.000" }
            ].map((product, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-green-100 hover:border-green-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-green-800 mb-2 group-hover:text-green-700 transition-colors">
                  {product.name}
                </h4>
                <p className="text-green-600 text-sm mb-4 group-hover:text-green-700 transition-colors">
                  {product.description}
                </p>
                <div className="text-green-700 font-bold text-xl group-hover:text-green-600 transition-colors">
                  Desde {product.price}
                </div>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                    Ver más
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicaciones */}
      <section id="ubicaciones" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="animate-fade-in-up">
              <h3 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
                Nuestras Ubicaciones
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-6"></div>
              <p className="text-xl text-green-600 max-w-3xl mx-auto leading-relaxed">
                Encuentra la farmacia Regis más cercana a ti
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sede Principal",
                address: "📍 Calle 100 #15-20, Bogotá",
                phone: "📞 (601) 123-4567",
                hours: "🕒 Lun - Dom: 6:00 AM - 10:00 PM"
              },
              {
                name: "Sede Norte",
                address: "📍 Carrera 15 #93-47, Bogotá",
                phone: "📞 (601) 234-5678",
                hours: "🕒 Lun - Dom: 6:00 AM - 10:00 PM"
              },
              {
                name: "Sede Sur",
                address: "📍 Avenida 68 #25-47, Bogotá",
                phone: "📞 (601) 345-6789",
                hours: "🕒 Lun - Dom: 6:00 AM - 10:00 PM"
              }
            ].map((location, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-green-200 hover:border-green-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-xl font-semibold text-green-800 mb-4 group-hover:text-green-700 transition-colors">
                  {location.name}
                </h4>
                <div className="space-y-2 text-green-600 group-hover:text-green-700 transition-colors">
                  <p>{location.address}</p>
                  <p>{location.phone}</p>
                  <p>{location.hours}</p>
                </div>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                    Ver en mapa
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="animate-fade-in-up">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Contáctanos
              </h3>
              <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                Estamos aquí para ayudarte. Comunícate con nosotros
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-2xl font-semibold mb-6">Información de Contacto</h4>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="bg-white/20 p-3 rounded-full mr-4 group-hover:bg-white/30 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="group-hover:text-green-200 transition-colors">info@farmaciasregis.com</span>
                </div>
                <div className="flex items-center group">
                  <div className="bg-white/20 p-3 rounded-full mr-4 group-hover:bg-white/30 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="group-hover:text-green-200 transition-colors">+57 (601) 123-4567</span>
                </div>
                <div className="flex items-center group">
                  <div className="bg-white/20 p-3 rounded-full mr-4 group-hover:bg-white/30 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="group-hover:text-green-200 transition-colors">Bogotá, Colombia</span>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h4 className="text-2xl font-semibold mb-6">Envíanos un Mensaje</h4>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-green-200 focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-green-200 focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300"
                />
                <textarea
                  placeholder="Tu mensaje"
                  rows={4}
                  className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-green-200 focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-white text-green-700 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-fade-in-up">
              <div className="flex items-center mb-4">
                <Image
                  src="/logo-regis.png"
                  alt="Logo Farmacias Regis"
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <h5 className="text-xl font-bold">Farmacias Regis</h5>
              </div>
              <p className="text-green-200 leading-relaxed">
                Más de 20 años cuidando tu salud con excelencia y compromiso.
              </p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h6 className="font-semibold mb-4 text-lg">Servicios</h6>
              <ul className="space-y-2 text-green-200">
                <li className="hover:text-white transition-colors cursor-pointer">Venta de Medicamentos</li>
                <li className="hover:text-white transition-colors cursor-pointer">Asesoría Farmacéutica</li>
                <li className="hover:text-white transition-colors cursor-pointer">Servicio a Domicilio</li>
                <li className="hover:text-white transition-colors cursor-pointer">Atención 24/7</li>
              </ul>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h6 className="font-semibold mb-4 text-lg">Enlaces Rápidos</h6>
              <ul className="space-y-2 text-green-200">
                <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
                <li><a href="#productos" className="hover:text-white transition-colors">Productos</a></li>
                <li><a href="#ubicaciones" className="hover:text-white transition-colors">Ubicaciones</a></li>
                <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h6 className="font-semibold mb-4 text-lg">Síguenos</h6>
              <div className="flex space-x-4">
                {[
                  { name: "Twitter", path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" },
                  { name: "Facebook", path: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" },
                  { name: "Instagram", path: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-green-200 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2024 Farmacias Regis. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
