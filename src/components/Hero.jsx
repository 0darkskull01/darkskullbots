import React, { useState } from 'react';
import { Terminal, Shield, Cpu, Play, Zap } from 'lucide-react';

const TECH_CHIPS = [
  'Electron 42', 'Fastify', 'Socket.IO', 'SQLite', 'Mineflayer', 'TypeScript'
];

const TABS = [
  { id: 'dashboard', icon: Cpu, label: 'Dashboard' },
  { id: 'terminal', icon: Terminal, label: 'Terminal' },
  { id: 'security', icon: Shield, label: 'Seguridad' },
];

const BOTS = [
  { name: 'DarkMiner_01', job: 'Mining Iron/Coal', status: 'Minando (Nether)', color: '#00f0ff' },
  { name: 'DarkFarmer_02', job: 'Harvesting Wheat', status: 'Replantando', color: '#bd00ff' },
  { name: 'DarkFighter_03', job: 'Sentry Defense', status: 'Vigilando spawn', color: '#39ff14' },
  { name: 'DarkBuilder_04', job: 'Building Schematic', status: 'Construyendo (45%)', color: '#ffb900' },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <section className="section hero-section" id="hero">
      <div className="container hero-content">
        {/* ── Text Side ── */}
        <div className="hero-text">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            <Zap size={12} fill="currentColor" />
            v1.0.0 Estable · +500 descargas · Soporte Wayland nativo
          </div>

          <h1>
            Control Total de Bots de{' '}
            <span className="text-gradient-cyan-purple">Minecraft</span>
          </h1>

          <p>
            BotsDarkSkull es la aplicación de escritorio premium más avanzada del mercado. Controla decenas de bots simultáneamente, automatiza tareas con IA en lenguaje natural y domina cualquier servidor con proxies individuales y reconexión automática.
          </p>

          <div className="hero-buttons">
            <a href="#pricing" className="btn btn-primary" id="hero-cta-primary">
              <Play size={16} fill="currentColor" />
              Adquirir Licencia
            </a>
            <a href="#modules" className="btn btn-secondary" id="hero-cta-secondary">
              Ver Características
            </a>
          </div>

          <div className="hero-tech-chips">
            {TECH_CHIPS.map((chip) => (
              <span key={chip} className="hero-tech-chip">
                <span className="hero-tech-chip-dot" />
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* ── Mockup Side ── */}
        <div className="hero-mockup animate-float">
          <div className="hero-mockup-wrapper" style={{ borderRadius: '12px' }}>
            {/* Window chrome */}
            <div className="mockup-header" style={{ height: '48px', padding: '0 1.25rem' }}>
              <div className="mockup-dots" style={{ gap: '8px' }}>
                <span className="mockup-dot" style={{ width: '12px', height: '12px' }} />
                <span className="mockup-dot" style={{ width: '12px', height: '12px' }} />
                <span className="mockup-dot" style={{ width: '12px', height: '12px' }} />
              </div>
              <div className="mockup-title" style={{ fontSize: '0.85rem', marginLeft: '1rem' }}>BotsDarkSkull v1.0.0 — Panel Interactivo</div>
            </div>

            {/* App body */}
            <div
              style={{
                background: '#090514',
                display: 'grid',
                gridTemplateColumns: '75px 1fr',
                height: '420px',
              }}
            >
              {/* Sidebar */}
              <div
                style={{
                  borderRight: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  padding: '1.25rem 0',
                  alignItems: 'center',
                }}
              >
                {TABS.map(({ id, icon: Icon, label }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    title={label}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background:
                        activeTab === id ? 'rgba(0, 240, 255, 0.05)' : 'transparent',
                      border:
                        activeTab === id
                          ? '1.5px solid var(--color-primary)'
                          : '1.5px solid transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color:
                        activeTab === id
                          ? 'var(--color-primary)'
                          : 'var(--color-text-muted)',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <Icon size={20} strokeWidth={activeTab === id ? 2.5 : 2} />
                  </button>
                ))}
              </div>

              {/* Content panel */}
              <div
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  overflow: 'hidden',
                }}
              >
                {/* Dashboard */}
                {activeTab === 'dashboard' && (
                  <div className="mockup-tab-content" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                      <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>Panel de Squad (4 bots)</div>
                      <span style={{ fontSize: '0.75rem', background: '#39ff140d', color: 'var(--color-accent)', border: '1px solid rgba(57,255,20,0.3)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ width: '8px', height: '8px', background: 'var(--color-accent)', borderRadius: '50%', boxShadow: '0 0 8px var(--color-accent)' }}></span>
                        Servidor Activo
                      </span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem', flex: 1 }}>
                      {BOTS.map((bot, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px solid var(--color-border)',
                            borderRadius: '8px',
                            padding: '1rem 1.25rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.4rem',
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                            <span style={{ fontSize: '0.9rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--color-text-primary)' }}>
                              {bot.name}
                            </span>
                            <span
                              style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: bot.color,
                                boxShadow: `0 0 8px ${bot.color}`,
                                animation: 'pulse-dot 1.5s infinite',
                              }}
                            />
                          </div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>{bot.job}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>{bot.status}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ background: '#04020a', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '0.8rem 1rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.3rem', marginTop: '0.5rem' }}>
                      <div style={{ color: 'var(--color-text-muted)' }}>[04:17:10] &lt;System&gt; Inyectando script en DarkMiner_01...</div>
                      <div style={{ color: 'var(--color-primary)' }}>[04:17:11] &lt;DarkMiner_01&gt; Iniciando trayectoria → (120, 64, -200)</div>
                    </div>
                  </div>
                )}

                {/* Terminal */}
                {activeTab === 'terminal' && (
                  <div className="mockup-tab-content" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', height: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <div style={{ fontSize: '1.15rem', fontWeight: 800 }}>Terminal de Procesos</div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>port :4200</span>
                    </div>
                    <div style={{ flexGrow: 1, background: '#04020a', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '1.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '0.5rem', overflowY: 'auto' }}>
                      <div style={{ color: 'var(--color-text-muted)' }}>$ npm run start -w packages/core</div>
                      <div style={{ color: 'var(--color-accent)' }}>[Fastify] Servidor corriendo en puerto 4200 ✓</div>
                      <div>[SQLite] Base de datos local inicializada.</div>
                      <div>[Socket.io] Conexiones entrantes listas.</div>
                      <div style={{ color: 'var(--color-primary)' }}>[Mineflayer] Conectando 4 bots a mc.server:25565...</div>
                      <div style={{ color: 'var(--color-accent)' }}>[Mineflayer] Conexión establecida. Registrando eventos.</div>
                      <div>[Ollama] Modelo DeepSeek-Coder activo en memoria.</div>
                      <div style={{ color: '#ffb900' }}>[Licencia] Licencia vitalicia verificada ✓</div>
                    </div>
                  </div>
                )}

                {/* Security */}
                {activeTab === 'security' && (
                  <div className="mockup-tab-content" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ fontSize: '1.15rem', fontWeight: 800 }}>Seguridad y Proxies</div>
                      <span style={{ fontSize: '0.75rem', background: 'rgba(0,240,255,0.05)', color: 'var(--color-primary)', border: '1px solid rgba(0,240,255,0.2)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: 600 }}>
                        Pool Activo
                      </span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {[
                        { label: 'Proxies en uso', value: '4 Activos (100% OK)', color: 'var(--color-primary)' },
                        { label: 'Autenticación Offline', value: 'Habilitado (Nativo)', color: 'var(--color-accent)' },
                        { label: 'Bypass Anti-Bot', value: 'Activo (Humanized)', color: 'var(--color-accent)' },
                        { label: 'Cifrado credenciales', value: 'AES-256 SQLite', color: '#ffb900' },
                      ].map(({ label, value, color }) => (
                        <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.85rem 1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--color-border)', borderRadius: '8px', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>{label}</span>
                          <span style={{ fontSize: '0.85rem', fontWeight: 700, color, fontFamily: 'var(--font-mono)' }}>{value}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textAlign: 'center', fontStyle: 'italic', paddingBottom: '0.5rem' }}>
                      Las API Keys nunca se envían a servidores externos.
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
