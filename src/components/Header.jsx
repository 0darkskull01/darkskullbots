import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';

const SECTIONS = ['hero', 'modules', 'ai', 'console', 'mapart', 'how-it-works', 'pricing', 'faq'];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section detection
      let current = 'hero';
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 968) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const links = [
    { href: '#hero', label: 'Inicio', id: 'hero' },
    { href: '#modules', label: 'Módulos', id: 'modules' },
    { href: '#ai', label: 'IA Coder', id: 'ai' },
    { href: '#console', label: 'Consola', id: 'console' },
    { href: '#mapart', label: 'MapArt', id: 'mapart' },
    { href: '#faq', label: 'FAQ', id: 'faq' },
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#hero" className="logo">
            <div className="logo-skull" aria-hidden="true">💀</div>
            <span>Dark<span style={{ color: 'var(--color-primary)' }}>Skull</span>Bots</span>
          </a>

          <ul className="nav-links" role="navigation" aria-label="Navegación principal">
            {links.map(({ href, label, id }) => (
              <li key={id}>
                <a
                  href={href}
                  className={`nav-link ${activeSection === id ? 'active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="#pricing"
              className="btn btn-outline-cyan"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.88rem' }}
            >
              <ShoppingCart size={14} />
              Adquirir
            </a>
            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`} aria-label="Menú móvil">
        {links.map(({ href, label, id }) => (
          <a
            key={id}
            href={href}
            className="mobile-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <a
          href="#pricing"
          className="btn btn-primary"
          style={{ marginTop: '0.5rem', justifyContent: 'center' }}
          onClick={() => setMenuOpen(false)}
        >
          <ShoppingCart size={16} />
          Adquirir Licencia
        </a>
      </nav>
    </>
  );
}
