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
          <div className="hero-mockup-wrapper" style={{ borderRadius: '8px', background: '#0a0a0a', border: '1px solid #222' }}>
            
            {/* Window chrome (Windows style) */}
            <div style={{ height: '32px', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1rem', borderBottom: '1px solid #1f1f1f' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-secondary)' }}>BotsDarkSkull</span>
                <span style={{ fontSize: '0.7rem', color: '#888' }}>01:26</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', color: '#888', fontSize: '0.8rem' }}>
                <span style={{ cursor: 'pointer' }}>_</span>
                <span style={{ cursor: 'pointer' }}>□</span>
                <span style={{ cursor: 'pointer' }}>×</span>
              </div>
            </div>

            {/* App body */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '130px 1fr',
                height: '440px',
                position: 'relative'
              }}
            >
              {/* Sidebar */}
              <div
                style={{
                  borderRight: '1px solid #1f1f1f',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '0.5rem 0',
                  background: '#0a0a0a',
                  overflowY: 'auto'
                }}
              >
                {[
                  { id: 'dashboard', icon: Cpu, label: 'Dashboard', active: true },
                  { id: 'lanzador', icon: Play, label: 'Lanzador' },
                  { id: 'constructor', icon: Shield, label: 'Constructor' }, // using shield as placeholder for hammer
                  { id: 'tareas', icon: Terminal, label: 'Tareas' },
                  { id: 'macros', icon: Terminal, label: 'Macros' },
                  { id: 'mineria', icon: Terminal, label: 'Minería' },
                  { id: 'coder', icon: Terminal, label: '</> Coder' },
                  { id: 'monitoreo', icon: Terminal, label: 'Monitoreo' },
                  { id: 'anticaptcha', icon: Shield, label: 'AntiCaptcha' },
                  { id: 'ajustes', icon: Terminal, label: 'Ajustes' },
                ].map(({ id, icon: Icon, label, active }) => (
                  <div
                    key={id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.4rem 0.75rem',
                      margin: '0 0.25rem',
                      borderRadius: '4px',
                      background: active ? '#1a1a1a' : 'transparent',
                      color: active ? '#fff' : '#888',
                      fontSize: '0.7rem',
                      cursor: 'pointer',
                      borderLeft: active ? '2px solid var(--color-secondary)' : '2px solid transparent'
                    }}
                  >
                    <Icon size={12} />
                    {label}
                  </div>
                ))}
                
                <div style={{ marginTop: 'auto', padding: '1rem', fontSize: '0.6rem', color: '#555', textAlign: 'center' }}>
                  by _DarkSkull
                </div>
              </div>

              {/* Content panel */}
              <div
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  overflow: 'hidden',
                  position: 'relative',
                  background: '#0e0e11' // Slightly different background for main area
                }}
              >
                {/* Fake particles background pattern */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(176, 38, 255, 0.05) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(0, 229, 255, 0.05) 0%, transparent 40%)',
                  pointerEvents: 'none'
                }} />

                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                  <div>
                    <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '0.1rem' }}>Resumen de Bots</h2>
                    <p style={{ fontSize: '0.75rem', color: '#888' }}>Gestión de tus bots de Minecraft</p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {['Poner spawn en cama', 'Desconectar Todo', 'Conectar Todo'].map(btn => (
                      <button key={btn} style={{ background: 'transparent', border: '1px solid #333', color: '#ccc', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.65rem', cursor: 'pointer' }}>
                        {btn}
                      </button>
                    ))}
                    <button style={{ background: 'transparent', border: '1px solid #444', color: '#fff', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.65rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <span>+</span> Connect Bot
                    </button>
                  </div>
                </div>

                {/* Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', position: 'relative', zIndex: 1 }}>
                  {[
                    { id: '01', ip: 'infection.fun:25565', status: 'disconnected' },
                    { id: '02', ip: 'infection.fun:25565', status: 'disconnected' },
                    { id: '03', ip: 'infection.fun:25565', status: 'disconnected' },
                    { id: '04', ip: 'infection.fun:25565', status: 'disconnected' },
                  ].map(bot => (
                    <div key={bot.id} style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid #1a1a1a', borderRadius: '8px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                          <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
                            <Shield size={14} />
                          </div>
                          <div>
                            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>farmbot{bot.id}</div>
                            <div style={{ fontSize: '0.6rem', color: '#666' }}>ID: bot-17844200{bot.id}121</div>
                          </div>
                        </div>
                        <button style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'transparent', border: '1px solid #333', color: '#888', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                          <span style={{ fontSize: '10px' }}>⏻</span>
                        </button>
                      </div>
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.65rem', color: '#888' }}>
                          <span style={{ fontSize: '10px' }}>((•))</span> {bot.ip}
                        </div>
                        <div style={{ fontSize: '0.65rem', color: '#666' }}>
                          {bot.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Activity Log */}
                <div style={{ marginTop: '1rem', position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <div style={{ color: '#fff' }}>
                      <Terminal size={14} />
                    </div>
                    <h3 style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>Registro de Actividad</h3>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: '#888' }}>No hay tareas ejecutadas en esta sesión.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
