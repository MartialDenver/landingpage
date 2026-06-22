"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Notification from '@/components/Notification';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Réinitialiser le formulaire
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');

        // Afficher la notification
        setShowNotification(true);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Une erreur est survenue lors de l\'envoi du message.');
    }
  };

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const testimonials = [
    {
      name: "Loïse SERRINE",
      date: "il y a 17 jours",
      comment: "J'ai beaucoup apprécié le design de mon site web, Il me correspond parfaitement",
      image: "/image/louiseserrine.png"
    },
    {
      name: "Thomas DUPONT",
      date: "il y a 15 jours",
      comment: "Une équipe professionnelle qui a su répondre à mes attentes. Le résultat est impressionnant",
      image: "/image/thomasdupont.jpg"
    },
    {
      name: "Marie LAURENT",
      date: "il y a 12 jours",
      comment: "Service client exceptionnel et résultats au-delà de mes espérances",
      image: "/image/marielaurent.jpg"
    },
    {
      name: "Sophie MARTIN",
      date: "il y a 8 jours",
      comment: "L'expertise de l'équipe est remarquable.",
      image: "/image/sophiemartin.jpg"
    },
    {
      name: "Alexandre DUBOIS",
      date: "il y a 19 jours",
      comment: "Communication fluide et résultats exceptionnels.",
      image: "/image/alexandredubois.jpg"
    },
    {
      name: "Emma ROUSSEAU",
      date: "il y a 12 jours",
      comment: "Une équipe à l'écoute qui a parfaitement su capturer l'essence de notre marque.",
      image: "/image/emmarousseau.jpg"
    },
    // Ajoute plus de témoignages similaires...
  ];

  return (
    <div className="relative bg-gradient-to-br from-blue-900 to-black text-white min-h-screen p-4 md:p-8 overflow-x-hidden">
      <Notification
        message="Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais."
        type="success"
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
      />

      {/* Header avec menu burger pour mobile */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 mt-5">
        <div className="mx-auto max-w-7xl">
          <div className="bg-gray-400/30 backdrop-blur-md rounded-xl p-4 flex justify-between items-center">
            <div className="text-xl md:text-2xl font-bold">JHA</div>

            {/* Menu Mobile */}
            <div className="md:hidden">
              {/* Bouton burger */}
              <button
                className="relative z-[1001] p-2"
                onClick={handleMenu}
              >
                <div className="w-6 h-6 flex flex-col justify-between">
                  <span className="w-full h-0.5 bg-white"></span>
                  <span className="w-full h-0.5 bg-white"></span>
                  <span className="w-full h-0.5 bg-white"></span>
                </div>
              </button>

              {/* Overlay du menu avec animation */}
              {isMenuOpen && (
                <div
                  className="fixed inset-0 bg-white z-[1000] transition-transform duration-300 ease-out"
                  style={{
                    transform: `translateY(${isMenuOpen ? '0' : '-100%'})`,
                    animation: isMenuOpen ? 'slideDown 0.3s ease-out forwards' : 'none'
                  }}
                >
                  {/* Header sans bordure en bas */}
                  <div className="pt-4 pb-2 px-4 flex justify-between items-center">
                    <span className="text-gray-800 text-xl font-medium">Menu</span>
                    <button
                      onClick={handleMenu}
                      className="p-2 relative z-[1002]" // Augmentation du z-index
                    >
                      <svg
                        className="w-6 h-6 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Liste des liens avec espacement ajusté */}
                  <div className="flex flex-col mt-4">
                    <button
                      onClick={() => {
                        scrollToSection('hero');
                        handleMenu();
                      }}
                      className="w-full bg-white text-gray-800 text-lg px-4 py-4 text-left hover:bg-gray-50"
                    >
                      Pourquoi nous choisir ?
                    </button>

                    <button
                      onClick={() => {
                        scrollToSection('services');
                        handleMenu();
                      }}
                      className="w-full bg-white text-gray-800 text-lg px-4 py-4 text-left hover:bg-gray-50"
                    >
                      Nos services
                    </button>

                    <button
                      onClick={() => {
                        scrollToSection('contact');
                        handleMenu();
                      }}
                      className="w-full bg-white text-gray-800 text-lg px-4 py-4 text-left hover:bg-gray-50"
                    >
                      Contact
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center space-x-20">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-gray-300 transition-colors"
              >
                Pourquoi nous choisir ?
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-gray-300 transition-colors"
              >
                Nos services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-gray-300 transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* Barre de recherche */}
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800/80 text-white rounded-lg py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Ajoutez ce style dans votre balise style globale ou dans votre fichier CSS */}
      <style jsx>{`
  @keyframes slideDown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
`}</style>

      {/* Hero Section */}
      <div id="hero" className="w-11/12 md:w-10/12 mx-auto mt-32 md:mt-40 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-3/5 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="block">VOTRE MEILLEURE AGENCE</span>
            <span className="block mt-1">DIGITALE</span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-9 px-4 md:px-0">
            Chez JHA, nous mettons votre entreprise au centre de nos priorités.
            Notre équipe passionnée et experte s'engage à comprendre vos
            besoins uniques et à vous offrir des solutions innovantes. Avec nous,
            vous bénéficiez d'une communication transparente, de stratégies
            créatives et de résultats mesurables.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 items-center justify-center md:justify-start md:pl-7">
            <button onClick={() => scrollToSection('contact')}
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
              CONTACTEZ-NOUS
            </button>
            <button onClick={() => scrollToSection('contact')}
              className="w-full md:w-auto bg-transparent hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-full border-2 border-blue-800">
              PLUS D'INFORMATIONS
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/image/why-choose-us-removebg-preview.png"
            alt="Digital Agency Illustration"
            width={450}
            height={600}
            className="w-4/5 md:w-full"
          />
        </div>
      </div>

      {/* Clients satisfaits */}
      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-2 text-center md:text-left">
        <p className="text-sm md:text-base">PLUS DE 100 CLIENTS SATISFAITS</p>
        <div className="flex bg-gray-200 rounded-full px-2 py-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 md:w-6 md:h-6 text-gray-900"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16 relative w-screen -mx-4 md:-mx-8 overflow-hidden" style={{
        background: 'rgba(0, 0, 20, 0.3)',
        backdropFilter: 'blur(20px)',
      }}>
        <div className="absolute left-0 w-1/4 h-full bg-gradient-to-r from-blue-900/40 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 w-1/4 h-full bg-gradient-to-l from-blue-900/40 to-transparent z-10 pointer-events-none"></div>

        <div className="hide-scrollbar overflow-x-auto w-full px-4 md:px-8 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <div className="flex gap-4 md:gap-6 px-2 md:px-4 py-4 min-w-max">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="flex-none w-72 md:w-80 rounded-2xl p-4 md:p-6"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-600 overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm md:text-base">{testimonial.name}</h3>
                    <p className="text-xs md:text-sm text-gray-400">{testimonial.date}</p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-300">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="mt-16 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">NOS SERVICES</h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Lignes de séparation (visibles uniquement sur desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-700 hidden md:block"></div>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-700 hidden md:block"></div>

          {/* Services */}
          {/* E-mail marketing */}
          <div className="flex flex-col items-center text-center p-4 md:p-12">
            <Image
              src="/image/emailmarketing-removebg-preview.png"
              alt="E-mail marketing"
              width={300}
              height={300}
              className="w-48 md:w-auto mb-4 -mt-8 md:mb-6"
            />
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 -mt-6 md:-mt-10">E-mail marketing</h3>
            <p className="text-sm md:text-base text-gray-300">
              Transformez vos abonnés en clients fidèles avec des stratégies d'e-mailing sur mesure.
            </p>
          </div>

          {/* Génération de leads */}
          <div className="flex flex-col items-center text-center p-4 md:p-12">
            <Image
              src="/image/leads-generator-removebg-preview.png"
              alt="Génération de leads"
              width={300}
              height={300}
              className="w-48 md:w-auto mb-8 md:mb-14"
            />
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Génération de leads</h3>
            <p className="text-sm md:text-base text-gray-300">
              Nous vous aidons à attirer les bons prospects grâce à des stratégies de génération de leads personnalisées.
            </p>
          </div>

          {/* Conception Web */}
          <div className="flex flex-col items-center text-center p-4 md:p-12">
            <Image
              src="/image/conception-web-removebg-preview.png"
              alt="Conception Web"
              width={200}
              height={200}
              className="w-36 md:w-auto mb-4 md:mb-6 -mt-8 md:-mt-14"
            />
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Conception Web</h3>
            <p className="text-sm md:text-base text-gray-300">
              Transformez votre vision en réalité avec un site web unique, conçu pour captiver et convertir
            </p>
          </div>

          {/* Publicité sponsorisée */}
          <div className="flex flex-col items-center text-center p-4 md:p-12">
            <Image
              src="/image/publicité-sponsorisé-removebg-preview.png"
              alt="Publicité sponsorisée"
              width={200}
              height={200}
              className="w-36 md:w-auto mb-4 md:mb-6 -mt-8 md:-mt-14"
            />
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Publicité sponsorisée</h3>
            <p className="text-sm md:text-base text-gray-300">
              Attirez plus de clients avec des publicités en ligne percutantes et une stratégie axée sur les résultats
            </p>
          </div>
        </div>
      </div>

      {/* Section Contact */}
      <div id="contact" className="mt-12 bg-black w-screen -mx-4 md:-mx-8 py-12 md:py-20 -mb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16">CONTACTEZ NOUS</h2>

        <div className="w-11/12 md:w-10/12 mx-auto flex flex-col md:flex-row items-start justify-between gap-8 md:gap-20">
          {/* Partie gauche avec l'image et les infos */}
          <div className="w-full md:w-1/2 space-y-6">
            <Image
              src="/image/contact-us-removebg-preview.png"
              alt="Contact"
              width={500}
              height={400}
              className="w-full max-w-md mx-auto mb-4 md:mb-8 md:ml-7"
            />

            <div className="flex items-center gap-3">
              <Image
                src="/image/linkedin-48.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
              <span className="text-sm md:text-base">HOUNSOU AWAYA Joanis</span>
            </div>

            <div className="flex items-center gap-3">
              <Image
                src="/image/gmail-nouveau-48.png"
                alt="Gmail"
                width={24}
                height={24}
              />
              <span className="text-sm md:text-base break-all">joanishounsou15@gmail.com</span>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <form onSubmit={handleSubmit} className="bg-[#1a1a1a] p-4 md:p-8 rounded-3xl space-y-4 md:space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label className="block text-sm mb-2">Noms</label>
                  <input
                    type="text"
                    placeholder="Noms"
                    className="w-full bg-transparent border border-gray-700 rounded-md p-2 md:p-3 focus:outline-none focus:border-blue-500 text-sm md:text-base"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-sm mb-2">Téléphone ou whatsapp</label>
                  <input
                    type="tel"
                    placeholder="Numéro de téléphone"
                    className="w-full bg-transparent border border-gray-700 rounded-md p-2 md:p-3 focus:outline-none focus:border-blue-500 text-sm md:text-base"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">E-mail</label>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full bg-transparent border border-gray-700 rounded-md p-2 md:p-3 focus:outline-none focus:border-blue-500 text-sm md:text-base"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required />
              </div>

              <div>
                <label className="block text-sm mb-2">Sujet</label>
                <textarea
                  placeholder="Ecrivez votre message ici"
                  rows={6}
                  className="w-full bg-transparent border border-gray-700 rounded-md p-2 md:p-3 focus:outline-none focus:border-blue-500 resize-none text-sm md:text-base"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required />
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 md:py-4 px-4 md:px-6 rounded-xl text-sm md:text-base">
                SOUMETTRE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}