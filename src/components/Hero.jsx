import React, { useState } from 'react';
import { Terminal, Shield, Cpu, Play } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard', 'terminal', 'security'

  return (
    <section className="section" id="hero">
      {/* Background Neon Orbs */}
      <div className="neon-orb orb-cyan"></div>
      <div className="neon-orb orb-purple"></div>

      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            Control Total de Bots de <span className="text-gradient-cyan-purple">Minecraft</span>
          </h1>
          <p>
            BotsDarkSkull es la aplicación de escritorio premium más avanzada del mercado. Controla decenas de bots simultáneamente, automatiza tareas complejas con IA en lenguaje natural y domina cualquier servidor con proxies individuales y reconexión automática.
          </p>
          <div className="hero-buttons">
            <a href="#payment" className="btn btn-primary">
              <Play size={18} fill="currentColor" />
              Adquirir Licencia
            </a>
            <a href="#modules" className="btn btn-secondary">
              Ver Características
            </a>
          </div>
        </div>

        <div className="hero-mockup animate-float">
          <div className="hero-mockup-wrapper">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span className="mockup-dot"></span>
                <span className="mockup-dot"></span>
                <span className="mockup-dot"></span>
              </div>
              <div className="mockup-title">BotsDarkSkull Desktop v1.0.0 — Panel Interactivo</div>
            </div>
            
            <div className="mockup-body" style={{ background: '#090514', display: 'grid', gridTemplateColumns: '70px 1fr', gap: '1rem', height: '340px', padding: '1rem' }}>
              {/* Interactive Dashboard Sidebar */}
              <div style={{ borderRight: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '0.5rem', alignItems: 'center' }}>
                <button
                  onClick={() => setActiveTab('dashboard')}
                  style={{
                    width: '38px', height: '38px', borderRadius: '8px',
                    background: activeTab === 'dashboard' ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
                    border: activeTab === 'dashboard' ? '1px solid var(--color-primary)' : '1px solid transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: activeTab === 'dashboard' ? 'var(--color-primary)' : 'var(--color-text-muted)',
                    cursor: 'pointer', transition: 'all 0.3s ease'
                  }}
                  title="Dashboard principal"
                >
                  <Cpu size={18} />
                </button>
                
                <button
                  onClick={() => setActiveTab('terminal')}
                  style={{
                    width: '38px', height: '38px', borderRadius: '8px',
                    background: activeTab === 'terminal' ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
                    border: activeTab === 'terminal' ? '1px solid var(--color-primary)' : '1px solid transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: activeTab === 'terminal' ? 'var(--color-primary)' : 'var(--color-text-muted)',
                    cursor: 'pointer', transition: 'all 0.3s ease'
                  }}
                  title="Logs de servidor"
                >
                  <Terminal size={18} />
                </button>

                <button
                  onClick={() => setActiveTab('security')}
                  style={{
                    width: '38px', height: '38px', borderRadius: '8px',
                    background: activeTab === 'security' ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
                    border: activeTab === 'security' ? '1px solid var(--color-primary)' : '1px solid transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: activeTab === 'security' ? 'var(--color-primary)' : 'var(--color-text-muted)',
                    cursor: 'pointer', transition: 'all 0.3s ease'
                  }}
                  title="Configuración de Proxies y Seguridad"
                >
                  <Shield size={18} />
                </button>
              </div>

              {/* Fake Dashboard Panel (Dynamic contents) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', overflow: 'hidden' }}>
                
                {/* 1. Dashboard View */}
                {activeTab === 'dashboard' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1fr', height: '100%', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Panel de Squad (4 bots)</div>
                      <span style={{ fontSize: '0.65rem', background: '#39ff141c', color: 'var(--color-accent)', border: '1px solid rgba(57, 255, 20, 0.2)', padding: '0.15rem 0.5rem', borderRadius: '9999px', fontWeight: 600 }}>
                        Servidor Activo
                      </span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                      {[
                        { name: 'DarkMiner_01', job: 'Mining Iron/Coal', status: 'Minando (Nether)', color: '#00f0ff' },
                        { name: 'DarkFarmer_02', job: 'Harvesting Wheat', status: 'Replantando', color: '#bd00ff' },
                        { name: 'DarkFighter_03', job: 'Sentry Defense', status: 'Vigilando spawn', color: '#39ff14' },
                        { name: 'DarkBuilder_04', job: 'Building Schematic', status: 'Construyendo (45%)', color: '#ffb900' }
                      ].map((bot, idx) => (
                        <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '0.5rem 0.65rem', display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{bot.name}</span>
                            <span className="pulse-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: bot.color, boxShadow: `0 0 6px ${bot.color}` }}></span>
                          </div>
                          <div style={{ fontSize: '0.65rem', color: 'var(--color-text-secondary)' }}>{bot.job}</div>
                          <div style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>{bot.status}</div>
                        </div>
                      ))}
                    </div>

                    {/* Quick Logs */}
                    <div style={{ background: '#04020a', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '0.15rem', overflow: 'hidden' }}>
                      <div style={{ color: 'var(--color-text-muted)' }}>[04:17:10] &lt;System&gt; Inyectando script en DarkMiner_01...</div>
                      <div style={{ color: 'var(--color-primary)' }}>[04:17:11] &lt;DarkMiner_01&gt; Iniciando trayectoria hacia coordenada (X: 120, Y: 64, Z: -200)</div>
                    </div>
                  </div>
                )}

                {/* 2. Terminal View */}
                {activeTab === 'terminal' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', height: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Terminal de Procesos</div>
                      <span style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>port: 3000</span>
                    </div>
                    
                    <div style={{ flexGrow: 1, background: '#04020a', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '0.35rem', overflowY: 'auto' }}>
                      <div style={{ color: 'var(--color-text-muted)' }}>$ npm run start -w packages/core</div>
                      <div style={{ color: 'var(--color-accent)' }}>[Fastify] Servidor corriendo en puerto 3000</div>
                      <div>[SQLite] Base de datos local inicializada exitosamente.</div>
                      <div>[Socket.io] Conexiones entrantes listas para dashboard.</div>
                      <div style={{ color: 'var(--color-primary)' }}>[Mineflayer] Conectando 4 bots a localhost:25565...</div>
                      <div style={{ color: 'var(--color-accent)' }}>[Mineflayer] Conexión establecida. Registrando oyentes de eventos.</div>
                      <div>[Ollama] Modelo local DeepSeek-Coder activo y cargado en memoria.</div>
                    </div>
                  </div>
                )}

                {/* 3. Security View */}
                {activeTab === 'security' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', height: '100%', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Seguridad y Proxies</div>
                      <span style={{ fontSize: '0.65rem', background: 'rgba(0, 240, 255, 0.1)', color: 'var(--color-primary)', border: '1px solid rgba(0, 240, 255, 0.2)', padding: '0.15rem 0.5rem', borderRadius: '9999px', fontWeight: 600 }}>
                        Proxy Pool Activo
                      </span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--color-border)', borderRadius: '6px', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Proxies en uso:</span>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-mono)' }}>4 Activos (100% OK)</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--color-border)', borderRadius: '6px', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Autenticación Offline:</span>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)' }}>Habilitado (Nativo)</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--color-border)', borderRadius: '6px', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Bypass Anti-Bot:</span>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)' }}>Activo (Humanized-delay)</span>
                      </div>
                    </div>

                    <div style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)', textAlign: 'center', fontStyle: 'italic' }}>
                      Las credenciales se cifran localmente con AES-256 en la base de datos SQLite.
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
