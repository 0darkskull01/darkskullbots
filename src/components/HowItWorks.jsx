import React from 'react';
import { Settings, Code, Monitor } from 'lucide-react';

const STEPS = [
  {
    icon: Settings,
    step: '01',
    title: 'Configura',
    description: 'Lanza la aplicación nativa, configura tus credenciales de Minecraft, tus proxies y elige tu modelo de IA (local con Ollama o en la nube con OpenAI/DeepSeek).',
  },
  {
    icon: Code,
    step: '02',
    title: 'Ordena o Programa',
    description: 'Escribe órdenes en lenguaje natural como "mina un túnel de 5x5" para que la IA genere el código, o escribe tus propios scripts en la Consola JavaScript integrada.',
  },
  {
    icon: Monitor,
    step: '03',
    title: 'Monitorea en Vivo',
    description: 'Despliega tu squad de bots y supervisa inventario, salud, coordenadas y logs de salida en tiempo real directamente desde el dashboard gráfico nativo.',
  },
];

export default function HowItWorks() {
  return (
    <section
      className="section"
      id="how-it-works"
      style={{ background: 'rgba(7, 3, 14, 0.2)' }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            ¿Cómo <span className="text-gradient-cyan-purple">Funciona</span>?
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto' }}>
            Desplegar y controlar tus bots es extremadamente sencillo. Te tomará menos de 2 minutos iniciar tu primera squad.
          </p>
        </div>

        <div className="how-steps-grid">
          {STEPS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="glass-card how-step-card">
                <span className="how-step-bg-number">{item.step}</span>

                <div className="how-step-number-circle">
                  <IconComponent size={22} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div
          style={{
            marginTop: '4rem',
            textAlign: 'center',
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(0,229,255,0.04), rgba(176,38,255,0.04))',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
          }}
        >
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', marginBottom: '1.25rem' }}>
            🚀 ¿Listo para empezar? Es más fácil de lo que crees.
          </p>
          <a href="#pricing" className="btn btn-primary">
            Obtener mi Licencia Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
