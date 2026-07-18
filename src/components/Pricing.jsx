import React from 'react';
import { Check, X, Zap, Crown, Star } from 'lucide-react';

const COMMON_FEATURES = [
  'Autenticación Offline (cuentas piratas)',
  'Todos los Módulos (Farming, Mining, Building, Elytra...)',
  'Generación de código con IA (local o en la nube)',
  'Soporte de Proxies individuales por Bot',
  'Base de datos SQLite local cifrada',
  'Auto-reconexión y recuperación de errores',
];

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Planes de <span className="text-gradient-cyan-purple">Licencia</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto' }}>
            Sin suscripciones ocultas. Sin datos personales requeridos. Pago privado con Monero (XMR).
          </p>
        </div>

        <div className="pricing-grid" style={{ maxWidth: '820px', margin: '0 auto' }}>
          {/* Monthly Plan */}
          <div className="glass-card pricing-card" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <Zap size={18} color="var(--color-primary)" />
              <h3 className="pricing-title">Licencia Mensual</h3>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              Acceso completo renovable mes a mes
            </p>
            <div className="pricing-price" style={{ marginBottom: '2rem' }}>
              <span className="pricing-price-currency">$</span>
              5
              <span className="pricing-price-period">/ mes</span>
            </div>

            <ul className="pricing-features" style={{ marginBottom: '2.5rem' }}>
              {COMMON_FEATURES.map((feat, idx) => (
                <li key={idx} className="pricing-feature-item">
                  <span className="pricing-feature-check"><Check size={15} /></span>
                  {feat}
                </li>
              ))}
              <li className="pricing-feature-item" style={{ color: 'var(--color-text-muted)' }}>
                <span className="pricing-feature-cross"><X size={15} /></span>
                Sin soporte técnico incluido
              </li>
            </ul>

            <a href="#payment" className="btn btn-secondary pricing-cta">
              Adquirir Mensual
            </a>
          </div>

          {/* Lifetime Plan — popular */}
          <div
            className="pricing-card"
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '2.5rem',
              background: 'rgba(12, 6, 24, 0.75)',
              backdropFilter: 'blur(16px)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(176, 38, 255, 0.4)',
              boxShadow: '0 0 50px rgba(176, 38, 255, 0.08)',
            }}
          >
            {/* Spinning gradient border overlay */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: '-1px',
                borderRadius: 'calc(var(--radius-lg) + 1px)',
                background: 'conic-gradient(from 0deg, var(--color-primary), var(--color-secondary), var(--color-primary))',
                zIndex: -1,
                opacity: 0.5,
                animation: 'border-spin 4s linear infinite',
              }}
            />

            <span className="pricing-badge">
              <Crown size={10} style={{ display: 'inline', marginRight: '3px' }} />
              Más Popular
            </span>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <Star size={18} color="var(--color-secondary)" fill="var(--color-secondary)" />
                <h3 className="pricing-title">Licencia Vitalicia</h3>
              </div>
              <p style={{ color: 'var(--color-primary)', fontSize: '0.88rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                Un único pago, acceso ilimitado para siempre
              </p>
              <div className="pricing-savings-badge">
                <Zap size={10} fill="currentColor" />
                Ahorra $47 vs suscripción anual
              </div>
              <div className="pricing-price" style={{ marginTop: '1.25rem', marginBottom: '2rem' }}>
                <span className="pricing-price-currency">$</span>
                13
                <span className="pricing-price-period">/ pago único</span>
              </div>
            </div>

            <ul className="pricing-features" style={{ marginBottom: '2.5rem' }}>
              {COMMON_FEATURES.map((feat, idx) => (
                <li key={idx} className="pricing-feature-item">
                  <span className="pricing-feature-check"><Check size={15} /></span>
                  {feat}
                </li>
              ))}
              <li className="pricing-feature-item">
                <span className="pricing-feature-check"><Check size={15} /></span>
                <strong>Soporte ilimitado 24/7 vía Discord</strong>
              </li>
              <li className="pricing-feature-item">
                <span className="pricing-feature-check"><Check size={15} /></span>
                <strong>Todas las actualizaciones futuras incluidas</strong>
              </li>
            </ul>

            <a href="#payment" className="btn btn-primary pricing-cta">
              Adquirir Vitalicia
            </a>
          </div>
        </div>

        {/* Trust strip */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          {['🔒 Pago con Monero (privado)', '⚡ Activación en minutos', '🛡️ Sin datos personales requeridos'].map((item) => (
            <span key={item} style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
