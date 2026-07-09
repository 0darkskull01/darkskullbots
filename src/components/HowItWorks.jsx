import React from 'react';
import { Settings, Code, Eye } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Settings,
      step: '01',
      title: 'Configura',
      description: 'Lanza la aplicación nativa, configura tus credenciales de Minecraft, tus proxies y selecciona tu modelo de IA (local con Ollama o en la nube).'
    },
    {
      icon: Code,
      step: '02',
      title: 'Ordena o Programa',
      description: 'Escribe órdenes en lenguaje natural como "mina un túnel de 5x5" para que la IA genere el código, o escribe tus propios scripts en la Consola JavaScript.'
    },
    {
      icon: Eye,
      step: '03',
      title: 'Monitorea en Vivo',
      description: 'Despliega la squad de bots y supervisa su inventario, salud, coordenadas y logs de salida en tiempo real directamente desde el dashboard gráfico.'
    }
  ];

  return (
    <section className="section" id="how-it-works" style={{ background: 'rgba(7, 3, 14, 0.2)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            ¿Cómo <span className="text-gradient-cyan-purple">Funciona</span>?
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
            Desplegar y controlar tus bots es extremadamente sencillo. Te tomará menos de 2 minutos iniciar.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="glass-card" style={{ position: 'relative', overflow: 'hidden' }}>
                <span style={{ position: 'absolute', top: '1rem', right: '1.5rem', fontSize: '3.5rem', fontWeight: 900, opacity: 0.05, fontFamily: 'var(--font-mono)' }}>
                  {item.step}
                </span>
                
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(189, 0, 255, 0.1)', border: '1px solid rgba(189, 0, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>
                  <IconComponent size={22} />
                </div>

                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
                  {item.step}. {item.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
