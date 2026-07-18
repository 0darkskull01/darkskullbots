import { Database, LayoutGrid, ShieldAlert, FileCode, RefreshCcw, UserCheck } from 'lucide-react';

const SPECS = [
  {
    num: '01',
    icon: LayoutGrid,
    title: 'Arquitectura Monorepo NPM',
    description: 'Estructurado en paquetes independientes: core para bots, dashboard React, desktop Electron y lite para ejecución headless en servidores remotos.',
  },
  {
    num: '02',
    icon: Database,
    title: 'Base de Datos SQLite Local',
    description: 'Credenciales, configuraciones de IA y macros personalizadas se almacenan cifradas con AES-256 en SQLite local. Máxima privacidad, velocidad y cero dependencias externas.',
  },
  {
    num: '03',
    icon: ShieldAlert,
    title: 'Proxy Pool Integrado',
    description: 'Enruta tus bots a través de proxies independientes (SOCKS4/SOCKS5/HTTP). Evita baneos de IP y restricciones de conexiones concurrentes en cualquier servidor.',
  },
  {
    num: '04',
    icon: FileCode,
    title: 'Soporte Nativo JS & TypeScript',
    description: 'Crea macros usando JavaScript moderno o TypeScript con autocompletado de tipos oficial para Mineflayer desde el primer momento.',
  },
  {
    num: '05',
    icon: RefreshCcw,
    title: 'Auto-Reconexión Inteligente',
    description: 'Los bots se reconectan automáticamente ante caídas del servidor, kicks o pérdidas de conexión, con backoff exponencial para no saturar el servidor.',
  },
  {
    num: '06',
    icon: UserCheck,
    title: 'Multi-Auth: Offline y Microsoft',
    description: 'Soporte nativo para cuentas piratas (offline) y cuentas premium de Microsoft. Cambia entre modos de autenticación sin reiniciar la aplicación.',
  },
];

export default function FeaturesGrid() {
  return (
    <section className="section" id="features-grid">
      <div className="neon-orb orb-cyan" style={{ bottom: '10%', right: '5%', top: 'auto' }} />
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Especificaciones <span className="text-gradient-cyan-purple">Técnicas</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto' }}>
            Diseñado bajo los estándares más modernos de desarrollo para ofrecer el máximo rendimiento y estabilidad sin compromisos.
          </p>
        </div>

        <div className="features-grid">
          {SPECS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="glass-card feature-card">
                <span className="feature-card-number">{item.num}</span>
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
