import React, { useState } from 'react';
import { Sprout, Pickaxe, Anchor, Hammer, Package, Wind, Eye } from 'lucide-react';

const MODULE_COLORS = {
  farming: { color: '#39ff14', glow: 'rgba(57,255,20,0.3)', bg: 'rgba(57,255,20,0.1)', border: 'rgba(57,255,20,0.3)' },
  mining: { color: '#ffb900', glow: 'rgba(255,185,0,0.3)', bg: 'rgba(255,185,0,0.1)', border: 'rgba(255,185,0,0.3)' },
  fishing: { color: '#00e5ff', glow: 'rgba(0,229,255,0.3)', bg: 'rgba(0,229,255,0.1)', border: 'rgba(0,229,255,0.3)' },
  building: { color: '#ff7c52', glow: 'rgba(255,124,82,0.3)', bg: 'rgba(255,124,82,0.1)', border: 'rgba(255,124,82,0.3)' },
  carrier: { color: '#b026ff', glow: 'rgba(176,38,255,0.3)', bg: 'rgba(176,38,255,0.1)', border: 'rgba(176,38,255,0.3)' },
  elytra: { color: '#e040fb', glow: 'rgba(224,64,251,0.3)', bg: 'rgba(224,64,251,0.1)', border: 'rgba(224,64,251,0.3)' },
  scout: { color: '#40c4ff', glow: 'rgba(64,196,255,0.3)', bg: 'rgba(64,196,255,0.1)', border: 'rgba(64,196,255,0.3)' },
};

const MODULES_DATA = [
  {
    id: 'farming',
    emoji: '🌾',
    title: 'Farming',
    icon: Sprout,
    tag: 'Automatización Agrícola',
    description: 'Olvídate de recolectar recursos agrícolas manualmente. El módulo Farming detecta cultivos maduros de trigo, zanahorias, papas y remolachas, los cosecha automáticamente y vuelve a plantar semillas al instante.',
    features: ['Detección de bloques maduros por ID', 'Rotación automática de inventario', 'Replantado en milisegundos', 'Evasión de agua y caída en hoyos'],
  },
  {
    id: 'mining',
    emoji: '⛏️',
    title: 'Mining',
    icon: Pickaxe,
    tag: 'Minería Inteligente',
    description: 'Configura dimensiones rectangulares exactas en 3D (X, Y, Z) para que tus bots minen de forma autónoma. Esquivan lava automáticamente, usan el pico adecuado para cada mineral y vuelven al spawn cuando el inventario se llena.',
    features: ['Minería de túneles y canteras en 3D', 'Evasión automática de lava y grava', 'Filtro inteligente de bloques específicos', 'Retorno automático con inventario lleno'],
  },
  {
    id: 'fishing',
    emoji: '🎣',
    title: 'Fishing',
    icon: Anchor,
    tag: 'Pesca Infinita',
    description: 'Encuentra bloques de agua cercanos, calcula la trayectoria ideal y lanza la caña. Cuenta con un algoritmo de detección ultra rápido de partículas de agua para recoger el pez sin fallas.',
    features: ['Pesca en bucle continuo 24/7', 'Detección de partículas para recoil instantáneo', 'Cambio automático de cañas dañadas', 'Clasificación de libros encantados'],
  },
  {
    id: 'building',
    emoji: '🏗️',
    title: 'Building',
    icon: Hammer,
    tag: 'Construcción por Esquemas',
    description: 'Importa archivos de esquemas y tus bots recrearán estructuras completas bloque a bloque. Si se les acaban los materiales, alertan al panel y esperan reabastecimiento en cofres específicos.',
    features: ['Reconstrucción exacta bloque por bloque', 'Velocidad de construcción ajustable', 'Orientación perfecta de escaleras y pistones', 'Pausa inteligente por falta de materiales'],
  },
  {
    id: 'carrier',
    emoji: '🧺',
    title: 'Carrier',
    icon: Package,
    tag: 'Transporte Autónomo',
    description: 'Mueve ítems entre diferentes puntos del mapa de forma automatizada. Perfecto para organizar almacenes gigantes o mover recursos desde zonas remotas hasta cofres centrales.',
    features: ['Rutas de entrega programables', 'Vaciamiento automático de inventario', 'Interacción inteligente con cofres y tolvas', 'Evasión activa de monstruos en ruta'],
  },
  {
    id: 'elytra',
    emoji: '🪂',
    title: 'Elytra Flight',
    icon: Wind,
    tag: 'Vuelo de Larga Distancia',
    description: 'Controla el vuelo con Elytras de forma completamente autónoma para moverte a destinos muy lejanos en segundos. Ideal para escapar de combates o viajar entre bases distantes.',
    features: ['Vuelo autónomo asistido por cohetes', 'Cálculo de trayectorias y evasión de montañas', 'Aterrizaje suave sin daño por caída', 'Monitoreo de durabilidad de Elytra'],
  },
  {
    id: 'scout',
    emoji: '🚁',
    title: 'Scout & Radar',
    icon: Eye,
    tag: 'Exploración y Mapeo',
    description: 'Reconoce y mapea áreas en un radio indicado. Tus bots reportarán en tiempo real la ubicación de estructuras, cofres de botín, bases enemigas y coordenadas de jugadores activos.',
    features: ['Mapeo 3D del terreno circundante', 'Radar de entidades y jugadores cercanos', 'Reportes en tiempo real al dashboard', 'Alertas de amenazas y zonas de peligro'],
  },
];

export default function Modules() {
  const [activeTab, setActiveTab] = useState('farming');
  const currentModule = MODULES_DATA.find((m) => m.id === activeTab);
  const colors = MODULE_COLORS[activeTab];

  return (
    <section className="section" id="modules">
      <div className="neon-orb orb-green" />
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Módulos de <span className="text-gradient-purple-green">Automatización</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto' }}>
            Lanza tareas especializadas preconfiguradas sin escribir una sola línea de código. Cada módulo es un agente autónomo experto en su tarea.
          </p>
        </div>

        <div className="modules-section">
          {/* Module List */}
          <div className="modules-list">
            {MODULES_DATA.map((mod) => {
              const mc = MODULE_COLORS[mod.id];
              const isActive = activeTab === mod.id;
              return (
                <button
                  key={mod.id}
                  className={`module-item ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTab(mod.id)}
                  style={
                    isActive
                      ? {
                          background: `${mc.bg}`,
                          borderColor: mc.border,
                          boxShadow: `0 0 20px ${mc.bg}`,
                        }
                      : {}
                  }
                >
                  <div
                    className="module-item-icon"
                    style={
                      isActive
                        ? {
                            background: mc.color,
                            color: '#050208',
                            boxShadow: `0 0 12px ${mc.glow}`,
                          }
                        : {}
                    }
                  >
                    <span role="img" aria-label={mod.title} style={{ fontSize: '1rem' }}>
                      {mod.emoji}
                    </span>
                  </div>
                  <div className="module-item-info">
                    <h4>{mod.title}</h4>
                    <p>{mod.tag}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Module Display */}
          <div
            className="glass-card module-display-card"
            style={{ borderLeftColor: colors.color, minHeight: '480px' }}
          >
            <div className="module-display-content" key={activeTab}>
              <div className="module-display-header">
                <span
                  className="module-tag"
                  style={{
                    background: colors.bg,
                    color: colors.color,
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  {currentModule.tag}
                </span>
                <span
                  style={{
                    fontSize: '0.82rem',
                    color: colors.color,
                    fontFamily: 'var(--font-mono)',
                    opacity: 0.8,
                  }}
                >
                  {currentModule.id}_module.js
                </span>
              </div>

              <div className="module-details">
                <h3>
                  {currentModule.emoji} {currentModule.title}
                </h3>
                <p className="module-description">{currentModule.description}</p>
              </div>
            </div>

            <div>
              <h5
                style={{
                  textTransform: 'uppercase',
                  fontSize: '0.72rem',
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.06em',
                  marginBottom: '1rem',
                  marginTop: '2rem',
                }}
              >
                Capacidades clave del módulo
              </h5>
              <ul className="module-features-list">
                {currentModule.features.map((feature, idx) => (
                  <li key={idx} className="module-feature-bullet">
                    <span
                      className="module-bullet-dot"
                      style={{
                        background: colors.color,
                        boxShadow: `0 0 6px ${colors.glow}`,
                      }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
