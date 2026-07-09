import React from 'react';
import { Check, X } from 'lucide-react';

export default function Pricing() {
  const commonFeatures = [
    'Autenticación Offline',
    'Todos los Módulos (Farming, Mining, Building, Elytra...)',
    'Generador de código con compatibilidad con IA local',
    'Soporte de Proxies individuales para cada Bot',
    'Persistencia local con base de datos SQLite'
  ];

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Planes de <span className="text-gradient-cyan-purple">Licencia</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
            Desbloquea el poder total de automatización inteligente eligiendo el plan que prefieras.
          </p>
        </div>

        <div className="pricing-grid" style={{ maxWidth: '960px', margin: '0 auto' }}>
          {/* Monthly License */}
          <div className="glass-card pricing-card" style={{ padding: '2.5rem' }}>
            <div className="pricing-header" style={{ marginBottom: '2rem' }}>
              <h3 className="pricing-title" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Licencia Mensual</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                Acceso completo renovable mes a mes
              </p>
              <div className="pricing-price">
                <span className="pricing-price-currency">$</span>5
                <span className="pricing-price-period">/ mes</span>
              </div>
            </div>

            <ul className="pricing-features" style={{ marginBottom: '2.5rem' }}>
              {commonFeatures.map((feat, idx) => (
                <li key={idx} className="pricing-feature-item">
                  <span className="pricing-feature-check"><Check size={16} /></span>
                  {feat}
                </li>
              ))}
              <li className="pricing-feature-item" style={{ color: 'var(--color-text-muted)' }}>
                <span className="pricing-feature-cross"><X size={16} /></span>
                Sin soporte técnico incluido
              </li>
            </ul>

            <button className="btn btn-secondary pricing-cta">
              Adquirir Mensual
            </button>
          </div>

          {/* Lifetime License */}
          <div className="glass-card pricing-card pricing-card-popular" style={{ padding: '2.5rem' }}>
            <span className="pricing-badge" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}>
              Popular
            </span>
            <div className="pricing-header" style={{ marginBottom: '2rem' }}>
              <h3 className="pricing-title" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Licencia Vitalicia</h3>
              <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', marginBottom: '1.5rem', fontWeight: 600 }}>
                Un único pago, acceso ilimitado para siempre
              </p>
              <div className="pricing-price">
                <span className="pricing-price-currency">$</span>13
                <span className="pricing-price-period">/ pago único</span>
              </div>
            </div>

            <ul className="pricing-features" style={{ marginBottom: '2.5rem' }}>
              {commonFeatures.map((feat, idx) => (
                <li key={idx} className="pricing-feature-item">
                  <span className="pricing-feature-check"><Check size={16} /></span>
                  {feat}
                </li>
              ))}
              <li className="pricing-feature-item">
                <span className="pricing-feature-check"><Check size={16} /></span>
                Soporte ilimitado 24/7
              </li>
            </ul>

            <button className="btn btn-primary pricing-cta">
              Adquirir Vitalicia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
