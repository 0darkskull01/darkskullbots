import React, { useState, useEffect } from 'react';
import { Play, RefreshCw, Layers } from 'lucide-react';

const PRESETS = {
  creeper: {
    name: 'Creeper Face',
    grid: [
      ['G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G'],
      ['G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G'],
      ['G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G'],
      ['G','G','B','B','G','G','G','G','G','G','G','G','B','B','G','G'],
      ['G','G','B','B','G','G','G','G','G','G','G','G','B','B','G','G'],
      ['G','G','G','G','G','G','B','B','B','B','G','G','G','G','G','G'],
      ['G','G','G','G','G','B','B','B','B','B','B','G','G','G','G','G'],
      ['G','G','G','G','G','B','B','B','B','B','B','G','G','G','G','G'],
      ['G','G','G','G','G','B','B','G','G','B','B','G','G','G','G','G'],
      ['G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G'],
      ['G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G'],
      ['G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G'],
      ['G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G'],
      ['G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G'],
      ['G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G'],
      ['G','G','G','G','G','G','G','G','G','G','G','G','G','G','G','G']
    ],
    materials: { 'Lana Verde (lime_wool)': 212, 'Lana Negra (black_wool)': 44 }
  },
  corazon: {
    name: 'Corazón Retro',
    grid: [
      ['X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X'],
      ['X','X','X','B','B','B','X','X','X','X','B','B','B','X','X','X'],
      ['X','X','B','R','R','R','B','X','X','B','R','R','R','B','X','X'],
      ['X','B','R','R','R','R','R','B','B','R','R','R','R','R','B','X'],
      ['X','B','R','R','R','R','R','R','R','R','R','R','R','R','B','X'],
      ['X','B','R','R','R','R','R','R','R','R','R','R','R','R','B','X'],
      ['X','X','B','R','R','R','R','R','R','R','R','R','R','B','X','X'],
      ['X','X','X','B','R','R','R','R','R','R','R','R','B','X','X','X'],
      ['X','X','X','X','B','R','R','R','R','R','R','B','X','X','X','X'],
      ['X','X','X','X','X','B','R','R','R','R','B','X','X','X','X','X'],
      ['X','X','X','X','X','X','B','R','R','B','X','X','X','X','X','X'],
      ['X','X','X','X','X','X','X','B','B','X','X','X','X','X','X','X'],
      ['X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X'],
      ['X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X'],
      ['X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X'],
      ['X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X']
    ],
    materials: { 'Hormigón Rojo (red_concrete)': 72, 'Lana Negra (black_wool)': 28, 'Vacío': 156 }
  },
  espada: {
    name: 'Espada Diamante',
    grid: [
      ['X','X','X','X','X','X','X','X','X','X','X','X','X','X','C','B'],
      ['X','X','X','X','X','X','X','X','X','X','X','X','X','C','B','C'],
      ['X','X','X','X','X','X','X','X','X','X','X','X','C','B','C','X'],
      ['X','X','X','X','X','X','X','X','X','X','X','C','B','C','X','X'],
      ['X','X','X','X','X','X','X','X','X','X','C','B','C','X','X','X'],
      ['X','X','X','X','X','X','X','X','X','C','B','C','X','X','X','X'],
      ['X','X','X','X','X','X','X','X','C','B','C','X','X','X','X','X'],
      ['X','X','X','X','X','X','X','C','B','C','X','X','X','X','X','X'],
      ['X','X','X','X','X','X','C','B','C','X','X','X','X','X','X','X'],
      ['X','X','X','X','X','C','B','C','X','X','X','X','X','X','X','X'],
      ['X','X','X','X','C','B','C','X','X','X','X','X','X','X','X','X'],
      ['X','X','X','W','B','C','X','X','X','X','X','X','X','X','X','X'],
      ['X','X','W','M','W','X','X','X','X','X','X','X','X','X','X','X'],
      ['X','W','M','W','X','X','X','X','X','X','X','X','X','X','X','X'],
      ['B','M','W','X','X','X','X','X','X','X','X','X','X','X','X','X'],
      ['B','B','X','X','X','X','X','X','X','X','X','X','X','X','X','X']
    ],
    materials: { 'Diamante (cyan_concrete)': 11, 'Madera (oak_planks)': 3, 'Lana Negra (black_wool)': 28, 'Lana Celeste (light_blue_wool)': 11, 'Vacío': 203 }
  }
};

export default function MapArtSimulator() {
  const [presetKey, setPresetKey] = useState('creeper');
  const [simulatedGrid, setSimulatedGrid] = useState(
    Array(16).fill(null).map(() => Array(16).fill('X'))
  );
  const [status, setStatus] = useState('ready'); // 'ready', 'rendering', 'done'
  const [currentRow, setCurrentRow] = useState(-1);

  const getColor = (char) => {
    switch (char) {
      case 'G': return '#2ecc71'; // Green
      case 'B': return '#111111'; // Black
      case 'R': return '#e74c3c'; // Red
      case 'C': return '#00f0ff'; // Cyan
      case 'M': return '#8B5A2B'; // Brown
      case 'W': return '#d2b48c'; // Light Brown
      default: return 'rgba(255, 255, 255, 0.05)'; // Empty
    }
  };

  // Safe animation loop driving by React render cycle
  useEffect(() => {
    if (status !== 'rendering') return;

    if (currentRow >= 16) {
      setStatus('done');
      return;
    }

    const timer = setTimeout(() => {
      setSimulatedGrid((prev) => {
        const newGrid = prev.map((r) => [...r]);
        const targetGrid = PRESETS[presetKey].grid;
        if (targetGrid[currentRow]) {
          newGrid[currentRow] = [...targetGrid[currentRow]];
        }
        return newGrid;
      });
      setCurrentRow((prev) => prev + 1);
    }, 120); // Faster draw row by row

    return () => clearTimeout(timer);
  }, [status, currentRow, presetKey]);

  const startSimulation = () => {
    if (status === 'rendering') return;
    
    // Reset grid and row index, then trigger rendering
    setSimulatedGrid(Array(16).fill(null).map(() => Array(16).fill('X')));
    setCurrentRow(0);
    setStatus('rendering');
  };

  const resetSimulator = () => {
    setSimulatedGrid(Array(16).fill(null).map(() => Array(16).fill('X')));
    setCurrentRow(-1);
    setStatus('ready');
  };

  return (
    <section className="section" id="mapart" style={{ background: 'rgba(7, 3, 14, 0.1)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Simulador <span className="text-gradient-cyan-purple">MapArt 3D</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
            Nuestra app convierte cualquier imagen en un plano de construcción de bloques. Pruébalo en vivo con este simulador.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3rem', alignItems: 'center' }}>
          {/* Controls */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>1. Selecciona Imagen</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                Elige un diseño predefinido para ver cómo el bot calcula la distribución de bloques.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {Object.keys(PRESETS).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    if (status !== 'rendering') {
                      setPresetKey(key);
                      resetSimulator();
                    }
                  }}
                  disabled={status === 'rendering'}
                  style={{
                    flexGrow: 1,
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: '1px solid var(--color-border)',
                    background: presetKey === key ? 'rgba(0, 240, 255, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                    borderColor: presetKey === key ? 'var(--color-primary)' : 'var(--color-border)',
                    color: presetKey === key ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                    fontWeight: 700,
                    cursor: status === 'rendering' ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {PRESETS[key].name}
                </button>
              ))}
            </div>

            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>2. Ejecutar Conversión</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                El simulador convierte la imagen pixel por pixel en comandos de colocación de bloques para el bot.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  className="btn btn-primary"
                  onClick={startSimulation}
                  disabled={status === 'rendering'}
                  style={{ flexGrow: 1, justifyContent: 'center' }}
                >
                  <Play size={16} fill="currentColor" />
                  Convertir Imagen
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={resetSimulator}
                  disabled={status === 'rendering'}
                  style={{ padding: '0.75rem 1rem' }}
                >
                  <RefreshCw size={16} />
                </button>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Materiales Requeridos:
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {Object.entries(PRESETS[presetKey].materials).map(([mat, count]) => (
                  <div key={mat} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                    <span>{mat}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontWeight: 700 }}>x{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Screen View */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-primary)' }}>
                <Layers size={16} />
                <span>Bloques Colocados: {status === 'rendering' ? `Fila ${currentRow}/16` : status === 'done' ? 'Completado' : 'Listo'}</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>mapart_converter.ts</span>
            </div>

            {/* Simulated Block Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(16, 1fr)',
              gap: '2px',
              background: '#040209',
              padding: '8px',
              borderRadius: '8px',
              border: '1px solid var(--color-border)',
              width: '100%',
              maxWidth: '360px',
              aspectRatio: '1/1'
            }}>
              {simulatedGrid.flatMap((row, rIdx) => 
                row.map((char, cIdx) => (
                  <div
                    key={`${rIdx}-${cIdx}`}
                    style={{
                      background: getColor(char),
                      borderRadius: '2px',
                      transition: 'background-color 0.15s ease',
                      border: char !== 'X' ? '1px solid rgba(255, 255, 255, 0.15)' : 'none'
                    }}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
