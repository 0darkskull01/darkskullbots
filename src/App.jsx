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
import ParticleBackground from './components/ParticleBackground';
import PaymentPage from './components/PaymentPage';

// ── Social Icons ────────────────────────────────────────────────────────────
const DiscordSvg = () => (
  <svg viewBox="0 0 127.14 96.36" width="16" height="16" fill="currentColor">
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
  </svg>
);

const MoneroSvg = () => (
  <svg viewBox="0 0 128 128" width="16" height="16">
    <circle cx="64" cy="64" r="64" fill="#F26822" />
    <path d="M0 64 A64 64 0 0 0 128 64 Z" fill="#4C4C4C" />
    <path d="M18 96 L18 42 L64 80 L110 42 L110 96 L96 96 L96 58 L64 86 L32 58 L32 96 Z" fill="white" />
    <path d="M64 80 L50 66 L78 66 Z" fill="white" />
  </svg>
);

// ── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              Dark<span style={{ color: 'var(--color-primary)' }}>Skull</span>Bots
            </a>
            <p className="footer-brand-desc">
              La plataforma de automatización de bots de Minecraft más avanzada del mercado. Controla, automatiza y domina cualquier servidor.
            </p>
            <div className="footer-social-links">
              <a
                href="https://discord.com/users/_darkskull."
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="Discord"
              >
                <DiscordSvg />
              </a>
              <a
                href="mailto:darkskullz01@proton.me"
                className="footer-social-btn"
                title="Email"
              >
                ✉
              </a>
              <a
                href="#payment"
                className="footer-social-btn"
                title="Monero XMR"
              >
                <MoneroSvg />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="footer-col-title">Navegación</div>
            <div className="footer-links">
              <a href="#hero" className="footer-link">Inicio</a>
              <a href="#modules" className="footer-link">Módulos</a>
              <a href="#ai" className="footer-link">IA Coder</a>
              <a href="#console" className="footer-link">Consola</a>
              <a href="#mapart" className="footer-link">MapArt</a>
              <a href="#how-it-works" className="footer-link">Cómo Funciona</a>
              <a href="#pricing" className="footer-link">Licencia</a>
              <a href="#faq" className="footer-link">FAQ</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-col-title">Contacto</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div className="footer-contact-item">
                <span>✉</span>
                <a href="mailto:darkskullz01@proton.me">darkskullz01@proton.me</a>
              </div>
              <div className="footer-contact-item">
                <DiscordSvg />
                <a href="https://discord.com/users/_darkskull." target="_blank" rel="noopener noreferrer">
                  _darkskull.
                </a>
              </div>
              <div style={{ marginTop: '0.5rem' }}>
                <a href="#payment" className="btn btn-outline-cyan" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
                  Adquirir Licencia →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} DarkSkullBots. Todos los derechos reservados.
          </p>
          <p className="footer-disclaimer">
            Software independiente no afiliado con Mojang Synergies AB, Microsoft Corporation ni Minecraft de ninguna manera.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState(window.location.hash === '#payment' ? 'payment' : 'home');

  // Hash-based router
  useEffect(() => {
    let lastHash = window.location.hash;

    const onHashChange = () => {
      const currentHash = window.location.hash;
      const isPayment = currentHash === '#payment';
      setPage(isPayment ? 'payment' : 'home');

      if (lastHash === '#payment' && !isPayment) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
      lastHash = currentHash;
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Scroll reveal
  useEffect(() => {
    if (page !== 'home') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.05 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    return () => revealElements.forEach((el) => observer.unobserve(el));
  }, [page]);

  return (
    <>
      <ParticleBackground />

      {/* Background decorative orbs */}
      <div className="neon-orb orb-purple" />
      <div className="neon-orb orb-cyan" style={{ bottom: '15%', left: '10%', top: 'auto' }} />

      {page === 'payment' ? (
        <PaymentPage />
      ) : (
        <>
          <Header />

          <main>
            {/* 1. Hero */}
            <div className="reveal"><Hero /></div>

            <div className="section-divider" />

            {/* 2. Stats */}
            <div className="reveal"><Stats /></div>

            <div className="section-divider" />

            {/* 3. Modules */}
            <div className="reveal"><Modules /></div>

            <div className="section-divider" />

            {/* 4. Features Grid */}
            <div className="reveal"><FeaturesGrid /></div>

            <div className="section-divider" />

            {/* 5. AI Showcase */}
            <div className="reveal"><AIShowcase /></div>

            <div className="section-divider" />

            {/* 6. Coder Console */}
            <div className="reveal"><CoderConsole /></div>

            <div className="section-divider" />

            {/* 7. MapArt Simulator */}
            <div className="reveal"><MapArtSimulator /></div>

            <div className="section-divider" />

            {/* 8. How It Works */}
            <div className="reveal"><HowItWorks /></div>

            <div className="section-divider" />

            {/* 9. Pricing */}
            <div className="reveal"><Pricing /></div>

            <div className="section-divider" />

            {/* 10. FAQ */}
            <div className="reveal"><FAQ /></div>
          </main>

          <Footer />
        </>
      )}
    </>
  );
}
