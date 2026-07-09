import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Modules from './components/Modules';
import FeaturesGrid from './components/FeaturesGrid';
import AIShowcase from './components/AIShowcase';
import CoderConsole from './components/CoderConsole';
import MapArtSimulator from './components/MapArtSimulator';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Donations from './components/Donations';
import ParticleBackground from './components/ParticleBackground';
import PaymentPage from './components/PaymentPage';

export default function App() {
  const [page, setPage] = useState(window.location.hash === '#payment' ? 'payment' : 'home');

  // Hash-based router
  useEffect(() => {
    const onHashChange = () => {
      setPage(window.location.hash === '#payment' ? 'payment' : 'home');
      if (window.location.hash !== '#payment') {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Interactive Particle Background Canvas */}
      <ParticleBackground />

      {/* Background Decorative Neons */}
      <div className="neon-orb orb-purple"></div>
      <div className="neon-orb orb-cyan" style={{ bottom: '15%', left: '10%', top: 'auto' }}></div>

      {/* === PAYMENT PAGE === */}
      {page === 'payment' ? (
        <PaymentPage />
      ) : (
        <>
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main>
        {/* 1. Hero */}
        <div className="reveal">
          <Hero />
        </div>

        <div className="section-divider"></div>

        {/* 2. Stats Bar */}
        <div className="reveal">
          <Stats />
        </div>

        <div className="section-divider"></div>

        {/* 3. Modules Interactivos */}
        <div className="reveal">
          <Modules />
        </div>

        <div className="section-divider"></div>

        {/* 4. Especificaciones Técnicas */}
        <div className="reveal">
          <FeaturesGrid />
        </div>

        <div className="section-divider"></div>

        {/* 5. AI Showcase */}
        <div className="reveal">
          <AIShowcase />
        </div>

        <div className="section-divider"></div>

        {/* 6. Consola Coder Multi-Bot */}
        <div className="reveal">
          <CoderConsole />
        </div>

        <div className="section-divider"></div>

        {/* 7. MapArt Simulator */}
        <div className="reveal">
          <MapArtSimulator />
        </div>

        <div className="section-divider"></div>

        {/* 8. ¿Cómo Funciona? */}
        <div className="reveal">
          <HowItWorks />
        </div>

        <div className="section-divider"></div>

        {/* 8.5. Donaciones y Soporte */}
        <div className="reveal">
          <Donations />
        </div>

        <div className="section-divider"></div>

        {/* 9. Planes de Licencia */}
        <div className="reveal">
          <Pricing />
        </div>

        <div className="section-divider"></div>

        {/* 10. FAQ */}
        <div className="reveal">
          <FAQ />
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
          <div className="container footer-container">
            <div className="footer-info">
              <div className="footer-logo">
                <span>Dark<span style={{ color: 'var(--color-primary)' }}>Skull</span>Bots</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
                © {new Date().getFullYear()} DarkSkullBots. Todos los derechos reservados.
              </p>
              <p style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', maxWidth: '400px', lineHeight: '1.4' }}>
                Descargo de responsabilidad: Este proyecto es un software independiente y no está afiliado con Mojang Synergies AB, Microsoft Corporation o Minecraft de ninguna manera.
              </p>
            </div>

            <div className="footer-links">
              <a href="#hero" className="footer-link">Inicio</a>
              <a href="#modules" className="footer-link">Módulos</a>
              <a href="#ai" className="footer-link">IA Coder</a>
              <a href="#mapart" className="footer-link">MapArt</a>
              <a href="#donations" className="footer-link">Donar</a>
              <a href="#faq" className="footer-link">FAQ</a>
              <a href="#payment" className="footer-link">Licencia</a>
            </div>
          </div>
        </footer>
        </>
      )}
    </>
  );
}
