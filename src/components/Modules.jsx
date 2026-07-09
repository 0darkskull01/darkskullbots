import React, { useState } from 'react';
import { Sprout, Pickaxe, Anchor, Hammer, Package, Wind, Eye } from 'lucide-react';

const MODULES_DATA = [
  {
    id: 'farming',
    title: '🌾 Farming',
    icon: Sprout,
    tag: 'Automatización Agrícola',
    description: 'Olvídate de recolectar recursos agrícolas manualmente. El módulo Farming detecta cultivos de trigo, zanahorias, papas y remolachas completamente maduros, los cosecha automáticamente y vuelve a plantar semillas al instante.',
    features: [
      'Detección de bloques maduros por ID',
      'Rotación automática de inventario',
      'Replantado en milisegundos',
      'Evasión de agua y caída en hoyos'
    ]
  },
  {
    id: 'mining',
    title: '⛏️ Mining',
    icon: Pickaxe,
    tag: 'Minería Inteligente',
    description: 'Configura dimensiones rectangulares exactas en 3D (X, Y, Z) para que tus bots minen de forma autónoma. Esquivan lava automáticamente, usan el pico adecuado para cada mineral y vuelven al punto de spawn cuando se llena su inventario.',
    features: [
      'Minería de túneles y canteras en 3D',
      'Evasión automática de lava y grava',
      'Filtro inteligente de bloques específicos',
      'Alerta de inventario lleno con retorno automático'
    ]
  },
  {
    id: 'fishing',
    title: '🎣 Fishing',
    icon: Anchor,
    tag: 'Pesca Infinita',
    description: 'Encuentra bloques de agua cercanos, calcula la trayectoria ideal y lanza la caña de pescar. Cuenta con un algoritmo de detección ultra rápido que detecta las partículas de agua para recoger el pez al instante sin fallas.',
    features: [
      'Pesca en bucle continuo 24/7',
      'Detección de partículas para recoil instantáneo',
      'Cambio automático de cañas dañadas',
      'Clasificación y guardado de libros encantados'
    ]
  },
  {
    id: 'building',
    title: '🏗️ Building',
    icon: Hammer,
    tag: 'Construcción por Esquemas',
    description: 'Importa archivos de esquemas de construcción y tus bots recrearán estructuras completas bloque a bloque. Si se les acaban los materiales, detienen el proceso, alertan al panel y esperan reabastecimiento en cofres específicos.',
    features: [
      'Reconstrucción exacta bloque por bloque',
      'Velocidad de construcción ajustable',
      'Orientación perfecta de escaleras y pistones',
      'Pausa inteligente por falta de materiales'
    ]
  },
  {
    id: 'carrier',
    title: '🧺 Carrier',
    icon: Package,
    tag: 'Transporte Autónomo',
    description: 'Mueve ítems entre diferentes puntos del mapa de forma automatizada. Perfecto para organizar almacenes gigantes o mover recursos valiosos desde zonas de minado remotas hasta cofres centrales seguros.',
    features: [
      'Rutas de entrega programables',
      'Vaciamiento automático de inventario',
      'Interacción inteligente con cofres y tolvas',
      'Evasión activa de monstruos durante la ruta'
    ]
  },
  {
    id: 'elytra',
    title: '🪂 Elytra Flight',
    icon: Wind,
    tag: 'Vuelo de Larga Distancia',
    description: 'Controla el vuelo con Elytras de forma completamente autónoma para moverte rápidamente a destinos muy lejanos en segundos. Ideal para escapar de combates o viajar entre bases distantes.',
    features: [
      'Vuelo autónomo asistido por cohetes',
      'Cálculo de trayectorias y evasión de montañas',
      'Aterrizaje suave automático sin daño por caída',
      'Monitoreo activo de durabilidad de Elytra'
    ]
  },
  {
    id: 'scout',
    title: '🚁 Scout & Radar',
    icon: Eye,
    tag: 'Exploración y Mapeo',
    description: 'Reconoce y mapea áreas completas en un radio indicado. Tus bots reportarán en tiempo real la ubicación de estructuras, cofres de botín, bases enemigas y coordenadas de jugadores activos.',
    features: [
      'Mapeo 3D del terreno circundante',
      'Radar de entidades y jugadores cercanos',
      'Reportes en tiempo real enviados al dashboard',
      'Alertas de amenazas y zonas de peligro'
    ]
  }
];

export default function Modules() {
  const [activeTab, setActiveTab] = useState('farming');
  const currentModule = MODULES_DATA.find(m => m.id === activeTab);

  return (
    <section className="section" id="modules">
      <div className="neon-orb orb-green"></div>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Módulos de <span className="text-gradient-purple-green">Automatización</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
            Nuestros módulos integrados te permiten lanzar tareas preconfiguradas sin escribir una sola línea de código.
          </p>
        </div>

        <div className="modules-section">
          {/* Module List Selection */}
          <div className="modules-list">
            {MODULES_DATA.map((mod) => {
              const IconComponent = mod.icon;
              return (
                <button
                  key={mod.id}
                  className={`module-item ${activeTab === mod.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(mod.id)}
                >
                  <div className="module-item-icon">
                    <IconComponent size={20} />
                  </div>
                  <div className="module-item-info">
                    <h4>{mod.title.split(' ').slice(1).join(' ')}</h4>
                    <p>{mod.tag}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Module Details Display */}
          <div className="glass-card module-display-card" style={{ height: 'auto', minHeight: '480px' }}>
            <div>
              <div className="module-display-header">
                <span className="module-tag">{currentModule.tag}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontFamily: 'var(--font-mono)' }}>{currentModule.id}_module.js</span>
              </div>
              <div className="module-details">
                <h3>{currentModule.title}</h3>
                <p className="module-description">{currentModule.description}</p>
              </div>
            </div>

            <div>
              <h5 style={{ textTransform: 'uppercase', fontSize: '0.75rem', color: 'var(--color-text-muted)', letterSpacing: '0.05em', marginBottom: '1rem', marginTop: '2rem' }}>
                Capacidades clave del módulo
              </h5>
              <ul className="module-features-list">
                {currentModule.features.map((feature, idx) => (
                  <li key={idx} className="module-feature-bullet">
                    <span className="module-bullet-dot"></span>
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
