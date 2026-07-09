import React from 'react';
import { Bot, Server, Zap, Globe } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Bot, value: '50+', label: 'Bots Simultáneos', color: 'var(--color-primary)' },
    { icon: Server, value: '7', label: 'Módulos de Automatización', color: 'var(--color-secondary)' },
    { icon: Zap, value: '<2min', label: 'Tiempo de Despliegue', color: 'var(--color-accent)' },
    { icon: Globe, value: '∞', label: 'Servidores Compatibles', color: 'var(--color-primary)' }
  ];

  return (
    <section style={{ padding: '4rem 0', position: 'relative' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.04) 0%, rgba(189, 0, 255, 0.04) 100%)',
          border: '1px solid var(--color-border)',
          borderRadius: '16px',
          padding: '3rem 2rem'
        }}>
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: `${stat.color}15`, border: `1px solid ${stat.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1rem', color: stat.color
                }}>
                  <IconComponent size={22} />
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: stat.color, lineHeight: 1, marginBottom: '0.5rem' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
