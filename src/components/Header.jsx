import React, { useState, useEffect } from 'react';
import { Cpu, Download } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="logo">
          <span>Dark<span style={{ color: 'var(--color-primary)' }}>Skull</span>Bots</span>
        </a>

        <ul className="nav-links">
          <li><a href="#hero" className="nav-link">Inicio</a></li>
          <li><a href="#modules" className="nav-link">Módulos</a></li>
          <li><a href="#ai" className="nav-link">IA Coder</a></li>
          <li><a href="#console" className="nav-link">Consola</a></li>
          <li><a href="#mapart" className="nav-link">MapArt</a></li>
          <li><a href="#faq" className="nav-link">FAQ</a></li>
          <li><a href="#pricing" className="nav-link">Licencia</a></li>
        </ul>

        <div>
          <a href="#pricing" className="btn btn-outline-cyan" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
            <Download size={14} />
            Adquirir
          </a>
        </div>
      </div>
    </header>
  );
}
