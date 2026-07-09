import React from 'react';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'NightCraft',
    role: 'Admin de servidor survival',
    text: 'Increíble software. Mis bots de farming funcionan 24/7 sin problemas, y la IA local con Ollama genera scripts perfectos sin necesidad de internet.',
    stars: 5
  },
  {
    name: 'xR4iDeR',
    role: 'Jugador competitivo',
    text: 'El módulo de Scout con radar de jugadores me da una ventaja brutal. Y todo corre localmente en mi PC, nada en la nube. Privacidad total.',
    stars: 5
  },
  {
    name: 'BuilderMX',
    role: 'Youtuber de Minecraft',
    text: 'Usé el módulo de Building para construir una ciudad entera usando esquemas. Los bots pausan solos cuando les faltan materiales. Es como magia.',
    stars: 5
  },
  {
    name: 'ProxyKing',
    role: 'Administrador de red de bots',
    text: 'El soporte de proxy pool individual por bot es exactamente lo que necesitaba. La interfaz Electron es rapidísima y se ve increíble en Linux.',
    stars: 4
  }
];

export default function Testimonials() {
  return (
    <section className="section" id="testimonials" style={{ background: 'rgba(7, 3, 14, 0.3)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Lo Que Dicen Nuestros <span className="text-gradient-cyan-purple">Usuarios</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
            Jugadores de todo el mundo confían en DarkSkullBots para automatizar sus servidores.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2rem' }}>
              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < t.stars ? '#ffb900' : 'transparent'}
                    color={i < t.stars ? '#ffb900' : 'var(--color-text-muted)'}
                  />
                ))}
              </div>

              {/* Quote */}
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                "{t.text}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '50%',
                  background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem', fontWeight: 900, color: '#07030e'
                }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
