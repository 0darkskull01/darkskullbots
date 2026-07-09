import { Database, LayoutGrid, ShieldAlert, FileCode } from 'lucide-react';

export default function FeaturesGrid() {
  const specs = [
    {
      icon: LayoutGrid,
      title: 'Arquitectura Monorepo NPM',
      description: 'Estructurado de manera limpia en paquetes independientes: core para bots, dashboard para la interfaz React, desktop para el empaquetado Electron y lite para ejecución ligera.'
    },
    {
      icon: Database,
      title: 'Base de Datos SQLite Local',
      description: 'Tus credenciales, configuraciones de IA y macros personalizadas se almacenan de forma local y encriptada usando SQLite. Máxima privacidad, velocidad y cero dependencias externas.'
    },
    {
      icon: ShieldAlert,
      title: 'Proxy Pool Integrado',
      description: 'Enruta a tus bots a través de servidores proxies independientes (SOCKS4/SOCKS5/HTTP). Evita baneos de IP o restricciones de conexiones concurrentes en cualquier servidor.'
    },
    {
      icon: FileCode,
      title: 'Soporte Nativo JS & TypeScript',
      description: 'Crea tus macros utilizando JavaScript moderno o aprovecha el tipado estático con TypeScript. Ofrece autocompletado de tipos oficial para Mineflayer de inmediato.'
    }
  ];

  return (
    <section className="section" id="features-grid">
      <div className="neon-orb orb-cyan" style={{ bottom: '10%', right: '5%', top: 'auto' }}></div>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Especificaciones <span className="text-gradient-cyan-purple">Técnicas</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
            Diseñado bajo los estándares más modernos de desarrollo para ofrecer el máximo rendimiento y estabilidad.
          </p>
        </div>

        <div className="features-grid">
          {specs.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="glass-card feature-card">
                <div className="feature-icon-wrapper">
                  <IconComponent size={20} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
