import React, { useState } from 'react';
import { Heart, Copy, Check, Mail, Coins } from 'lucide-react';

export default function Donations() {
  const [copied, setCopied] = useState(false);
  const xmrAddress = '49k5ie2JmKKMFUtCAGs7bi6buL2uJN3y4byrCnsuJFj7FfM5gNNybQgTqLhKVprGNoQ9UQWguMZVYfFj3P6W1BgzRXnopgz';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(xmrAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section" id="donations" style={{ background: 'rgba(7, 3, 14, 0.2)' }}>
      <div className="neon-orb orb-purple" style={{ bottom: '20%', left: '5%', top: 'auto' }}></div>
      
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(189, 0, 255, 0.1)', border: '1px solid rgba(189, 0, 255, 0.2)', padding: '0.35rem 1rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>
            <Heart size={14} fill="var(--color-secondary)" />
            Apoya el Proyecto
          </div>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Donaciones y <span className="text-gradient-cyan-purple">Soporte</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.25rem' }}>
            Si te gusta BotsDarkSkull y deseas apoyar su desarrollo continuo, puedes realizar una contribución voluntaria.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {/* Intro text */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Para mantener la soberanía y la privacidad del proyecto, aceptamos aportes en **Monero (XMR)** y consultas o sugerencias directas vía email.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {/* Email Box */}
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContext: 'space-between', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(0, 229, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                <Mail size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.25rem' }}>Contacto Email</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>Para propuestas, soporte o dudas</p>
              </div>
              <a 
                href="mailto:darkskullz01@proton.me" 
                style={{
                  color: 'var(--color-primary)', 
                  fontWeight: 700, 
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  borderBottom: '1px dashed var(--color-primary)',
                  paddingBottom: '2px',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                darkskullz01@proton.me
              </a>
            </div>

            {/* Monero Box */}
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '1.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(189, 0, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)' }}>
                <Coins size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.25rem' }}>Monero Wallet</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>Privacidad garantizada (XMR)</p>
              </div>
              <a 
                href={`monero:${xmrAddress}`}
                style={{
                  background: 'rgba(189, 0, 255, 0.15)',
                  color: '#e0a0ff',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '6px',
                  border: '1px solid rgba(189, 0, 255, 0.25)'
                }}
              >
                Abrir en Wallet
              </a>
            </div>
          </div>

          {/* Address Box */}
          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2rem' }}>
            <h5 style={{ textTransform: 'uppercase', fontSize: '0.75rem', color: 'var(--color-text-muted)', letterSpacing: '0.05em', marginBottom: '0.75rem', textAlign: 'center' }}>
              Dirección de Monero (XMR)
            </h5>
            <div style={{
              display: 'flex',
              background: '#040209',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              padding: '0.75rem 1rem',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem'
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: '#cbd5e1',
                overflowX: 'auto',
                whiteSpace: 'nowrap',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}>
                {xmrAddress}
              </span>
              <button
                onClick={copyToClipboard}
                style={{
                  background: copied ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.05)',
                  color: copied ? '#050208' : 'var(--color-text-primary)',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '0.5rem 1rem',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                  flexShrink: 0
                }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? 'Copiado' : 'Copiar'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
