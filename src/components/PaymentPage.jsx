import React, { useState } from 'react';
import { Copy, Check, Mail, ArrowLeft, ShieldCheck } from 'lucide-react';

// Official Monero logo: icon-only (circle + M)
const MoneroIcon = ({ size = 32, style = {} }) => (
  <svg viewBox="0 0 128 128" width={size} height={size} style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}>
    {/* Orange full circle */}
    <circle cx="64" cy="64" r="64" fill="#F26822" />
    {/* Dark grey bottom half-circle overlay */}
    <path d="M0 64 A64 64 0 0 0 128 64 Z" fill="#4C4C4C" />
    {/* White M shape */}
    <path d="M18 96 L18 42 L64 80 L110 42 L110 96 L96 96 L96 58 L64 86 L32 58 L32 96 Z" fill="white" />
    {/* White center v-notch */}
    <path d="M64 80 L50 66 L78 66 Z" fill="white" />
  </svg>
);

// Full logo: icon + MONERO wordmark
const MoneroLogoFull = ({ height = 52, style = {} }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', ...style }}>
    <MoneroIcon size={height} />
    <span style={{
      fontFamily: "'Arial Black', 'Arial', sans-serif",
      fontWeight: 900,
      fontSize: `${height * 0.65}px`,
      color: '#4C4C4C',
      letterSpacing: '0.05em',
      lineHeight: 1,
      userSelect: 'none',
    }}>MONERO</span>
  </div>
);

// Official Discord logo SVG
const DiscordIcon = ({ size = 32, style = {} }) => (
  <svg viewBox="0 0 127.14 96.36" width={size} height={size} style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}>
    <path
      fill="white"
      d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
    />
  </svg>
);

export default function PaymentPage() {
  const [copied, setCopied] = useState(false);
  const xmrAddress = '49k5ie2JmKKMFUtCAGs7bi6buL2uJN3y4byrCnsuJFj7FfM5gNNybQgTqLhKVprGNoQ9UQWguMZVYfFj3P6W1BgzRXnopgz';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(xmrAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const goBack = () => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      {/* Neon orbs for ambiance */}
      <div className="neon-orb orb-purple" style={{ top: '-100px', left: '-200px' }}></div>
      <div className="neon-orb orb-cyan" style={{ bottom: '-100px', right: '-200px', top: 'auto' }}></div>

      <div style={{ width: '100%', maxWidth: '620px' }}>
        {/* Back Button */}
        <button
          onClick={goBack}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'none', border: '1px solid var(--color-border)',
            color: 'var(--color-text-secondary)', padding: '0.5rem 1rem',
            borderRadius: '9999px', cursor: 'pointer', marginBottom: '2.5rem',
            fontSize: '0.88rem', transition: 'all 0.3s ease',
            fontFamily: 'var(--font-sans)'
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.color = 'var(--color-primary)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
        >
          <ArrowLeft size={15} />
          Volver al inicio
        </button>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          {/* Official Monero Logo */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', background: 'rgba(242, 104, 34, 0.06)', border: '1px solid rgba(242, 104, 34, 0.15)', borderRadius: '16px', padding: '1.1rem 2rem', width: 'fit-content', margin: '0 auto 1.5rem' }}>
            <MoneroLogoFull height={48} />
          </div>
          <h1 style={{ fontSize: '2.6rem', lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
            Adquirir <span className="text-gradient-cyan-purple">Licencia</span>
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.65 }}>
            Para mantener la soberanía y la privacidad del proyecto, aceptamos aportes en <strong style={{ color: 'var(--color-text-primary)' }}>Monero (XMR)</strong> y consultas directas vía email.
          </p>
        </div>

        {/* Privacy Badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.65rem', background: 'rgba(57, 255, 20, 0.05)', border: '1px solid rgba(57, 255, 20, 0.12)', borderRadius: '10px', padding: '0.75rem 1.5rem', marginBottom: '2rem' }}>
          <ShieldCheck size={16} color="var(--color-accent)" />
          <span style={{ fontSize: '0.85rem', color: 'var(--color-accent)', fontWeight: 600 }}>
            Pago privado y anónimo — Sin datos personales requeridos
          </span>
        </div>

        {/* Cards Row — 3 columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginBottom: '1.5rem' }}>
          {/* Email Card */}
          <div className="glass-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
            <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'rgba(0, 229, 255, 0.1)', border: '1px solid rgba(0, 229, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
              <Mail size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '0.3rem' }}>Contacto Email</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.85rem', lineHeight: 1.5 }}>Para propuestas, soporte o dudas</p>
            </div>
            <a
              href="mailto:darkskullz01@proton.me"
              style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', borderBottom: '1px dashed rgba(0,229,255,0.4)', paddingBottom: '2px', fontFamily: 'var(--font-mono)' }}
            >
              darkskullz01@proton.me
            </a>
          </div>

          {/* Discord Card */}
          <div className="glass-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
            <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'rgba(88, 101, 242, 0.15)', border: '1px solid rgba(88, 101, 242, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#5865F2' }}>
              <DiscordIcon size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '0.3rem' }}>Discord</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.85rem', lineHeight: 1.5 }}>Contacto directo y soporte</p>
            </div>
            <a
              href="https://discord.com/users/_darkskull."
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: 'rgba(88, 101, 242, 0.15)', color: '#a5b4fc', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', padding: '0.45rem 1rem', borderRadius: '8px', border: '1px solid rgba(88, 101, 242, 0.3)', fontFamily: 'var(--font-mono)' }}
            >
              _darkskull.
            </a>
          </div>

          {/* Monero Card */}
          <div className="glass-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
            <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'rgba(242, 104, 34, 0.1)', border: '1px solid rgba(242, 104, 34, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MoneroIcon size={26} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '0.3rem' }}>Monero Wallet</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.85rem', lineHeight: 1.5 }}>Privacidad garantizada (XMR)</p>
            </div>
            <a
              href={`monero:${xmrAddress}`}
              style={{ background: 'rgba(255, 102, 0, 0.12)', color: '#ffb380', fontWeight: 700, fontSize: '0.82rem', textDecoration: 'none', padding: '0.45rem 1rem', borderRadius: '8px', border: '1px solid rgba(255, 102, 0, 0.25)', transition: 'all 0.3s ease' }}
            >
              Abrir en Wallet
            </a>
          </div>
        </div>

        {/* XMR Address Box */}
        <div className="glass-card" style={{ padding: '1.75rem' }}>
          <h5 style={{ textTransform: 'uppercase', fontSize: '0.72rem', color: 'var(--color-text-muted)', letterSpacing: '0.06em', marginBottom: '0.85rem', textAlign: 'center' }}>
            Dirección de Monero (XMR) — Copia y pega en tu wallet
          </h5>
          <div style={{ display: 'flex', background: '#040209', border: '1px solid rgba(0, 229, 255, 0.1)', borderRadius: '10px', padding: '0.85rem 1.1rem', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#cbd5e1', flex: 1, overflowX: 'auto', whiteSpace: 'nowrap', scrollbarWidth: 'none' }}>
              {xmrAddress}
            </span>
            <button
              onClick={copyToClipboard}
              style={{
                background: copied ? 'var(--color-accent)' : 'rgba(0, 229, 255, 0.08)',
                color: copied ? '#050208' : 'var(--color-primary)',
                border: `1px solid ${copied ? 'transparent' : 'rgba(0, 229, 255, 0.2)'}`,
                borderRadius: '7px',
                padding: '0.5rem 1rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                transition: 'all 0.3s ease',
                flexShrink: 0,
                fontFamily: 'var(--font-sans)'
              }}
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              {copied ? '¡Copiado!' : 'Copiar'}
            </button>
          </div>

          {/* Instructions */}
          <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(255, 255, 255, 0.015)', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
            <p style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
              📌 <strong>Pasos:</strong> Copia la dirección XMR → Ábrela en tu wallet de Monero (Feather, GUI Wallet, etc.) → Envía el monto de tu plan → Una vez confirmada la transacción, envía el comprobante o hash de TX al email de contacto y recibirás tu clave de licencia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
