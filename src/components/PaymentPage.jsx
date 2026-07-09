import React, { useState } from 'react';
import { Copy, Check, Mail, Coins, ArrowLeft, Heart, ShieldCheck } from 'lucide-react';

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
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(189, 0, 255, 0.1)', border: '1px solid rgba(189, 0, 255, 0.2)', padding: '0.4rem 1.1rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-secondary)', marginBottom: '1.25rem' }}>
            <Heart size={13} fill="var(--color-secondary)" />
            Completa tu pago
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

        {/* Cards Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }}>
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

          {/* Monero Card */}
          <div className="glass-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
            <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'rgba(189, 0, 255, 0.1)', border: '1px solid rgba(189, 0, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)' }}>
              <Coins size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '0.3rem' }}>Monero Wallet</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.85rem', lineHeight: 1.5 }}>Privacidad garantizada (XMR)</p>
            </div>
            <a
              href={`monero:${xmrAddress}`}
              style={{ background: 'rgba(189, 0, 255, 0.12)', color: '#e0a0ff', fontWeight: 700, fontSize: '0.82rem', textDecoration: 'none', padding: '0.45rem 1rem', borderRadius: '8px', border: '1px solid rgba(189, 0, 255, 0.25)', transition: 'all 0.3s ease' }}
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
